let container = document.querySelector('#container')
let gridCreator = document.querySelector('#grid-creator')

const CONTAINER_WIDTH = 512

gridCreator.addEventListener('click', (e) => {
    let userInput = prompt('Create a new Grid! What size do you want? (max. 100)')
    let gridSize = parseInt(userInput)

    if(!userInput){
        return
    }
    else if(isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        alert('Input invalid! Chose a number between 0 - 100')
        return
    } 

    let totalGridSize = gridSize * gridSize
    let cellSize = CONTAINER_WIDTH / gridSize

    console.log(cellSize)

    container.innerHTML = ''
    createGrid(totalGridSize, cellSize)
    
})
container.addEventListener('mouseover', createHoverEffect)

let totalGridSize = 16 * 16

function createGrid(totalGridSize, cellSize){
    for(let i = 0; i < totalGridSize; i++){
        let div = document.createElement('div')
        div.className = 'grid-item'
        div.style.width = `${cellSize}px`
        div.style.height = `${cellSize}px`
        container.appendChild(div)
    }
}

function createHoverEffect(e){
    if(e.target.className === 'grid-item'){
        e.target.style.backgroundColor = 'blue';
    }
}

createGrid(totalGridSize, 32)