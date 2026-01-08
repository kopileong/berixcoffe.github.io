document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector("i");

  // Load theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("bi-moon", "bi-sun");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      icon.classList.replace("bi-moon", "bi-sun");
    } else {
      localStorage.setItem("theme", "light");
      icon.classList.replace("bi-sun", "bi-moon");
    }
  });
});
