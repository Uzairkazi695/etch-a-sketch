const userPrompt = validateNumber()
const container = document.querySelector('.container')
let squareSize;


let timesGrid = userPrompt


function validateNumber() {
    while(true) {
        let userInput= prompt('How many grid do you want!')
        let parsedNum = parseInt(userInput)

        if(parsedNum === '' || parsedNum < 1 || parsedNum > 100) {
            userInput = prompt('Please enter a number between 1 to 100')
        } else {
            return parsedNum
        }
    }
}
   





document.addEventListener('DOMContentLoaded',intializerGrid)
window.addEventListener('resize', intializerGrid)
   
function intializerGrid(){
    container.innerHTML = ''
    for (let i = 0; i < timesGrid ** 2; i++) {
        const gridDiv = document.createElement('div')
        gridDiv.classList.add('my-div')
    const containerWidth = container.clientWidth; 
    // console.log(containerWidth);
    squareSize = containerWidth / timesGrid
    // console.log(squareSize);
    gridDiv.style.width =`${squareSize}px`
    gridDiv.style.height =`${squareSize}px`
    // gridDiv.textContent = `${i}`
    container.appendChild(gridDiv)

    gridDiv.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = `${randomColor()}`
    })
}
}
function randomColor() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}
