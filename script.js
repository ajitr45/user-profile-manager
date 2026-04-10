// Select form and inputs
let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

// Main object to manage users
const userManager = {
  users: [], // store all users

  // Initialize app (attach event)
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  // Handle form submit
  submitForm: function (e) {
    e.preventDefault(); // stop page reload
    this.addUser();
  },

  // Add new user to array
  addUser: function () {
    this.users.push({
      username: username.value.trim(),
      role: role.value.trim(),
      bio: bio.value.trim(),
      photo: photo.value.trim(),
    });

    form.reset(); // clear form
    this.renderUi(); // update UI
  },

  // Render users on screen
  renderUi: function () {
    document.querySelector(".users").innerHTML = ""; // clear old data

    this.users.forEach((user, index) => {

      const card = document.createElement("div");

      // Create image
      const img = document.createElement("img");
      img.src = user.photo;
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const roleEl = document.createElement("p");
      roleEl.textContent = user.role;
      card.appendChild(roleEl);

      // Bio
      const desc = document.createElement("p");
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Delete button
      const btn = document.createElement("button");
      btn.textContent = "Delete";

      btn.addEventListener("click", () => {
        this.removeUser(index);
      });

      card.appendChild(btn);

      // Add card to UI
      document.querySelector(".users").appendChild(card);
    });
  },

  // Remove user from array
  removeUser: function (index) {
    this.users.splice(index, 1);
    this.renderUi();
  },
};

// Start app
userManager.init();