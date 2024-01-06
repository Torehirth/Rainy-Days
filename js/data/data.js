import message from "../components/errorMessage.js";

const URL = "https://api.noroff.dev/api/v1/rainy-days";

const container = document.querySelector("#container");

async function fetchJackets() {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    console.log(jacketsJson);

    container.innerHTML = "";

    renderJackets(jacketsJson);
  } catch (error) {
    console.log(error);
    // const container = document.querySelector("#container");
    container.innerHTML = message("error", error);
  }
}
fetchJackets();

// ---------------------------------------

function renderJackets(jacketsJson) {
  for (let i = 0; i < jacketsJson.length; i++) {
    container.innerHTML += `
                      <div class="content">${jacketsJson[i].title}</div>
                      <div class="content">${jacketsJson[i].gender}</div>
                      `;
  }
}

// ---------------------------------------------------------------------

// import message from "../components/errorMessage.js";

// const resultsContainer = document.querySelector("#container");

// const URL = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

// async function fetchTeams() {
//   try {
//     const response = await fetch(URL);
//     const results = await response.json();

//     // logs the results og the API call.
//     console.log(results);

//     resultsContainer.innerHTML = ""; // to end loader/spinner

//     for (let i = 0; i < results.length; i++) {
//       // We only want to display 15 teams.
//       if (i === 15) {
//         break;
//       }

//       // If the teamname starts with the letter C or c, the loop continues (doesn't show teams with letter C or c).
//       if (results[i].teamName.toLowerCase().startsWith("c")) {
//         continue;
//       }

//       // Alternative to startsWith method is the charAt method:
//       // // If the teamname starts with the letter C or c, the loop continues (doesn't show teams with letter C or c).
//       // // ther zero in charAt(0) represents the first letter.
//       // if (results[i].teamName.charAt(0).toUpperCase() === "C") {
//       //   continue;
//       // }

//       resultsContainer.innerHTML += `
//                                     <div class="card">
//                                     <h2>${results[i].teamName}</h2>
//                                     <h3>Location: ${results[i].location}</h3>
//                                     <h5>Team Id: ${results[i].teamId}</h5>
//                                     </div>
//                                     `;

//       console.log(results[i].teamName);
//     }
//   } catch (error) {
//     console.log(error);
//     resultsContainer.innerHTML = message("error", error);
//   }
// }
// fetchTeams();
