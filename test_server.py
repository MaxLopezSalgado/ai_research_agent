import requests

print(
    requests.post(
        "http://127.0.0.1:10000",
        json={
            "query": "what is meta's new product thread?"
        }
    ).json()
)