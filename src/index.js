import LocomotiveScroll from "locomotive-scroll";

window.onload = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
};
