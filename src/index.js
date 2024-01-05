function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5e2895284tafof7eab3b83f8a4a0b19f";
  let context =
    "You are a motivational quoter expert and love to write short motivation. You mission is to generate a 5 line quote in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the motivation. Sign the motivation with 'Thandi's Quotes' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a motivatioon poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">💬 motivational quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);