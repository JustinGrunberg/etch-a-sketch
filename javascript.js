let container = document.querySelector('#container')
let gridSize = 16 * 16

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        let div = document.createElement('div')
        div.className = 'grid-item'
        container.appendChild(div)
    }
}

createGrid()