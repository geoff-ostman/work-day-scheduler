# User Story

- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively

# Acceptance Criteria
- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with time blocks for standard business hours
- WHEN I view the time blocks for that day
- THEN each time block is color-coded to indicate whether it is in the past, present, or future
- WHEN I click into a time block
- THEN I can enter an event
- WHEN I click the save button for that time block
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

# Code I Might Need Later? IDK.
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