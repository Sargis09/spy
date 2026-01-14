const gameContainer = document.getElementById("container");

let menuContent;
let preparingContent;

async function getHTMLBySource(source) {
  const response = await fetch(source);
  const menuHTML = await response.text();
  return menuHTML;
}

getHTMLBySource("./views/menu.html").then((menu) => {
  menuContent = menu;
  gameContainer.innerHTML = menu;
  const start = document.getElementById("start");

  start.onclick = () => {
    getHTMLBySource("./views/preparing.html").then((preparing) => {
      preparingContent = preparing;
      gameContainer.innerHTML = preparing;
      const restart = document.getElementById("restart");
      restart.onclick = () => {
        gameContainer.innerHTML = menuContent;
      };
    });
  };
});
