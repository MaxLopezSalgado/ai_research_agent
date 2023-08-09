import requests

print(
    requests.post(
        "https://0.0.0.0:1000/research",
        json={
            "query": "what is meta's new product thread?"
        }
    ).json()
)





