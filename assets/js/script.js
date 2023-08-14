const Header = document.querySelector("#header");

const Scroller = () => {
  return this.scrollY >= 200
    ? Header.classList.add("scroller")
    : Header.classList.remove("scroller");
};

window.addEventListener("scroll", Scroller);
