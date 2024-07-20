document.getElementById("idForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const length = 3;
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const length1 = 1;
  let result1 = "";
  for (let i = 0; i < length1; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const randomNumbers = () => Math.floor(Math.random() * 10);

  const generatedId = `${result}${lastName.charAt(
    0
  )}${randomNumbers()}${randomNumbers()}${randomNumbers()}${result1}`;

  document.getElementById(
    "generatedId"
  ).textContent = `Generated ID: ${generatedId}`;
});
