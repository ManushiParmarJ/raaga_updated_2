console.log("Script Loading")

// Get elements
const loginButton = document.getElementById("loginButton")
const signinButton = document.getElementById("signinButton")
const loginModal = document.getElementById("loginModal")
const signinModal = document.getElementById("signinModal")
const blurLayer = document.getElementById("blurLayer")
const goToSignIn = document.getElementById("goToSignIn")
const goToLogin = document.getElementById("goToLogin")

// Show Login modal
loginButton.addEventListener("click", (event) => {
  event.preventDefault()
  loginModal.classList.remove("hidden")
  blurLayer.classList.remove("hidden")
})

// Show Sign Up modal
signinButton.addEventListener("click", (event) => {
  event.preventDefault()
  signinModal.classList.remove("hidden")
  blurLayer.classList.remove("hidden")
})

// Close modals when clicking the blur layer
blurLayer.addEventListener("click", () => {
  loginModal.classList.add("hidden")
  signinModal.classList.add("hidden")
  blurLayer.classList.add("hidden")
})

// Switch from Login to Sign Up
goToSignIn.addEventListener("click", (event) => {
  event.preventDefault()
  loginModal.classList.add("hidden")
  signinModal.classList.remove("hidden")
})

// Switch from Sign Up to Login
goToLogin.addEventListener("click", (event) => {
  event.preventDefault()
  signinModal.classList.add("hidden")
  loginModal.classList.remove("hidden")
})

// Carousel functionality
const carousel = document.getElementById("mainCarousel")
const carouselInner = carousel.querySelector(".flex")
const prevButton = document.getElementById("prevButton")
const nextButton = document.getElementById("nextButton")
const indicators = carousel.querySelectorAll(".bottom-4 button")
let currentIndex = 0

function showSlide(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("bg-opacity-100", i === index)
    indicator.classList.toggle("bg-opacity-50", i !== index)
  })
  currentIndex = index
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 5) % 5
  showSlide(currentIndex)
})

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 5
  showSlide(currentIndex)
})

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => showSlide(index))
})

// Auto-play (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % 5
  showSlide(currentIndex)
}, 5000)

// Script for Quotes
const quotes = [
  "Believe in yourself!",
  "Success is a journey, not a destination.",
  "Never give up on your dreams!",
  "The best way to predict the future is to create it."
];

let index = 0;
const quoteElement = document.getElementById("quote");

function showNextQuote() {
  quoteElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
  quoteElement.style.opacity = "0";
  quoteElement.style.transform = "translateY(50%)";

  setTimeout(() => {
      index = (index + 1) % quotes.length;
      quoteElement.textContent = quotes[index];
      quoteElement.style.opacity = "1";
      quoteElement.style.transform = "translateY(0)";
  }, 500);
}

setInterval(showNextQuote, 2500);
// function for quotes finished

// Add click event to album items in home.html to redirect to playlist.html
document.querySelectorAll(".group").forEach((item) => {
  item.addEventListener("click", () => {
    // window.location.href = "playlist.html"
  })

  // Select all input elements and set their autocomplete attribute to "off"
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input").forEach((input) => {
      input.setAttribute("autocomplete", "off")
    })
  })
})

