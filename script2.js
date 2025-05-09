
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const message = document.getElementById("formMessage");

  if (!email || !name) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
  } else if (!email.includes("@")) {
    message.textContent = "Enter a valid email.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});


function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = () => li.remove();
    taskInput.value = "";
  }
}
