$("[data-anchor='clients']").on("click", function () {
  const anchor = document.querySelector("#clients");
  lenis.scrollTo(anchor, {
    lock: true,
    force: true,
  });
});

$("[data-anchor='audience']").on("click", function () {
  const anchor = document.querySelector("#audience");
  lenis.scrollTo(anchor, {
    lock: true,
    force: true,
  });
});
$("[data-anchor='monetize']").on("click", function () {
  const anchor = document.querySelector("#monetize");
  lenis.scrollTo(anchor, {
    lock: true,
    force: true,
  });
});
$("[data-anchor='expert']").on("click", function () {
  const anchor = document.querySelector("#expert");
  lenis.scrollTo(anchor, {
    lock: true,
    force: true,
  });
});
$("[data-anchor='auto']").on("click", function () {
  const anchor = document.querySelector("#auto");
  lenis.scrollTo(anchor, {
    lock: true,
    force: true,
  });
});

$("[data-anchor='expert']").on("click", function () {
  const anchor = document.querySelector("#expert");
  lenis.scrollTo(anchor, {
    lock: true,
    force: true,
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute("href"));
  });
});
