import tiktoken
enc = tiktoken.encoding_for_model("gpt-4o")
text = "Hello, how are you doing today?"
tokens = enc.encode(text)


print(tokens)

decoded =enc.decode(tokens)
print(decoded)


# tokenization is the process of converting text into smaller units called tokens, which can be words, subwords, or characters. In this example, we are using the tiktoken library to tokenize a string of text and then decode it back to its original form. The output will show the list of tokens and the decoded text, which should match the original input.

# vector Embeddings are a way to represent words or phrases as numerical vectors in a high-dimensional space. These vectors capture the semantic meaning of the words, allowing us to perform various natural language processing tasks such as similarity measurement, clustering, and classification. In the context of tokenization, each token can be represented as a vector embedding, which can then be used for further analysis or machine learning models.

# positional encoding is a technique used in natural language processing to provide information about the position of tokens in a sequence. Since models like transformers do not have an inherent sense of order, positional encoding allows them to understand the relative positions of tokens. This is typically done by adding a unique vector to each token's embedding based on its position in the sequence, enabling the model to capture the sequential nature of the data.

# self attention is a mechanism used in transformer models that allows the model to weigh the importance of different tokens in a sequence when processing them. It enables the model to focus on relevant parts of the input when generating output, which is particularly useful for tasks like language translation and text generation. Self attention works by calculating attention scores for each token in relation to every other token, allowing the model to capture dependencies and relationships between tokens effectively.

# Multi-head attention is an extension of the self-attention mechanism used in transformer models. It allows the model to attend to different parts of the input sequence simultaneously by using multiple attention heads. Each head learns to focus on different aspects of the input, capturing various relationships and dependencies between tokens. This enhances the model's ability to understand complex patterns in the data and improves its performance on tasks such as language modeling and machine translation.