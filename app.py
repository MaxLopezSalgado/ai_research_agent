# Import Libraries
import os 
from dotenv import load_dotenv

from langchain import PromptTemplate
from langchain.agents import initialize_agent, tool
from langchain.agents import  AgentType
from langchain.chat_models import ChatOpenAI
from langchain.prompts import MessagesPlaceholder
from langchain.memory import ConversationSummaryBufferMemory
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains.summarize import load_summarize_chain
from langchain.tools import BaseTool
from pydantic import BaseModel, Field
from typing import Type
from bs4 import BeautifulSoup
import requests
import json
import streamlit as st
from langchain.schema import SystemMessage   


load_dotenv()
browserless_api_key = os.getenv('BROWSERLESS_API_KEY')
serper_api_key = os.getenv('SERP_API_KEY')


# 1. Tool for searching
def search(query):
    url = "https://google.serper.dev/search"

    payload = json.dumps({
    "q": query
    })

    headers = {
    "X-API-KEY": serper_api_key,
    "Content-Type": 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)

    return response.text

search("what is meta's thread product?")

# 2. Tool for scraping
def scrape_website(objective: str, url: str):
    # scrape website, and also will summarize the content based on objective if the content is too large
    # objective is the original objective & task that user give to the agent, url is the url of the website to be scraped

    print("Scrapping Website...")

    # Define the headers of the request
    headers = {
        'Cache-Control': 'no-cache',
        'Content-Type' : 'application/json',         
    }

    # Define the data to be sent in the request
    data = {
        "url" : url
    }

    # Convert the python object to a json string
    data_json = json.dumps(data)

    # Send the post request
    post_url = f"https://chrome.browserless.io/content?token={browserless_api_key}"
    response = requests.post(post_url, headers=headers, data=data_json)

    # Check the response status code
    if response.status_code == 200: 
        soup = BeautifulSoup(response.content, "html.parser")
        text = soup.get_text()
        print("Content:", text)

        if len(text) > 10000:
            output = summary(objective, text)
            return output
        else:
            return text 
    else:
        print(f"Http request failed with status code: {response.status_code}")

def summary(objective, content):
    llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo-16k-0613")

    text_splitter = RecursiveCharacterTextSplitter(
        separators =["\n\n", "\n"], chunk_size=10000, chunk_overlap=500)
    
    docs = text_splitter.create_documents([content])

    map_prompt = """
    Write a summary of the following text for {objective}:
    "{text}"
    Summary: 
    """

    map_prompt_template = PromptTemplate(
        template = map_prompt, imput_variables=["text", "objective"])
    
    summary_chain = load_summarize_chain(
        llm = llm,
        chain_type = map_prompt_template,
        combine_prompt = map_prompt_template, 
        verbose = True
    )

    output = summary_chain.run(imput_documents= docs, objective= objective)

    return output

class ScrapeWebsiteInput(BaseModel):
    objective: str = Field(Description= "The objective & taks that the user give to the agent")
    url: str = Field(description= "The url of the webseite to be scraped")

class ScrapeWebsiteTool(BaseTool):
    name = "scrape_website"
    description = "useful when you need to get data from a website url, passing both url and objective to the function; DO NOT make up any url, the url should only be from the search results"
    args_schema: Type[BaseModel] = ScrapeWebsiteInput

    def _run(self, objective: str, url: str):
        return scrape_website(objective, url)

    def _arun(self, url: str):
        raise NotImplementedError("error here")

# 3. Create a langchain agent with tools above
