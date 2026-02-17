
# import os

# from dotenv import load_dotenv
# from google import genai

# # load_dotenv()

# # api_key = os.getenv("GOOGLE_API_KEY")
# # if not api_key:
# #     raise RuntimeError("Missing GOOGLE_API_KEY in .env")

# client = genai.Client(api_key="AIzaSyCq_PSiJ2oHW67mqfwFJISqd-XFoxsmcec")

# response = client.models.generate_content(
#     model="gemini-2.5-flash",
#     contents="Hey Gemini, can you tell me a joke?",
# )
# print(response.text)

from openai import OpenAI

client = OpenAI(
    api_key="AIzaSyCq_PSiJ2oHW67mqfwFJISqd-XFoxsmcec",
    base_url="https://generativelanguage.googleapis.com/v1beta"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        {
            "role": "system",
            "content": "You are a expert in storytelling and only give answers in story formation and scene descriptions and in the hinglish language.",
        },
        {
            "role": "user",
            "content": "can you tell me a joke?",
        }
    ],
)

print(response.choices[0].message.content)