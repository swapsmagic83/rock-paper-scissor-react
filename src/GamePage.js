import React, {useState} from "react";
const GamePage = () =>{
    const initial = ['ROCK','PAPER','SCISSOR']
    const [userChoice, setUserChoice] = useState('')
    const [compChoice, setCompChoice] = useState('')
    const [userScore, setUserScore] = useState(0)
    const [compScore, setCompScore] =useState(0)
    const [winner,setWinner] = useState('')
  
    
    const handleClick = (e) =>{
        let random = Math.floor(Math.random()* initial.length)
        setUserChoice(e.target.value)
        setCompChoice(initial[random])    
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (( userChoice === "ROCK" && compChoice === "SCISSOR") ||
            (userChoice === "SCISSOR" && compChoice === "PAPER") ||
            (userChoice ==="PAPER" && compChoice === "ROCK")){
            setUserScore(userScore+1)   
        }
        if ((compChoice === "ROCK" && userChoice === "SCISSOR") ||
           (compChoice === "SCISSOR" && userChoice === "PAPER") ||
         (compChoice ==="PAPER" && userChoice === "ROCK")){
            setCompScore(compScore+1)
        }
        if (userScore === 20){
            setWinner('You')
            
            return
        }
        else if (compScore === 20){
            setWinner('Comp')
            
            return
        }
        
    }
    const reset = () =>{
        
        setCompChoice('')
        setUserChoice('')
        setCompScore(0)
        setUserScore(0)
        setWinner('')
    }
    
    return (
        <div>
           <form  onSubmit={handleSubmit}>
                
                <button onClick={handleClick} value={"ROCK"} disabled={winner != ''}>Rock</button>
                <button onClick={handleClick}  value={"PAPER"} disabled={winner != ''}>Paper</button>
                <button onClick={handleClick} value={"SCISSOR"} disabled={winner != ''}>Scissor</button>
            </form>
            
            <div >
                <h3>Your choice: {userChoice}</h3>
                <h3>Computer's choice: {compChoice}</h3>
            </div>
            <div>
                <h2>Your Score: {userScore}</h2>
                <h2>Computer Score: {compScore}</h2>
            </div >
            <h1  >Winner is {winner}</h1>
            <button onClick={reset}>RESET GAME</button>
        </div>
    )

}
export default GamePage;