// Custom JavaScript for interactivity

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector("button.bg-green-500")
  const followButton = document.querySelector("button.bg-gray-700")

  // Play button click event
  playButton.addEventListener("click", () => {
    alert("Playing music...")
  });
});

  // Follow button toggle event
  followButton.addEventListener("click", () => {
    if (followButton.textContent === "Following") {
      followButton.textContent = "Follow"
      followButton.classList.remove("bg-blue-500")
      followButton.classList.add("bg-gray-700")
    } else {
      followButton.textContent = "Following"
      followButton.classList.remove("bg-gray-700")
      followButton.classList.add("bg-blue-500")
    }
  })

  // Playlist functionality
  const albumCards = document.querySelectorAll(".group")
  const playlistSection = document.getElementById("playlistSection")
  const closePlaylist = document.getElementById("closePlaylist")

  albumCards.forEach((card) => {
    card.addEventListener("click", () => {
      fetch("playlist.html")
        .then((response) => response.text())
        .then((html) => {
          document.getElementById("playlistContent").innerHTML = html
          playlistSection.classList.remove("hidden")
          playlistSection.classList.add("flex")
        })
    })
  })

  closePlaylist.addEventListener("click", () => {
    playlistSection.classList.add("hidden")
    playlistSection.classList.remove("flex")
  })

  // Artist functionality
  const artistCards = document.querySelectorAll(".artist-card")

  artistCards.forEach((card) => {
    card.addEventListener("click", () => {
      fetch("artist.html")
        .then((response) => response.text())
        .then((html) => {
          const tempDiv = document.createElement("div")
          tempDiv.innerHTML = html
          const artistSection = tempDiv.querySelector("#artistSection")
          document.body.appendChild(artistSection)

          const closeArtist = document.getElementById("closeArtist")
          closeArtist.addEventListener("click", () => {
            artistSection.remove()
          })
        })
    })
  })

  // Close modal functionality
  const closeModals = document.querySelectorAll(".close-modal")
  closeModals.forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".fixed").classList.add("hidden")
      document.getElementById("blurLayer").classList.add("hidden") // ✅ Ensure background blur is also removed
    })
  })
  

function playAudio(button) {
  // Find the audio element within the same parent (li)
  const audio = button.closest("li").querySelector("audio")

  // Pause all other audio elements
  document.querySelectorAll("audio").forEach((aud) => {
    if (aud !== audio) {
      aud.pause()
      aud.currentTime = 0 // Reset playback
    }
  })

  // Play or pause the clicked audio
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}

// Function to open playlist modal
function openPlaylistModal(playlistId) {
  const modal = document.getElementById("playlistModal")
  const content = document.getElementById("playlistContent")

  // Fetch playlist data (replace with actual API call)
  fetch(`/api/playlist/${playlistId}`)
    .then((response) => response.text())
    .then((html) => {
      content.innerHTML = html
      modal.classList.remove("hidden")
      modal.classList.add("modal-enter")
    })
}

// Function to open artist modal
function openArtistModal(artistId) {
  const modal = document.getElementById("artistModal")
  const content = document.getElementById("artistContent")

  // Fetch artist data (replace with actual API call)
  fetch(`/api/artist/${artistId}`)
    .then((response) => response.text())
    .then((html) => {
      content.innerHTML = html
      modal.classList.remove("hidden")
      modal.classList.add("modal-enter")
    })
}

// Function to close modals
function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add("modal-exit")
  setTimeout(() => {
    modal.classList.add("hidden")
    modal.classList.remove("modal-exit")
  }, 300)
}

// Add event listeners for opening modals
document.querySelectorAll(".group").forEach((card) => {
  card.addEventListener("click", () => openPlaylistModal(card.dataset.playlistId))
})

document.querySelectorAll(".artist-card").forEach((card) => {
  card.addEventListener("click", () => openArtistModal(card.dataset.artistId))
})

// Add event listeners for closing modals
document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".fixed")
    closeModal(modal.id)
  })
})

// Add functionality to clear search input
const searchBox = document.getElementById("searchBox")
const clearSearch = document.getElementById("clearSearch")

searchBox.addEventListener("input", () => {
  clearSearch.style.display = searchBox.value ? "block" : "none"
})

clearSearch.addEventListener("click", () => {
  searchBox.value = ""
  clearSearch.style.display = "none"
  searchBox.focus()
})

// Ensure the clear button is hidden when the page loads
document.addEventListener("DOMContentLoaded", () => {
  clearSearch.style.display = "none"
})

// to change the images of the SCG's in the header
document.querySelectorAll(".header-links a").forEach(link => {
  const img = link.querySelector("img");
  const hoverSrc = img.getAttribute("data-hover");
  const originalSrc = img.src;

  link.addEventListener("mouseenter", () => {
      img.src = hoverSrc;
  });

  link.addEventListener("mouseleave", () => {
      img.src = originalSrc;
  });
});