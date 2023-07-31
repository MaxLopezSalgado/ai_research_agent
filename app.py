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
from langchain.chains.sumarize import load_sumarize_chain
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


# 2. Tool for scraping


# 3. Create a langchain agent with tools above