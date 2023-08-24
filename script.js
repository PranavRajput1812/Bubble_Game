//Created function to Redirecting Page

document.querySelector("button").addEventListener("click", () => {
  let counter = document.querySelector("h3");
  let count = 5;
  setInterval(() => {
    counter.style.color = "#fff";
    counter.style.marginTop = "10px";
    counter.innerHTML = `Game will start in ${count} seconds..`;
    count--;
    if (count < 0) {
      location.replace("./Game.html");
    }
  }, 1000);
});
