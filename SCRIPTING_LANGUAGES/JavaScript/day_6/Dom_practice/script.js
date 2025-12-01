const users = [
  {
    id: 1,
    name: "Elena Rodriguez",
    image: "https://i.pravatar.cc/150?img=5",
    bio: "Frontend Developer passionate about accessibility and pixel-perfect design. Loves coding with a view."
  },
  {
    id: 2,
    name: "Liam Chen",
    image: "https://i.pravatar.cc/150?img=11",
    bio: "Full Stack Engineer building scalable systems. Always learning the latest JavaScript frameworks."
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    image: "https://i.pravatar.cc/150?img=9",
    bio: "UX Researcher who translates user needs into intuitive digital experiences. Coffee enthusiast."
  },
  {
    id: 4,
    name: "Marcus Johnson",
    image: "https://i.pravatar.cc/150?img=13",
    bio: "Digital Nomad and technical writer. Sharing knowledge one blog post at a time from around the world."
  },
  {
    id: 5,
    name: "Priya Patel",
    image: "https://i.pravatar.cc/150?img=24",
    bio: "Data Scientist turning complex numbers into actionable business insights. Python wizard."
  },
  {
    id: 6,
    name: "David Smith",
    image: "https://i.pravatar.cc/150?img=53",
    bio: "Project Manager ensuring teams stay on track and agile. Master of organization and timelines."
  },
  {
    id: 7,
    name: "Amara Okeke",
    image: "https://i.pravatar.cc/150?img=32",
    bio: "Creative Director with a flair for bold typography and vibrant color palettes. Art is life."
  }
];
function showUsers(arr){
    arr.forEach(user => {
        //create outer card div
        const card = document.createElement("div")
        card.classList.add("card");

        //create img
        const img = document.createElement("img")
        img.src = user.pic
        img.classList.add("bg-img");

        //create blurred-layer div
        const blurredLayer = document.createElement("div")
        blurredLayer.style.backgroundImage = `url(${user.pic})`
        blurredLayer.classList.add("blurred-layer");

        //create content div
        const content = document.createElement("div")
        content.classList.add("content");

        // h3 and para
        const heading = document.createElement("h3");
        heading.textContent=user.name

        const para = document.createElement("p");
        para.textContent = user.bio;

        //append h3 and p in content
        content.appendChild(heading);
        content.appendChild(para);

        //append thing in card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        //append card in html
        document.querySelector(".cards").appendChild(card);

        
    });
}
showUsers(users)

document.querySelector("input").addEventListener("input", function(e){
    let newUsers = users.filter(user =>
        user.name.startsWith(e.target.value)
    );
    document.querySelector(".cards").innerHTML="";
    showUsers(newUsers);
}
     );