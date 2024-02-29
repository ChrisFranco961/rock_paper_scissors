let Userscore=0
let Computerscore=0

function ComputerChoice(){
let number=Math.floor(Math.random()*3);
if(number==1){
    return 'rock'
}else if(number==0){
    return 'paper'}
    else{return 'scissors'}
}
    

function UserChoice(){
    user=prompt('Choose between rock,paper, and scissors').toLowerCase();
    return user

}
function result(){
    if(choiceuser=='rock' && choice=='scissors'){
        return 1;
       }else if(choiceuser=='scissors' && choice=='paper'){
         return 1;
       }else if(choiceuser=='paper' && choice=='rock'){
        return 1 ;
       }else if(choiceuser=='scissors' && choice=='rock'){
       return 0;
       }else if(choiceuser=='paper'&& choice=='scissors'){
        return 0;
       }else if(choiceuser=='rock' && choice=='paper'){
         return 0;
       }else {return 3}
}
function ScoreKeeper()
{Gameresult=result();
if (Gameresult==1){++Userscore}
else if(Gameresult==0){++Computerscore}}
    
   
function Comparison(){
    if(choiceuser=='rock' && choice=='scissors'){
     alert('You won rock beats scissors ')
    }else if(choiceuser=='scissors' && choice=='paper'){
       alert('You won scissors beat paper')
    }else if(choiceuser=='paper' && choice=='rock'){
     alert('You won paper beats rock');
    }else if(choiceuser=='scissors' && choice=='rock'){
     alert('you loose rock beats scissors')
    }else if(choiceuser=='paper'&& choice=='scissors'){
       alert('you loose scissors beat paper')
    }else if(choiceuser=='rock' && choice=='paper'){
      alert('you loose paper beats rock')
    } else if(choiceuser==choice){
        alert('Tie! no one wins.')
    }
    else {alert('please enter a propper value!')}
   }
function Gameplay(){
    
    choiceuser=UserChoice()

    choice=ComputerChoice()
    Comparison()
    ScoreKeeper()

}

function Play(){
    Gameplay()
    alert('User     ' + Userscore+ '       Computer      ' +Computerscore)    
}
Play()
Play()
Play()
Play()
Play()
alert('Final Score          User     ' + Userscore+ '       Computer      ' +Computerscore  )