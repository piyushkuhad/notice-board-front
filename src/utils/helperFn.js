import moment from 'moment';

export const calcTimeAgo = (dt) => moment(dt, 'YYYYMMDDhmm').fromNow();

export const debounceFn = (fn, delay) => {
  let timer;
  let context = this;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};
