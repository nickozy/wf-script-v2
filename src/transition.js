export function transition() {
  const scroll = new LocomotiveScroll();

  // lock the scroll to prevent further animations when transitioning
  barba.hooks.before(() => {
    scroll.stop();
  });

  // reset scroll position and update the scroll when the next page is fetched
  barba.hooks.enter(() => {
    scroll.scrollTo({
      offset: 0,
      smooth: false,
      disableLerp: true,
      duration: 0,
    });

    scroll.update();
  });

  // unlock the scroll, in order to let the user be able to scroll again
  barba.hooks.after(() => {
    scroll.start();
  });
}
