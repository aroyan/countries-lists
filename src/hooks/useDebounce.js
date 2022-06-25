export const useDebounce = (func, milliseconds) => {
  const time = milliseconds || 1000;
  let timer;

  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};
