import React,{useState} from "react";
const Newtime=()=>{
    var Greet="AM"
    var time11=0
    var GreetText="GOOD MORNING"
    var Icon=""
    const cssStyle={}
    let time=new Date().getHours()
    if(time>=0 && time<12){
        Greet="AM"
        GreetText="GOOD MORNING"
        Icon="fas fa-sun"
        cssStyle.color="yellow"
    }
    if(time>=12 && time<18){
        Greet="PM"
        GreetText="GOOD AFTERNOON"
        Icon="fas fa-cloud-moon"
        cssStyle.color="yellow"
    }
    if(time>=19 && time<20){
        Greet="PM"
        GreetText="GOOD EVENING"
        Icon="fas fa-cloud-moon"
        cssStyle.color="orange"
    }
    if(time>=20 && time<=24){
        Greet="PM"
        GreetText="GOOD NIGHT"
        Icon="fas fa-moon"
        cssStyle.color="yellow"
    }
    
    let min=new Date().getMinutes()
    const [ctime,setctime]=useState(time)
    const [Min,setMin]=useState(min)
    const [greet,setgreet]=useState(Greet)
    const [greettext,setgreettext]=useState(GreetText)
    const [icon,seticon]=useState(Icon)
    const Updatetime=()=>{
        time = new Date().getHours()
        if(time>12){
            time11=time-12
            setctime(time11)
        }
       
    }
    const Updatemin=()=>{
        min=new Date().getMinutes()
        if(min<10){
            min="0"+min
            setMin(min)
        
        }else{
            setMin(min)
        }
        
    }
    const Updategreet=()=>{
        setgreet(Greet)
        setgreettext(GreetText)
        seticon(Icon)
        
        
    }
    setInterval(Updatetime,1000)
    setInterval(Updatemin,1000)
    setInterval(Updategreet,60000)
    return(
        <>
            <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    {/*<a class="navbar-brand" href="#" style={{color:"lightgreen",marginLeft:"5px",fontSize:"larger"}}><div><h6 style={{marginLeft:"0px"}}>{greet} {<i style={cssStyle} class={icon}></i>} <h6>{Curdate1}:{curr} {am_pm}</h6> </h6></div> </a>*/}
                    <h6>{ctime}:{Min} {greet}</h6>
                    <h6 style={{textAlign:"center"}}>{greettext}</h6>
                    <i class={icon} style={cssStyle}></i>
                </div>
            </nav>
        </>
        </>
    )
}
export default Newtime