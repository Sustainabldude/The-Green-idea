const ideasList = document.getElementById("ideas");
const ideaInput = document.getElementById("idea-input");
const submitButton = document.getElementById("submit-idea");
const announcementsDiv = document.getElementById("announcements");
const announcementInput = document.getElementById("announcement-input");
const postAnnouncementButton = document.getElementById("post-announcement");
const loginButton = document.getElementById("login-button");
const adminSection = document.getElementById("admin-section");
const loginMessage = document.getElementById("login-message");

// Admin Login Credentials
const ADMIN_PASSWORD = "zayanandilaansustainable1056"; // Admin password

// Admin Login Function
loginButton.addEventListener("click", () => {
  const password = document.getElementById("admin-password").value;
  if (password === ADMIN_PASSWORD) {
    adminSection.style.display = "block"; // Show admin section
    loginMessage.textContent = "Logged in as Admin";
    loginMessage.style.color = "green";
  } else {
    loginMessage.textContent = "Incorrect password!";
    loginMessage.style.color = "red";
  }
});

// Admin Announcements
postAnnouncementButton.addEventListener("click", () => {
  const announcementText = announcementInput.value.trim();
  if (announcementText) {
    const announcement = document.createElement("div");
    announcement.textContent = announcementText;
    announcementsDiv.appendChild(announcement);
    announcementInput.value = ""; // Clear input after posting
  }
});

// Function to create a new idea item
function createIdeaItem(ideaText) {
  const li = document.createElement("li");
  li.textContent = ideaText;

  // Like button
  const likeButton = document.createElement("button");
  likeButton.textContent = "Like";
  likeButton.className = "like-button";
  likeButton.addEventListener("click", () => {
    likeButton.textContent = "Liked!";
    likeButton.disabled = true;
  });

  // Delete button (only shown if admin is logged in)
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => {
    if (adminSection.style.display === "block") {
      ideasList.removeChild(li);
    } else {
      alert("Only admins can delete posts.");
    }
  });

  li.appendChild(likeButton);
  li.appendChild(deleteButton);
  return li;
}

// Event listener for submitting an idea
submitButton.addEventListener("click", () => {
  const ideaText = ideaInput.value.trim();
  if (ideaText) {
    const newIdeaItem = createIdeaItem(ideaText);
    ideasList.appendChild(newIdeaItem);
    ideaInput.value = ""; // Clear input after submission
  }
});