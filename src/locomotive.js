import LocomotiveScroll from "locomotive-scroll";
export function loco() {
  window.onload = () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  };
}
