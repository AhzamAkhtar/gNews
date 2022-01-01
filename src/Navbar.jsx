import React from "react";
const Navbar = () => {
    let Curdate=new Date();
    Curdate=Curdate.getHours();
    let curr=new Date();
    curr=curr.getMinutes();
    let greet=""
    const cssStyle={}
    let icon=""
    var am_pm="AM"
    var Curdate1=0
    if (Curdate>12){
        Curdate1=Curdate-12
    }
    if (Curdate<10){
        Curdate1="0"+Curdate
    } 
    if(curr<10){
        curr="0"+curr
    }
    if(Curdate>=1 && Curdate<12){
        greet="GOOD MORNING"
        cssStyle.color="green"
        icon="fas fa-sun"
        am_pm="AM"
    }else if(Curdate>=12 && Curdate<18){
        greet="GOOD AFTERNOON"
        cssStyle.color="yellow"
        icon="fas fa-cloud-moon"
        am_pm="PM"
    }else if (Curdate>=19 && Curdate<20){
        greet="GOOD NIGTH"
        cssStyle.color="orange"
        icon="fas fa-cloud-moon"
        am_pm="PM"
    }
    else if (Curdate>=20 && Curdate<=24){
        greet="GOOD NIGHT"
        cssStyle.color="white"
        icon="fas fa-moon"
        am_pm="PM"
    }
    else{
        greet="GOOD MORNING"
        cssStyle.color="green"
        icon="fas fa-sun"
        am_pm="AM"
    }
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{color:"lightgreen",marginLeft:"5px",fontSize:"larger"}}><div><h6 style={{marginLeft:"0px"}}>{greet} {<i style={cssStyle} class={icon}></i>} <h6>{Curdate1}:{curr} {am_pm}</h6> </h6></div> </a>
                </div>
            </nav>
        </>
    )
}
export default Navbar
