const greet = document.querySelector(".banner");
const sideMenu = document.querySelector(".side-menu");
const addMenu = document.querySelector(".fa-bars")
const moreContent = document.querySelector(".more-content");
const seeMoreBtn = document.querySelector(".see-more-btn");

greet.addEventListener("click", () => {
  greet.innerHTML = "<h1>Have a Good Time!</h1>";
});

sideMenu.style.display = "none";
sideMenu.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("close")) {
    sideMenu.style.display = 'none';
  } 
  });

addMenu.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("fa-bars")){
        sideMenu.style.display = 'inline-block';
  }
  });

moreContent.style.display = "none";
seeMoreBtn.addEventListener("click",() => {
    moreContent.style.display = "block";
})
