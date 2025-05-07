import './styles.css'

const siteUnderConstruction = true;

const constructionEl = document.getElementById("under-construction");
const mainsiteEl = document.getElementById("main-site");

function toggleVis(el, showAs = "flex") {
  el.classList.remove("hidden", "block", "grid", "flex", "inline-block");
  el.classList.add(showAs);
}

if (siteUnderConstruction) {
  toggleVis(constructionEl, "flex");
  toggleVis(mainsiteEl, "hidden");
}
else {
  toggleVis(constructionEl, "hidden");
  toggleVis(mainsiteEl, "block");
}
