const gridContainer = document.querySelector("#gridContainer");
const gridSize = document.querySelector("#gridSize");
const gridLabel = document.querySelector("#gridLabel");
const colourPicker = document.querySelector("#colourPicker");
const colourButton = document.querySelector("#colourButton")
const rainbowButton = document.querySelector("#rainbowButton")
const eraserButton = document.querySelector("#eraserButton")
const clearButton = document.querySelector("#clearButton")

let colourButtonPressed = false; 
let rainbowButtonPressed = false;
let eraserButtonPressed = false;
let clearButtonPressed = false;
let mouseDown = false;


colourButton.addEventListener("click", () => {
     colourButtonPressed = true;
     rainbowButtonPressed = false;
     eraserButtonPressed = false;
     clearButtonPressed = false;
})

rainbowButton.addEventListener("click", () => {
     rainbowButtonPressed = true;
     colourButtonPressed = false;
     eraserButtonPressed = false;
     clearButtonPressed = false;
})

eraserButton.addEventListener("click", () => {
     eraserButtonPressed = true;
     colourButtonPressed = false;
     rainbowButtonPressed = false;
     clearButtonPressed = false;
})

clearButton.addEventListener("click", () => {
     clearButtonPressed = true;
     colourButtonPressed = false;
     rainbowButtonPressed = false;
     eraserButtonPressed = false;
})












function createGrid(size) {
     for (let i = 1; i <= size; i++) {
     const row = document.createElement("div")
     row.classList.add("rows")
     gridContainer.appendChild(row)

          for (let j = 1; j <= size; j++) {
          const tile = document.createElement("div")

          tile.addEventListener("mousedown", (event) =>  {
               event.preventDefault()
               mouseDown = true;
          })
          //Decides what the tiles look like
          tile.addEventListener("mouseover", () =>  {
               if (mouseDown) {
               tile.style.backgroundColor = `${colourPicker.value}`
               }
          })
          tile.addEventListener("mouseup",()=> {
               mouseDown = false;
          }) 

          tile.classList.add("tiles")
          tile.style.height = `${640/size}px`;
          tile.style.width = `${640/size}px`;
          row.appendChild(tile)
          }    
     }
}










createGrid(16)
gridSize.value = 16;
gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;

gridSize.addEventListener("input", ( )=> {
     const allRows = document.querySelectorAll(".rows")
     allRows.forEach(item => item.remove())
     gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;
     createGrid(gridSize.value)
})






