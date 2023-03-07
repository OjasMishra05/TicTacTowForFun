console.log('Welcome to TicTacToe');

let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let music = new Audio('music.mp3')
let turn = "X"
let isgameover = false
let boxtext = document.getElementsByClassName('boxtext')
music.play()
music.loop = true


// Function to change the turn
let changeturn = () =>{
    return turn === "X"? "0": "X"
}

// Function to check for a Win
const checkwin = ()=>{
    win = [
        [0, 1, 2, 30, -10, -90],
        [3, 4, 5, 30, 0, -90],
        [6, 7, 8, 30, 10, -90],
        [0, 3, 6, 20, 0, 0],
        [1, 4, 7, 30, 0, 0],
        [2, 5, 8, 40, 0, 0],
        [0, 4, 8, 30, 0, -45],
        [2, 4, 6, 30, 0,  45],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML)&&(boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML)&&(boxtext[e[0]].innerHTML !== '')){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + ' Won'
            isgameover = true
            document.querySelector('.imgbox').style.opacity = 1
            gameover.play()
            document.querySelector('.line').style.translate = `${e[3]}vw ${e[4]}vw`
            document.querySelector('.line').style.rotate = `${e[5]}deg`
            document.querySelector('.line').style.opacity = 1
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn 
            turn = changeturn()
            audioturn.play()
            checkwin() 
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerHTML = 'Turn For ' + turn        
            }  
        }
    }) 
})

// Controling reset button
reset.addEventListener('click',() =>{
    Array.from(boxtext).forEach(element =>{
        element.innerHTML = ''
    })
    turn = 'X'
    document.getElementsByClassName('info')[0].innerHTML = 'Turn For ' + turn  
    changeturn() 
    document.querySelector('.imgbox').style.opacity = 0
    document.querySelector('.line').style.opacity = 0
})
