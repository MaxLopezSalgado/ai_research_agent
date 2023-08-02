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
    if response.status_code = 200 
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

    

# 3. Create a langchain agent with tools above
