export const handleScroll = (result) => {
  window.scrollTo({
    top: result * window.innerHeight,
    behavior: "smooth",
  });
};
export const handleScrollNext = (result, length) => {
  const index = result === length ? 0 : result + 1;
  window.scrollTo({
    top: index * window.innerHeight,
    behavior: "smooth",
  });
  return index;
};
export const handleScrollPrev = (result, length) => {
  const index = result === 0 ? length : result - 1;
  window.scrollTo({
    top: index * window.innerHeight,
    behavior: "smooth",
  });
  return index;
};
