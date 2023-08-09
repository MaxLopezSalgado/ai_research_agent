import requests

print(
    requests.post(
        "https://ai-research-agent-deploy.onrender.com",
        json={
            "query": "what is meta's new product thread?"
        }
    ).json()
)





