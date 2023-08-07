import requests

print(
    requests.post(
        "http://localhost:8000/docs",
        json={
            "query": "what is meta's new product thread?"
        }
    ).json()
)