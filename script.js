var menuicon = document.querySelector("#menu-icon");
var menulist = document.querySelector("nav");
menuicon.addEventListener("click", () => {
  menulist.classList.toggle("showmenu");
});

