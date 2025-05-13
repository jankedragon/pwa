//welcome page javascript


//DOMContentLoaded ensures the DOM if fully loaded before JavaScript tried to access elements like buttons
document.addEventListener("DOMContentLoaded", function () {
  const enterBtn = document.getElementById("enterButton");
  enterBtn.addEventListener("click", enterApp);
});

function enterApp()
{
    window.location.href = "clock.html";
}