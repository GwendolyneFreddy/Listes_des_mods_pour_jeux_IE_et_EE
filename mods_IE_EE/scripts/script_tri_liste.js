
function filterByGame() {

	// Variables
	let dropdown, table, rows, cells, games, filter;
	dropdown = document.getElementById("countriesDropdown");
	tables = document.getElementsByClassName("tableau");

	Array.from(tables).forEach((table) => {
		rows = table.getElementsByTagName("tr");
		filter = dropdown.value;

		for (let row of rows) {
			games = row.getElementsByClassName("jeu");
    
			if (filter === "Tous" || !games.length) {
				row.style.display = "";
				continue;
			}
    
    		for (let game of games) {
				if (filter === game.textContent) {
					row.style.display = "";
					break;
				} else {
					row.style.display = "none";
				}
			}

		}

	});
}

