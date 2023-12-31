const players = []; // Populate this array with player objects
function generateTeams(players) {
    players.sort(() => Math.random() - 0.5);

    const advancedPlayers = players.filter(player => player.skill === 'advanced');
    const beginnerPlayers = players.filter(player => player.skill === 'beginner');
    

    const totalTeams = Math.ceil(players.length / 4);
    const teams = new Array(totalTeams).fill().map(() => []);

    const distributePlayers = (playerArray) => {
        let index = 0;
        for (let i = 0; i < playerArray.length; i++) {
            teams[index].push(playerArray[i]);
            index = (index + 1) % totalTeams;
        }
    };

    distributePlayers(advancedPlayers);
    distributePlayers(beginnerPlayers);

    return teams;
}

  // Function to shuffle an array (Fisher-Yates shuffle algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Function to generate teams when a button is clicked
function generateAndDisplayTeams() {
    const generatedTeams = generateTeams(players);
    if (generatedTeams) {
        console.log(generatedTeams);
        // Display or process the generated teams as needed
    }
}

  function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const skillLevel = document.getElementById('skillLevel').value;

    // Add the new player to the players array
    players.push({ name: playerName, skill: skillLevel });

    displayPlayers(); // Update the displayed player list
    const playerCount =  document.getElementById("player-amount");
    playerCount.textContent = players.length;

    document.getElementById('playerName').value = ''; // Clear input field after adding
}

function displayPlayers() {
    const playersList = document.getElementById('playersList');
    playersList.innerHTML = ''; // Clear the existing list

    players.forEach(player => {
        const playerDetails = document.createElement('p');
        playerDetails.textContent = `Name: ${player.name}, Skill Level: ${player.skill}`;
        playersList.appendChild(playerDetails);
    });
}

// Display initial list of players
displayPlayers();
  
//   // Generate teams using the sample players
//   const generatedTeams = generateTeams(players);
//   console.log(generatedTeams);
  