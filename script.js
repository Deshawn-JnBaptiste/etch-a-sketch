const gridContainer = document.querySelector("#gridContainer")

for (let i = 0; i <= 16; i++) {
     const row = document.createElement("div")
     row.classList.add("rows")
     gridContainer.appendChild(row)

     for (let j = 0; j <= 16; j++) {
          const tile = document.createElement("div")
          tile.classList.add("tiles")
          row.appendChild(tile)
     }
}

