const switchTheme = document.getElementById("switch-theme");

switchTheme.addEventListener("click", handleSwitchTheme);

function handleSwitchTheme() {
  const body = document.body;

  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
    switchTheme.innerHTML = "Dark";
  } else {
    body.classList.replace("light-theme", "dark-theme");
    switchTheme.innerHTML = "Light";
  }
}
