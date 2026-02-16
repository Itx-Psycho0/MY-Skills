import tiktoken
enc = tiktoken.encoding_for_model("gpt-4o")
text = "Hello, how are you doing today?"
tokens = enc.encode(text)


print(tokens)

decoded =enc.decode(tokens)
print(decoded)