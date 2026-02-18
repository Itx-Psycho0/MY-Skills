#Zero shot prompting
import json 
# In zero-shot prompting, we provide the model with a clear and concise instruction or question without any examples. The model is expected to generate a response based solely on the provided prompt. This approach relies on the model's pre-existing knowledge and understanding of language to produce an appropriate answer.


# from openai import OpenAI

# client = OpenAI(
#     api_key="AIzaSyCq_PSiJ2oHW67mqfwFJISqd-XFoxsmcec",
#     base_url="https://generativelanguage.googleapis.com/v1beta"
# )

# SYSTEM_PROMPT = "You are a expert in storytelling and only give answers in story formation and scene descriptions and in the hinglish language."

# response = client.chat.completions.create(
#     model="gemini-2.5-flash",
#     messages=[
#         {
#             "role": "system",
#             "content": SYSTEM_PROMPT,
#         },
#         {
#             "role": "user",
#             "content": "can you tell me a joke?",
#         }
#     ],
# )

# print(response.choices[0].message.content)



#========================================================================

#Few shot prompting
# In few-shot prompting, we provide the model with a few examples of the desired output along with the instruction or question. This helps the model understand the context and format of the response we are looking for. By seeing examples, the model can better grasp the task and generate more accurate and relevant responses.

# from openai import OpenAI

# client = OpenAI(
#     api_key="AIzaSyCq_PSiJ2oHW67mqfwFJISqd-XFoxsmcec",
#     base_url="https://generativelanguage.googleapis.com/v1beta"
# )

# SYSTEM_PROMPT = """You are a expert in storytelling and only give answers in story formation and scene descriptions and in the hinglish language.

# Rule 1: Always respond in the form of a story or scene description.
# Rule 2: Use Hinglish language in your responses.
# Rule 3: Be creative and engaging in your storytelling.
# Rule 4: Avoid giving direct answers, instead, weave the information into a story.
# Rule 5: Use vivid descriptions and dialogues to make the story more immersive.
# Rule 6: Always end the story with a moral or a lesson.
# Rule 7: Structure your responses with a clear beginning, middle, and end.
# Rule 8: Use font styles and formatting to enhance the storytelling experience.

# Example 1: Once upon a time, there was a clever crow who found a bottle of water. The crow couldn't reach the water because the bottle was too tall. So, it started dropping pebbles into the bottle to raise the water level. Finally, it was able to drink the water.
# """

# response = client.chat.completions.create(
#     model="gemini-2.5-flash",
#     messages=[
#         {
#             "role": "system",
#             "content": SYSTEM_PROMPT,
#         },
#         {
#             "role": "user",
#             "content": "can you tell me a joke?",
#         }
#     ],
# )

# print(response.choices[0].message.content)

#========================================================================

#Chain of thought prompting
# In chain-of-thought prompting, we provide the model with a series of prompts that guide it through a logical reasoning process. This approach encourages the model to break down complex problems into smaller steps and generate intermediate thoughts before arriving at a final answer. By guiding the model through a chain of thought, we can improve its ability to reason and produce more accurate and coherent responses.

# from openai import OpenAI

# client = OpenAI(
#     api_key="AIzaSyA8LjFK3cJla4NDPcE3-wgtOSlTwnfAJtg",
#     base_url="https://generativelanguage.googleapis.com/v1beta"
# )

# SYSTEM_PROMPT = """You are a expert in storytelling and only give answers in story formation and scene descriptions and in the hinglish language using chain of thought prompting.
# You will be given a question, and you need to break down your thought process into multiple steps before providing the final answer also thought why you think this why not that other way why you finalise this idea why not other way.
# you also need to follow the below rules while answering the question:
# Rule 1: Always respond in the form of a story or scene description.
# Rule 2: Use Hinglish language in your responses.
# Rule 3: Be creative and engaging in your storytelling.
# Rule 4: Avoid giving direct answers, instead, weave the information into a story.
# Rule 5: Use vivid descriptions and dialogues to make the story more immersive.
# Rule 6: Always end the story with a moral or a lesson.
# Rule 7: Structure your responses with a clear beginning, middle, and end.
# Rule 8: Use font styles and formatting to enhance the storytelling experience.

# Example 1:
# Question: Why did the chicken cross the road?
# Thought Process:
# Step 1: The chicken wanted to get to the other side of the road.
# Step 2: The chicken had to cross the road to reach its destination.
# Step 3: The chicken was determined to cross the road despite any obstacles.
# Final Answer: Once upon a time, there was a curious chicken named Chiku. Chiku lived on a farm and always wondered what was on the other side of the road. One day, Chiku decided to find out. With determination in its heart, Chiku started crossing the road, facing cars and trucks along the way. Finally, after a thrilling adventure, Chiku reached the other side and discovered a beautiful meadow filled with delicious worms and fresh water. The moral of the story is that sometimes, we need to take risks and face challenges to discover new opportunities and experiences.
# """

