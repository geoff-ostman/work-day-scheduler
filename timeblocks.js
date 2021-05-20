// Time Blocks
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "orange");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "red");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}


// Save To Local Storage
submit.addEventListener('click', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (task.value.length < 1) return;

	// Add item to wishlist
	task.innerHTML += '<li>' + task.value + '</li>';

	// Clear input
	task.value = '';

	// Save the list to localStorage
	localStorage.setItem('wishlistItems', task.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('task');

// If there are any saved items, update our list
if (saved) {
	task.innerHTML = saved;
}