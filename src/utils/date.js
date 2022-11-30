const addZero = (n) => {
  return n < 10 ? '0' + n : n;
}

const getDate = () => {
  var date = new Date();
  return date.getFullYear().toString() + addZero(date.getMonth() + 1) + addZero( date.getDate()) + addZero( date.getHours() ) + addZero( date.getMinutes() ) + addZero(date.getSeconds());
}

export { getDate };