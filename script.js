function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitInput").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.innerText = "Please enter a valid number.";
    return;
  }

  let result = "";

  switch (unit) {
    case "C":
      result = `Fahrenheit: ${((temp * 9) / 5 + 32).toFixed(2)} °F\nKelvin: ${(
        temp + 273.15
      ).toFixed(2)} K`;
      break;
    case "F":
      result = `Celsius: ${(((temp - 32) * 5) / 9).toFixed(2)} °C\nKelvin: ${(
        ((temp - 32) * 5) / 9 +
        273.15
      ).toFixed(2)} K`;
      break;
    case "K":
      result = `Celsius: ${(temp - 273.15).toFixed(2)} °C\nFahrenheit: ${(
        ((temp - 273.15) * 9) / 5 +
        32
      ).toFixed(2)} °F`;
      break;
  }

  resultDiv.innerText = result;
}
