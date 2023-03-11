import jqueryScrollify from "jquery-scrollify";
jqueryScrollify(function () {
  $.scrollify({
    section: ".layout__list-item",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function () {},
    after: function () {},
    afterResize: function () {},
    afterRender: function () {},
  });
});
