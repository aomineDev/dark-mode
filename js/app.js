const switchTheme = document.getElementById("switch-theme");

switchTheme.addEventListener("click", handleSwitchTheme);

function handleSwitchTheme() {
  if (document.body.dataset.theme === "dark") {
    document.body.dataset.theme = "light";
    switchTheme.innerHTML = "Dark";
  } else {
    document.body.dataset.theme = "dark";
    switchTheme.innerHTML = "Light";
  }
}

if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  if (matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.dataset.theme = "dark";
    switchTheme.innerHTML = "Light";
  }
}
