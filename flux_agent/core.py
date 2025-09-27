import openai
from config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

class FX1Flux:
    def __init__(self):
        self.name = "FX1 Flux"
        self.skills = [
            "Web3",
            "NFTs",
            "Crypto Market",
            "Tech Trends",
            "Fashion Design",
            "Twitter Automation"
        ]
    
    def ask(self, prompt, role="user"):
        """Query the FX1 Flux AI core"""
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": f"You are {self.name}, an AI agent for FX1 Digital Hubs with expertise in Web3, NFTs, crypto, tech, fashion, and social media."},
                      {"role": role, "content": prompt}]
        )
        return response["choices"][0]["message"]["content"]
