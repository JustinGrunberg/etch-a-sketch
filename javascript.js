let container = document.querySelector('#container')
container.addEventListener('mouseover', createHoverEffect)

let gridSize = 16 * 16

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        let div = document.createElement('div')
        div.className = 'grid-item'
        container.appendChild(div)
    }
}

function createHoverEffect(e){
    if(e.target.className === 'grid-item'){
        e.target.style.backgroundColor = 'blue';
    }
}

createGrid()