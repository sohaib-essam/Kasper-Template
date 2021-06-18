const toggleIcon = document.querySelector("header nav .toggle-menu");

toggleIcon.onclick = function () {
  if (document.querySelector("header nav ul").className == "") {
    document.querySelector("header nav ul").className = "show";
  } else {
    document.querySelector("header nav ul").className = "";
  }
};
