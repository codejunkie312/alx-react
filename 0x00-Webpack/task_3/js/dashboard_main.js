import $ from "jquery";
import _ from 'lodash';
import '../css/main.css';


$(function () {
  $('body').append('<div id=\'logo\'></div>')
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id=\'count\'></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  const debouncedUpdateCounter = _.debounce(updateCounter);
  $('button').on('click', debouncedUpdateCounter);
});
