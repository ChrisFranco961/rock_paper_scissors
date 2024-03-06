
const rockbutton=document.getElementById('rock')
const paperbutton=document.getElementById('paper')
const scissorsbutton=document.getElementById('scissors')

paperbutton.onclick=gamepaper
rockbutton.onclick=gamerock
scissorsbutton.onclick=gamescissors

function gamerock(){
    computerchoice()
    comparisonrock(computernumber)
}
function computerchoice(){
    computernumber=Math.floor(Math.random()*3)
}
function comparisonrock(computernumber){
    if(computernumber==1){
        document.getElementById('computerhand').innerHTML='Paper'
    ++document.getElementById('rightcomputer').innerHTML
    playfart()
    }else if(computernumber==2){
        document.getElementById('computerhand').innerHTML='Scissors'
    ++document.getElementById('leftuser').innerHTML
    playcheer()
    }else {
        document.getElementById('computerhand').innerHTML='Rock'
    }
}
function gamepaper(){
    computerchoice()
    comparisonpaper(computernumber)
}
function computerchoice(){
    computernumber=Math.floor(Math.random()*3)
}
function comparisonpaper(computernumber){
    if(computernumber==2){
        document.getElementById('computerhand').innerHTML='Scissors'
    ++document.getElementById('rightcomputer').innerHTML
    playfart();
}else if(computernumber==0){
        document.getElementById('computerhand').innerHTML='Rock'
    ++document.getElementById('leftuser').innerHTML
    playcheer()
    }else{
        document.getElementById('computerhand').innerHTML='Paper'
    }
}
function gamescissors(){
    computerchoice()
    comparisonscissors(computernumber)
}
function computerchoice(){
    computernumber=Math.floor(Math.random()*3)
}
function comparisonscissors(computernumber){
    if(computernumber==0){
        document.getElementById('computerhand').innerHTML='Rock'
    ++document.getElementById('rightcomputer').innerHTML
    playfart()
    }else if(computernumber==1){
        document.getElementById('computerhand').innerHTML='Paper'
    ++document.getElementById('leftuser').innerHTML
    playcheer()
    }else{
        document.getElementById('computerhand').innerHTML='Scissors'
    }
}
function playcheer(){
    let cheeraudio=new Audio('./sounds/cheer.mp3')
    cheeraudio.play()
}
function playfart(){
    let fartaudio=new Audio('./sounds/fart.mp3')
    fartaudio.play()
}

    
