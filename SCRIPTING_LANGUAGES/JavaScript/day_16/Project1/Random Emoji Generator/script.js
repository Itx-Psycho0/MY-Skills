const emojiData = {
    happy: ["😁", "😆", "😂", "😃", "🤪", "🥳", "🥰", "😎", "🤩"],
    sad: ["😞", "😔", "😟", "☹️", "😣", "😖", "😓", "🥀", "💔"],
    angry: ["😡", "🤬", "😠", "😤", "👿", "👺", "💢", "🗯️"],
    surprised: ["😲", "🤯", "😱", "😯", "😧", "🙀", "🙊"],
    confused: ["🤔", "🤨", "😵‍💫", "🤷", "🧐", "😵", "😶‍🌫️"],
    crying: ["😭", "😢", "😿", "🌧️", "💧", "🤧"]
};

const Emoji = document.getElementById("Emojis");
const moodBtns = document.querySelectorAll(".mood");
const GetEmojiBtn = document.getElementById("GetEmoji")
moodBtns.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        const mood = e.target.value?.toLowerCase()
        e.target.classList.toggle("active")
        moodBtns.forEach(btn =>{
            if(btn !== e.target){
                btn.classList.remove("active")
            }
        })

        const emojis = emojiData[mood]
        GetEmojiBtn.addEventListener("click",()=>{
            if(!emojis) return
            const randomIndex = Math.floor(Math.random() * emojis.length)
            Emoji.textContent = emojis[randomIndex]
        })
    })
    
})