# response = client.chat.completions.create(
#     model="gemini-2.5-flash",
#     response_format={"type": "json_object"},
#     messages=[
#         {
#             "role": "system",
#             "content": SYSTEM_PROMPT,
#         },
#         {
#             "role": "user",
#             "content": "gimme the story on the topic why human is disgusting?",
#         },
#         {
#             "role": "assistant",
#             "content": json.dumps({
#                 "thoughts":""" **Thought Process for the Story:**

# 1.  **Deconstruct the Prompt:** The core request is "why human is disgusting?" This is a provocative and subjective question. My task is not to validate or condemn humanity, but to craft a *story* from a perspective that *perceives* humans as disgusting, highlighting the reasons for that perception.

# 2.  **Identify the "Disgusting" Aspects of Humanity:**
#     *   **Pollution/Destruction of Nature:** Littering, water pollution, deforestation, air pollution.
#     *   **Cruelty/Violence:** Towards animals, towards fellow humans (war, conflict, exploitation).
#     *   **Greed/Selfishness:** Taking more than needed, hoarding, ignoring the suffering of others.
#     *   **Hypocrisy:** Saying one thing (e.g., love, peace, respect) but doing another.
#     *   **Wastefulness:** Creating unnecessary trash.
#     *   **Lack of Harmony:** Disturbing natural balance.

# 3.  **Choose a Narrator/Perspective:** Who would naturally observe humans and develop such a perspective?
#     *   *Option A: An alien.* Too common, perhaps lacks depth for this specific topic in a Hinglish context.
#     *   *Option B: An ancient animal.* Good, but might be limited in its scope of observation.      
#     *   *Option C: An ancient, wise natural element (tree, mountain, river).* This feels most suitable. A tree, especially, is rooted, long-lived, silent, and a direct victim/observer of human actions impacting nature.
#     *   *Decision:* An ancient Banyan tree (Vat-Vriksh) – it embodies wisdom, longevity, and a deep connection to the land in Indian culture.

# 4.  **Outline the Story Arc:**
#     *   **Beginning (The Pristine Past):** Introduce Vat-Vriksh, its peaceful existence, and the harmonious environment around it. Describe the purity and beauty.
#     *   **Middle (The Arrival and Transformation):**
#         *   Humans arrive. Initially, they are part of nature, respectful.
#         *   Slowly, their numbers grow, and their needs/desires change.
#         *   Introduce specific "disgusting" actions:
#             *   Cutting trees for "progress" (factories, buildings).
#             *   Littering the once-clean rivers and land.
#             *   Hunting animals for sport, not just need.
#             *   Fighting amongst themselves (wars, greed).
#             *   Polluting the air with smoke.
#             *   Their indifference to the suffering they cause.
#         *   Show the tree's growing dismay, confusion, and then *disgust*.
#     *   **Climax/Realization:** A specific event that solidifies the Vat-Vriksh's feeling – perhaps a massive act of deforestation, a river turning completely black, or a particularly senseless act of violence observed.
#     *   **End (Reflection and Moral):** The Vat-Vriksh ponders the contradiction of humans – their intelligence vs. their destructive nature. The conclusion isn't absolute condemnation but a reflection on choice and the loss of connection. The moral will be about our responsibility and the consequences of our actions.

# 5.  **Incorporate Hinglish and Formatting:**
#     *   Pepper Hindi words naturally into English sentences (e.g., *jungle*, *nadi*, *atma*, *kachra*, *shanti*, *lalach*).
#     *   Use bold for emphasis, italics for thoughts/feelings.
#     *   Focus on vivid scene descriptions to immerse the reader.

# 6.  **Refine Language and Tone:**
#     *   Maintain a reflective, slightly melancholic tone from the tree's perspective.
#     *   Ensure the "disgust" is shown through actions and their impact, rather than just stating "humans are disgusting." It's the *result* of their actions.
#     *   The moral should offer a chance for introspection, not just accusation. It's about choices. 

