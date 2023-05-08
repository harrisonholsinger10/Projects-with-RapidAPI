import { MY_API_KEY } from './config.js';

fetch("https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2020", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "nfl-team-stats.p.rapidapi.com",
        "x-rapidapi-key": MY_API_KEY
    }
})
    .then(response => response.json())
    .then(data => {
        const teamWinStatsList = data["_embedded"]["teamWinStatsList"];
        console.log(teamWinStatsList); // Log the teamWinStatsList object to the console
        const tableBody = document.querySelector("#team-stats-table tbody");
        teamWinStatsList.forEach(team => {
            // Remove "xy" from the team name using the replace() method
            const teamName = team.name.replace(/xy|xz|\*xz|\*$/gi, "");
            const row = tableBody.insertRow();
            const nameCell = row.insertCell();
            const winsCell = row.insertCell();
            const lossesCell = row.insertCell();
            const winRateCell = row.insertCell();
            nameCell.textContent = teamName;
            winsCell.textContent = team.wins;
            lossesCell.textContent = team.losses;
            winRateCell.textContent = team.winRatePercentage * 100 + "%";
        });
    })
    .catch(err => console.error(err));

