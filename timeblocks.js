let submit = document.getElementsByClassName('savebutton');

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
var saveTask = function() {
    localStorage.setItem("task", JSON.stringify(tasks));
  };
  
  var loadTask = function() {
    var savedTasks = localStorage.getItem("task");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedTasks) {
      return false;
    }
    console.log("Saved tasks found!")};

// Create New Task
formEl.addEventListener("task", taskFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);

// for changing the status
pageContentEl.addEventListener("change", taskStatusChangeHandler);

loadTasks();