
const getFullYear = () => {
  return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

const getLatestNotification = () => {
  return { __html:'<strong>Urgent requirement</strong> - complete by EOD'};
}

module.exports = {
  getFullYear,
  getFooterCopy,
  getLatestNotification
};
