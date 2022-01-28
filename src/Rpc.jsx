import React, { useEffect, useState } from "react"
const getLocalItems=()=>{
    let list=localStorage.getItem("lists")
    if(list){
        return JSON.parse(localStorage.getItem("lists"))
    }else{
        return []
    }
}
const RPc = () => {
    //var Random=Math.floor(Math.random() * 3)
    var sel_com = ""
    var randomi = Math.floor(Math.random() * 3)
    console.log(randomi)
    const [Users, setUsers] = useState("")
    const [Comp, setComp] = useState("")
    const [userscore, setuserscore] = useState(getLocalItems)
    const [pcscore, setpcscore] = useState(0)
    const random = () => {
        // Returns a random integer from 0 to2:
        //var Random = Math.floor(Math.random() * 3)
        console.log(randomi)
        if (randomi == 0) {
            sel_com = "Rock"
            setComp(sel_com)
        }
        else if (randomi== 1) {
            sel_com = "Paper"
            setComp(sel_com)

        }
        else if (randomi == 2) {
            sel_com = "Scissors"
            setComp(sel_com)
        }
    }
    const Rock = () => {
        setUsers("Rock")
        random()
        if(randomi==0){
            setuserscore(userscore)
            setpcscore(pcscore)
           
        }
        else if(randomi==1){
            setuserscore(userscore)
            setpcscore(pcscore+1)
           
        }
        else if(randomi==2){
            setuserscore(userscore+1)
            setpcscore(pcscore)
           
        }
    }
    const Paper = () => {
        setUsers("Paper")
        random()
        if(randomi==0){
            setpcscore(pcscore)
            setuserscore(userscore+1)
           
        }
        else if(randomi==1){
            setpcscore(pcscore)
            setuserscore(userscore)
           
        }
        else  if(randomi==2){
            setpcscore(pcscore+1)
            setuserscore(userscore)
           
        }
        
    }
    const Scissors = () => {
        random()
        setUsers("Scissors")
        if (randomi==0){
            setpcscore(pcscore+1)
            setuserscore(userscore)
           
        }
        else if(randomi==1){
            setpcscore(pcscore)
            setuserscore(userscore+1)
           
        }
        else if(randomi==2){
            setuserscore(userscore)
            setpcscore(pcscore)
           
        }
        
    }
    const reset=()=>{
        setuserscore(0)
        setpcscore(0)
        setComp("")
        setUsers("")
    }
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(userscore))
    },[userscore])
    return (
        <>
            <h1 style={{textAlign:"center"}}>Rock Paper Scissors</h1>
            <div>
            <h3 style={{color:"lightgreen",marginLeft:"15px"}}>You Selected :{Users}</h3> 
            <h3 style={{color:"orange",marginLeft:"15px"}}>Computer Selected:{Comp}</h3>
            </div>
            <button style={{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"}} onClick={Rock}>Rock</button>
            <button style={{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"}} onClick={Paper}>Paper</button>
            <button style={{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"}} onClick={Scissors}>Scissors</button>
            <h3  style={{color:"lightgreen",marginLeft:"15px"}}>Your score is {userscore}</h3>
            <h3  style={{color:"orange",marginLeft:"15px"}}>PC score {pcscore}</h3>
            <button style={{textAlign:"center",width:"80%",marginLeft:"15px",marginBottom:"10px"}} onClick={reset}>Reset</button>
        </>
    )
}
export default RPc


{/*function randomNumber(min, max) { 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } */}