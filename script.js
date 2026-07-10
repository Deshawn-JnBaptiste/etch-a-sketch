const gridContainer = document.querySelector("#gridContainer");
const gridSize = document.querySelector("#gridSize");
const gridLabel = document.querySelector("#gridLabel");
const colourPicker = document.querySelector("#colourPicker");
const colourButton = document.querySelector("#colourButton")
const rainbowButton = document.querySelector("#rainbowButton")
const eraserButton = document.querySelector("#eraserButton")
const clearButton = document.querySelector("#clearButton")

let currentTool = "colour";
let mouseDown = false;

colourPicker.addEventListener("click", ()=> {
     currentTool = "colour";
})

colourButton.addEventListener("click", () => {
     currentTool = "colour";
})

rainbowButton.addEventListener("click", () => {
     currentTool = "rainbow";
})

eraserButton.addEventListener("click", () => {
     currentTool = "eraser";
})

clearButton.addEventListener("click", () => {
     resetGrid()
})

gridSize.addEventListener("input", ( )=> {
     resetGrid()
     gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;

})

//Button Functions
function changeColour(tile) {
     if (currentTool == "colour") {
          tile.style.backgroundColor = `${colourPicker.value}`;
     }
}

function rainbowMode(tile) {
     if (currentTool == "rainbow") {
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          tile.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
     }
}

function eraserMode(tile) {
     if (currentTool == "eraser") {
          tile.style.backgroundColor = "white";
     }
}

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
                    changeColour(tile)
                    rainbowMode(tile)
                    eraserMode(tile)
          })
          
          tile.addEventListener("mouseover", () =>  {
               if (mouseDown) {
                    changeColour(tile)
                    rainbowMode(tile)
                    eraserMode(tile)
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

function resetGrid() {
     const allRows = document.querySelectorAll(".rows")
     allRows.forEach(item => item.remove())
     createGrid(gridSize.value)
}

//On Page Load
createGrid(16)
gridSize.value = 16;
gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;