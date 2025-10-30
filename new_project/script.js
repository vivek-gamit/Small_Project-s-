const users = [
  {
    name: "Aarav Patel",
    pic: "https://images.unsplash.com/photo-1579774830533-ac44a4193894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Dreamer. Coder. Coffee believer ☕ | Exploring pixels and possibilities."
  },
  {
    name: "Diya Sharma",
    pic: "https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Finding peace in chaos 🌸 | A little sunshine mixed with a hurricane."
  },
  {
    name: "Ishaan Verma",
    pic: "https://images.unsplash.com/photo-1546355971-96b0891be97b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Minimalist mindset 🖤 | Code. Sleep. Repeat."
  },
  {
    name: "Kiara Mehta",
    pic: "https://images.unsplash.com/photo-1649709595108-fdadc4f763c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Moon lover 🌙 | Lost in thoughts but strong in dreams."
  },
  {
    name: "Rohan Desai",
    pic: "https://images.unsplash.com/photo-1608501622526-31d33fc97f3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Logic over luck 🎯 | Turning caffeine into code since 2020."
  },
  {
    name: "Meera Kapoor",
    pic: "https://images.unsplash.com/photo-1589785157215-127232cf9dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Vibes speak louder than words 💫 | Believe. Begin. Become."
  },
  {
    name: "Aryan Joshi",
    pic: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "Not everyone gets the same version of me ⚡ | Evolving daily."
  },
  {
    name: "Ananya Singh",
    pic: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    bio: "Writing my own story ✨ | Quiet but full of ideas."
  }
];

const container = document.querySelector(".cards");

users.forEach(user => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${user.pic}" alt="${user.name}" class="bg-img">
    <div class="blurred-layer" style="background-image: url('${user.pic}')"></div>
    <div class="content">
      <h3>${user.name}</h3>
      <p>${user.bio}</p>
    </div>
  `;

  container.appendChild(card);
});