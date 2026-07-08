const gridContainer = document.querySelector("#gridContainer");
const gridSize = document.querySelector("#gridSize");
const gridLabel = document.querySelector("#gridLabel");
const colourPicker = document.querySelector("#colourPicker");
const colourButton = document.querySelector("#colourButton")
const rainbowButton = document.querySelector("#rainbowButton")
const eraserButton = document.querySelector("#eraserButton")
const clearButton = document.querySelector("#clearButton")

let colourButtonPressed = true; 
let rainbowButtonPressed = false;
let eraserButtonPressed = false;
let clearButtonPressed = false;
let mouseDown = false;

colourPicker.addEventListener("click", ()=> {
     colourButtonPressed = true;
     rainbowButtonPressed = false;
     eraserButtonPressed = false;
     clearButtonPressed = false;
})

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
     rainbowButtonPressed = false;
     eraserButtonPressed = false;
     clearGrid()
     colourButtonPressed = true;
})

gridSize.addEventListener("input", ( )=> {
     const allRows = document.querySelectorAll(".rows")
     allRows.forEach(item => item.remove())
     gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;
     createGrid(gridSize.value)
})

//Button Functions
function changeColour(tile) {
     if (colourButtonPressed) {
          tile.style.backgroundColor = `${colourPicker.value}`;
     }
}

function rainbowMode(tile) {
     if (rainbowButtonPressed) {
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          tile.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
     }

}

function eraserMode(tile) {
     if (eraserButtonPressed) {
          tile.style.backgroundColor = "white";
     }

}

function clearGrid() {
     if (clearButtonPressed){
     const allRows = document.querySelectorAll(".rows")
     allRows.forEach(item => item.remove())
     createGrid(gridSize.value)
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
          })
          //Decides what the tiles look like
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
//On Page Load
createGrid(16)
gridSize.value = 16;
gridLabel.textContent = `${gridSize.value} x ${gridSize.value}`;