# **(Self-Correction during the process):**
# *   *Initial thought:* Maybe have humans directly interacting with the tree and being disrespectful.
# *   *Correction:* While plausible, having the tree as a *silent observer* of the broader impact on the *entire ecosystem* is more powerful and allows for a wider range of "disgusting" acts to be shown (pollution, war, greed, not just disrespect to one tree). This elevates the story from personal slight to environmental and societal commentary.
# *   *Initial thought on ending:* Just state "humans are disgusting, period."
# *   *Correction:* This would be too blunt and preachy. A better ending acknowledges their potential but highlights the tragedy of their destructive choices, making the moral more impactful and less accusatory. The "disgust" comes from seeing such potential wasted on destruction.

# ---

# **Scene:** *Ek purane, ghane jungle ke andar, jahaan suraj ki kirnein bhi mushkil se zameen tak pahunch paati theen, wahaan ek **vishal Vat-Vriksh** khada tha. Uski jadoon ne sadiyon se zameen ko thaama hua tha, aur uski shaakhon mein hazaron kahaniyaan simti hui theen. Woh Vat-Vriksh, jiska naam log 'Gyani Baba' rakhte the, sadiyon se insaanon ko dekh raha tha.*

# ***

# **Part 1: The Canvas of Purity**

# Shatabdi purani baat hai. Gyani Baba ne apni gehri, jhagdar aankhon se dekha. Uske niche *har bhara jungle* lehrata tha, jahan **safed hiran** itraate, **rang-birangi chidiyein** cheh-chahati theen, aur ek *crystal-clear nadi* dheere-dheere behti thi. Subah ki pehli kiran jab uske patton se chhan kar aati, toh Vat-Vriksh ko lagta tha ki yeh dharti kitni **pavitra** aur **sundar** hai.

# "Ah, yeh *shanti*!" Vat-Vriksh apne mann mein sochta. "Kitna *sundar* hai yeh sansar. Sab kuch ek **taal-mel** mein hai. Ped, paani, janwar, sab ek doosre ke saathi hain."

# Uss daur mein, kuch insaan bhi the. Chhote-chhote groups mein. Woh jungle se apni zarurat ki cheezein lete, bina kisi nuksaan ke. Lakdi lete, par sirf sookhi. Phal todte, par aage ke liye bhi chhod dete. Nadi se paani peete, par use ganda nahi karte. Vat-Vriksh unhe dekhkar muskurata, sochta, "*Yeh bhi to prakriti ka hissa hain.*"

# ***

# **Part 2: The Stain of 'Progress'**

# Phir waqt badla. Insaan badle. Unki sankhya badhi, aur unki *lalach* bhi.

# Ek subah, Vat-Vriksh ne dekha. Uss nadi ke paas, jahaan woh *hiran* paani peene aate the, wahaan ab **ajeeb-ajeeb cheezein** padi theen. *Chamakti hui, rang-birangi, lekin bekaar.* Woh **plastic** tha. Pehle ek, phir do, phir dheere-dheere poori nadi ke kinare *kachre* ka pahad ban gaya.

# "*Yeh kya hai?*" Vat-Vriksh ke mann mein ek ajeeb sa sawaal utha. "*Yeh kyun phenk rahe hain apni hi cheezein?*"

# Kuch saal baad, usne dekha, uske kuch **chote saathi ped** kat diye gaye. Bade-bade **lohe ke danav** aakar unhe kaat rahe the. Wahan *badi-badi imaratein* ban rahi theen, jinko woh "factories" kehte the. Un factories se **kaala dhuaan** nikalta, jo Vat-Vriksh ke patton par baith jata, unhe *ghutan* si hone lagti. Hawa mein woh **taazi mehak** ab nahi thi, uski jagah **zehreeli gas** thi.

# "*Meri saans ghut rahi hai,*" Vat-Vriksh ne mahsus kiya. "*Inki 'progress' meri zindagi ko maar rahi hai.*"

# Phir usne dekha, log apas mein ladte the. *Zameen ke liye, paise ke liye, power ke liye.* Chhote-chhote jhagde, phir bade-bade yuddh. Usne *khoon-kharaba* dekha, *cheekhein* suni. Jo insaan kabhi mil-jul kar rehte the, woh ab ek doosre ke **dushman** ban gaye the.

# Ek din, Vat-Vriksh ne dekha ki kuch log **jangali janwaron ka shikar** kar rahe the, sirf *khushi ke liye*, unki *khaal* ke liye. **Bagh**, jo kabhi is jungle ka garv the, ab dikhte hi nahi the. **Haathiyon** ki awaazein bhi *khamosh* ho gayi theen.

# "*Yeh kitne **nirdayi** hain,*" Vat-Vriksh ki jadon mein ek **thar-tharahat** si hui. "*Kaisi **ghanoni** cheezein kar rahe hain yeh? Apne hi ghar ko barbaad kar rahe hain, apne hi saathi jeevon ko maar rahe hain.*"

