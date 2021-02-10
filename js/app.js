const switchTheme = document.getElementById("switch-theme");

switchTheme.addEventListener("click", handleSwitchTheme);

function handleSwitchTheme() {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.replace("dark-theme", "light-theme");
    switchTheme.innerHTML = "Dark";
  } else {
    document.body.classList.replace("light-theme", "dark-theme");
    switchTheme.innerHTML = "Light";
  }
}

if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  if (matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.replace("light-theme", "dark-theme");
    switchTheme.innerHTML = "Light";
  }
}
