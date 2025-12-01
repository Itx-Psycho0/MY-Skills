const users = [
  {
    id: 1,
    name: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1741805190401-a95e551b443d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDJkJTIwcGFpbnRlZCUyMGNyZWVwJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    bio: "Frontend Developer passionate about accessibility and pixel-perfect design. Loves coding with a view."
  },
  {
    id: 2,
    name: "Liam Chen",
    image: "https://images.unsplash.com/photo-1740510293793-de8b916bb5df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDJkJTIwcGFpbnRlZCUyMGNyZWVwJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    bio: "Full Stack Engineer building scalable systems. Always learning the latest JavaScript frameworks."
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    image: "https://plus.unsplash.com/premium_photo-1755624281500-18d6fe75559c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fDJkJTIwcGFpbnRlZCUyMGNyZWVwJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    bio: "UX Researcher who translates user needs into intuitive digital experiences. Coffee enthusiast."
  },
  {
    id: 4,
    name: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1741805190358-aff8c1c1d72a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fDJkJTIwcGFpbnRlZCUyMGNyZWVwJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    bio: "Digital Nomad and technical writer. Sharing knowledge one blog post at a time from around the world."
  },
  {
    id: 5,
    name: "Priya Patel",
    image: "https://images.unsplash.com/photo-1748200100427-52921dec8597?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fDJkJTIwcGFpbnRlZCUyMGNyZWVwJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    bio: "Data Scientist turning complex numbers into actionable business insights. Python wizard."
  },
  {
    id: 6,
    name: "David Smith",
    image: "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8MmQlMjBwYWludGVkJTIwaGVybyUyMGlsbHVzdHJhdGlvbnN8ZW58MHx8MHx8fDA%3D",
    bio: "Project Manager ensuring teams stay on track and agile. Master of organization and timelines."
  },
  {
    id: 7,
    name: "Amara Okeke",
    image: "https://images.unsplash.com/photo-1750926013097-6c731d12be77?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDJkJTIwcGFpbnRlZCUyMGhlcm8lMjBpbGx1c3RyYXRpb25zfGVufDB8fDB8fHww",
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
        img.src = user.image
        img.classList.add("bg-img");

        //create blurred-layer div
        const blurredLayer = document.createElement("div")
        blurredLayer.style.backgroundImage = `url(${user.image})`
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

const inp = document.querySelector("input");

inp.addEventListener("input", function(e){
    let newUsers = users.filter(user =>
        user.name.startsWith(inp.value)
    );
    document.querySelector(".cards").innerHTML="";
    showUsers(newUsers);
}
     );