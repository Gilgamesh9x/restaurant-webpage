const menuButton = document.querySelector("#menu");
const navBar = document.querySelector(".navbar");

// show / hide menu and add close button
menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("fa-times"); // this adds the close button when the menu button is clicked
  navBar.classList.toggle("active");

  /*   navBar.classList.contains("active")
    ? navBar.classList.remove("active")
    : navBar.classList.add("active"); */
});
