export function sideScroll(element, direction, speed, distance, step) {
  let scrollAmount = 0;
  const slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

export function updateScroll(ref) {
  const { current } = ref;
  const offsetWidth = current.offsetWidth || 0;
  const scrollWidth = current.scrollWidth || 0;
  const maxScroll = scrollWidth - offsetWidth;
  const currentScroll = current.scrollLeft;
  return { maxScroll, currentScroll: currentScroll };
}
