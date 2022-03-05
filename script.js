function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const check = (val) => {
	if (val.path[0].style.backgroundColor == document.getElementById("display").innerText) {
		document.getElementById("result").innerText = "Correct Tile selected!";
		document.getElementById('notice').style.display = "block";
	}
	else {
		val.path[0].style.backgroundColor = "";
		val.path[0].style.border = "none";
		val.path[0].style.cursor = "default";
		val.path[0].style.boxShadow = "none";
		val.path[0].removeEventListener("click", check);
		document.getElementById("result").innerText = "Try Again!";
		setTimeout(() => {
			document.getElementById("result").innerText = "Select the tile with given color!";
		}, 1000);
	}
}

const levelChange = (level) => {
	if (document.getElementById('notice').style.display == 'block') {
        document.getElementById('notice').style.display = "none";
        document.getElementById("result").innerText = "Select the tile with given color!";
    }
	document.getElementById("grid").innerHTML='';
	if (level == 'same') {
		createGrid();
	}
	else if (level == 'easy') {
		val = 1;
		createGrid();
	}
	else {
		val = 2;
		createGrid();
	}
}

val=1;

createGrid = () => {
	grid = document.getElementById("grid");
	x = Math.floor(Math.random() * (3 * val)) + 1;
	for (let i = 0; i < val; i++) {
		row = grid.insertRow(0);
		for (let j = 1; j <= 3; j++) {
			cell = row.insertCell();
			cell.addEventListener("click", check);
			cell.style.backgroundColor = getRandomColor();
			if (3 * i + j == x) {
				document.getElementById("display").innerText = cell.style.backgroundColor;
			}
		}
	}
}



createGrid();