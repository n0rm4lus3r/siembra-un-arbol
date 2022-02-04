const theme = document.getElementById("theme-check");

theme.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