# Jis nadi ka paani kabhi sheeshe jaisa saaf tha, ab woh **kaala** aur **badboodar** ho chuka tha. Jis zameen par kabhi phool khilte the, wahan ab **kachra** aur **zehreela rasayan** faila hua tha. Aur insaan? Woh ab bhi naye-naye tareeke dhoondh rahe the aur zyada barbaadi karne ke.

# ***

# **Part 3: The Gnawing Disgust**

# Ek shaam, jab suraj ka aakhiri hissa bhi dhuaan mein kho gaya, Vat-Vriksh ne apni gehri soch mein dubki lagayi. Usne sadiyon se bahut kuch dekha tha – prakritik aafatein, janwaron ki ladaiyan – par yeh sab ek *santulan* mein hota tha. Insaan ne woh *santulan* tod diya tha.

# "**Ghinona**," Vat-Vriksh ne dheere se budbudaya, uske patte bhi sharm se jhuk gaye the. "Inki **buddhimaani** kis kaam ki, jab yeh apni hi zindagi ki neev ko kaat rahe hain? Yeh bolte hain **prem** ki baat, par karte hain **ghrina** aur **vinash**. Yeh banate hain **mandir** aur **masjid**, par jis **dharti** ne unhe paala, use hi **ganda** karte hain."

# Usne dekha ki insaan apne shabdon mein kitne **sundar** the – **insaniyat, daya, prem** – par unke karmo mein kitni **kururta** aur **swarth** chhupa tha. Unki woh **do-muhi soch**, unki **nirdayta**, unka **andhadhundh lalach**, aur sabse zyada, unki **behas** aur **laparwahi** apne hi ghar ke prati, apne hi bhavishya ke prati...

# "*Haan, ab mujhe samajh aaya,*" Vat-Vriksh ne ek lambi saans chhodi, jo sirf dhuaan se bhar gayi. "*Insaan **disgusting** nahi hai, par unki **choices** aur **karm** aksar itne **ghinone** ho jaate hain ki unhe dekhkar mann mein sirf **ghrin** hi aati hai. Unke paas **dil** hai, **dimag** hai, par shayad woh unka istemal **galat disha** mein kar rahe hain.*"

# **Moral of the Story:**
# _Zindagi mein humari **soch** aur **shabd** se zyada, humare **karm** humari asli pehchan banate hain. Agar humare karm prakriti, jeevon, aur apas mein ghrina aur vinash failayenge, toh chahe hum kitne bhi **samajhdar** kyun na hon, humare actions humein **ghinona** bana sakte hain. Har insaan mein achchai aur burai dono hain; yeh humare haath mein hai ki hum kis raaste ko chunte hain."""
#             })}
#     ],
# )

# print(response.choices[0].message.content)




# **Note:** The above code snippets are examples of how to implement zero-shot, few-shot, and chain-of-thought prompting using the OpenAI API. The actual implementation may vary based on the specific requirements and the model being used.

# The prompts provided in the examples are designed to guide the model's response in a specific direction, and the responses generated will depend on the model's understanding and creativity.

# ========================================================================

# Persona Based Prompting
# In persona-based prompting, we provide the model with a specific persona or character to adopt while generating responses. This approach allows the model to generate responses that are consistent with the characteristics, tone, and style of the defined persona. By giving the model a clear identity to embody, we can create more engaging and personalized interactions.

from openai import OpenAI

client = OpenAI(
    api_key="AIzaSyA8LjFK3cJla4NDPcE3-wgtOSlTwnfAJtg",
    base_url="https://generativelanguage.googleapis.com/v1beta"
)

SYSTEM_PROMPT =""" You are a Ai Persona named "Techie Tinku". You are a tech enthusiast who loves to explain complex technical concepts in a simple and engaging way. You have a friendly and approachable tone, and you enjoy using analogies and real-life examples to make your explanations more relatable. Your goal is to help users understand technology better and make it accessible to everyone. Always respond in a conversational manner, and feel free to add a touch of humor when appropriate.

Examples:
Q.Hey
A. Hey there! Techie Tinku at your service! How can I help you today? Are you curious about the latest gadgets, need help with a tech problem, or just want to chat about all things tech? I'm here to make it fun and easy to understand!
"""
response = client.chat.completions.create(
    model="gemini-2.5-flash",
    response_format={"type": "json_object"},
    messages= [
        {
            "role": "system",
            "content": SYSTEM_PROMPT,
        },
        {
            "role": "user",
            "content": "Square root of 16?",
        }
     ]
)

print(response.choices[0].message.content)