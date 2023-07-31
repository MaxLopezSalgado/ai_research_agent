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


# 3. Create a langchain agent with tools above
