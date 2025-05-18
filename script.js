// Quiz Logic
const questions = [
  { text: "JavaScript is case sensitive?", answer: true },
  { text: "CSS stands for Computer Style Sheets?", answer: false },
  { text: "HTML stands for HyperText Markup Language?", answer: true },
  {
    text: "You can use 'var', 'let', and 'const' to declare variables in JavaScript.",
    answer: true,
  },
  { text: "The <div> tag is used to display an image.", answer: false },
];

let current = 0;

function submitAnswer(userAnswer) {
  const result =
    userAnswer === questions[current].answer ? "✅ Correct!" : "❌ Wrong!";
  alert(result);
  current = (current + 1) % questions.length;
  document.getElementById("question").innerText = questions[current].text;
}

document.getElementById("question").innerText = questions[0].text;

// Joke API Logic

// Fetch Joke from API
async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_ten");
  const data = await res.json();
  
  const jokeContainer = document.getElementById("joke-container");

  // Only take the first joke to add one at a time
  const joke = data[0];

  // Create a joke card
  const jokeCard = document.createElement("div");
  jokeCard.className = "joke-card";
  jokeCard.innerText = `${joke.setup} - ${joke.punchline}`;

  // Append the new joke to the container
  jokeContainer.appendChild(jokeCard);
}

