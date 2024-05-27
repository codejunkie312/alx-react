import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('Writes out the full year in YYYY Format', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('Returns a string to be used in the footer of the page', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('Returns an object with an __html element', () => {
  expect(getLatestNotification()).toEqual({
    __html: '<strong>Urgent requirement</strong> - complete by EOD'
  });
});
