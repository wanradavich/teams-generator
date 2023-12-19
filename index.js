const players = []; // Populate this array with player objects
function generateTeams(players) {
  players.sort(() => Math.random() - 0.5);

  const skillLevels = ['advanced', 'upper-intermediate', 'intermediate', 'upper-beginner', 'beginner'];
  const playersBySkill = skillLevels.map(skill => players.filter(player => player.skill === skill));

  const totalTeams = Math.ceil(players.length / 4);
  const teams = new Array(totalTeams).fill().map(() => []);

  let index = 0;
  let skillIndex = 0;

  while (playersBySkill.some(skill => skill.length > 0)) {
      if (playersBySkill[skillIndex % skillLevels.length].length > 0) {
          teams[index % totalTeams].push(playersBySkill[skillIndex % skillLevels.length].pop());
          index++;
      }
      skillIndex++;
  }

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
  