const gridContainer = document.querySelector("#gridContainer")

for (let i = 1; i <= 16; i++) {
     const row = document.createElement("div")
     row.classList.add("rows")
     gridContainer.appendChild(row)

     for (let j = 1; j <= 16; j++) {
          const tile = document.createElement("div")
          tile.addEventListener("mouseenter", () =>  {
               tile.style.backgroundColor = "blue";
               tile.style.borderColor = "gray";
          })
          tile.classList.add("tiles")
          row.appendChild(tile)
     }    
}

