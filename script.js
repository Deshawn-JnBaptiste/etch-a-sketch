const gridContainer = document.querySelector("#gridContainer");
const gridSize = document.querySelector("#gridSize")
const gridLabel = document.querySelector("#gridLabel")
createGrid(16)
gridSize.value = 16;
gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;

function createGrid(size) {
     for (let i = 1; i <= size; i++) {
     const row = document.createElement("div")
     row.classList.add("rows")
     gridContainer.appendChild(row)

          for (let j = 1; j <= size; j++) {
          const tile = document.createElement("div")
          tile.addEventListener("mouseenter", () =>  {
               tile.style.backgroundColor = "blue";
               tile.style.borderColor = "gray";
          })
          tile.classList.add("tiles")
          tile.style.height = `${640/size}px`;
          tile.style.width = `${640/size}px`;
          row.appendChild(tile)
          }    
     }
}

gridSize.addEventListener("input", ( )=> {
     const allRows = document.querySelectorAll(".rows")
     allRows.forEach(item => item.remove())
     gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;
     createGrid(gridSize.value)
})






