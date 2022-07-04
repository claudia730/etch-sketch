function makeCells(cells){
    let grid = document.getElementById("grid-container");
    grid.style.gridTemplateColumns = `repeat(${cells}, minmax(5px, 200px)`;
    for (let index=0; index < cells * cells; index++) {
        let cell = document.createElement('div');
        cell.className = ("cell");
        grid.appendChild(cell);
     }
    addHover(); 
 }

function addHover(){
    document.querySelectorAll('.cell').forEach(
        cell => {cell.addEventListener(
            'mouseover', function(e) {e.target.style.backgroundColor = "red"}
        )}
    )
}

function changeLayout(){
    let cellNum = prompt("Enter the number of cells per side (up to 10)");
    if (cellNum < 10){
        document.querySelectorAll('.cell').forEach(c => c.remove());
        makeCells(cellNum);
    } else {
        document.querySelector("#info-box").innerHTML = "Invalid input";
    }
}

makeCells(10);
addHover();