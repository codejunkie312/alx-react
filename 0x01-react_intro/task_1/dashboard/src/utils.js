
const getFullYear = () => {
  return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

module.exports = {
  getFullYear,
  getFooterCopy
};
