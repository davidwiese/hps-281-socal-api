document.getElementById("searchButton").addEventListener("click", apiRequest);

async function apiRequest() {
  const peakName = document.querySelector("searchInput").value;
  try {
    const response = await fetch(
      `https://hps-281-socal-api-c3f4c9431c63.herokuapp.com/api/${peakName}`
    );
    const data = await response.json();

    console.log(data);
    document.getElementById("peakData").innerText = data;
  } catch (error) {
    console.log(error);
  }
}
