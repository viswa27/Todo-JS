const addTaskBtn = document.getElementById("addTaskBtn");
const addTaskModalBtn = document.getElementById("addTaskModalBtn");
const addEventModalBtn = document.getElementById("addEventModalBtn");
const taskNameInput = document.getElementById("taskNameInput");
const eventInput = document.getElementById("eventInput");
const taskList = document.getElementById("taskList");

// Add event listener to show task modal
addTaskBtn.addEventListener("click", () => {
  document.getElementById("taskModal").style.display = "block";
});

// Add event listener to close task modal
document.getElementById("taskModal").getElementsByClassName("close")[0].addEventListener("click", () => {
  document.getElementById("taskModal").style.display = "none";
});

// Add event listener to close event modal
document.getElementById("eventModal").getElementsByClassName("close")[0].addEventListener("click", () => {
  document.getElementById("eventModal").style.display = "none";
});

// Add event listener to add task
addTaskModalBtn.addEventListener("click", () => {
  const taskName = taskNameInput.value.trim();
  if (taskName !== "") {
    addTask(taskName);
    taskNameInput.value = "";
    document.getElementById("taskModal").style.display = "none";
  }
});

// Add event listener to add event
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("addEventBtn")) {
    const card = e.target.parentElement;
    document.getElementById("eventModal").style.display = "block";
    addEventModalBtn.onclick = () => {
      const event = eventInput.value.trim();
      if (event !== "") {
        addEvent(card, event);
        eventInput.value = "";
        document.getElementById("eventModal").style.display = "none";
      }
    };
  }
});

// Add event listener to remove completed events
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("removeCompletedBtn")) {
    const card = e.target.parentElement;
    const completedEvents = card.getElementsByClassName("done");
    while (completedEvents.length > 0) {
      completedEvents[0].remove();
    }
  }
});

// Add event listener to view a card
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("card")) {
    const card = e.target;
    const heading = card.querySelector("h3").textContent;
    showCard(card, heading);
  }
});

// Add event listener to go back to main page
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "goBackBtn") {
    document.getElementById("taskList").style.display = "flex";
    document.getElementById("cardView").style.display = "none";
  }
});

// Function to add a new task
function addTask(taskName) {
  const card = document.createElement("div");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = taskName;

  const addEventBtn = document.createElement("button");
  addEventBtn.textContent = "Add Event";
  addEventBtn.classList.add("addEventBtn");

  const removeCompletedBtn = document.createElement("button");
  removeCompletedBtn.textContent = "Remove Completed";
  removeCompletedBtn.classList.add("removeCompletedBtn");

  card.appendChild(heading);
  card.appendChild(addEventBtn);
  card.appendChild(removeCompletedBtn);

  taskList.appendChild(card);
}

// Function to add a new event to a card
function addEvent(card, event) {
  const eventItem = document.createElement("div");
  eventItem.textContent = event;

  card.appendChild(eventItem);
}

// Function to show a card
function showCard(card, heading) {
  const cardView = document.getElementById("cardView");
  cardView.innerHTML = "";
  cardView.style.display = "block";
  document.getElementById("taskList").style.display = "none";

  const cardHeading = document.createElement("h2");
  cardHeading.textContent = heading;

  const goBackBtn = document.createElement("button");
  goBackBtn.textContent = "Go Back";
  goBackBtn.id = "goBackBtn";

  cardView.appendChild(cardHeading);
  cardView.appendChild(goBackBtn);

  const cardClone = card.cloneNode(true);
  cardClone.classList.remove("card");
  cardClone.classList.add("card-view");

  cardView.appendChild(cardClone);
}