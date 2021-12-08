import React from "react";
const Navbar = () => {
    let Curdate=new Date();
    Curdate=Curdate.getHours();
    let curr=new Date();
    curr=curr.getMinutes();
    let greet=""
    const cssStyle={}
    let icon=""
    if (curr<10){
        curr=0+curr
    }
    if(Curdate>=1 && Curdate<12){
        greet="GOOD MORNING"
        cssStyle.color="green"
        icon="fas fa-sun"
    }else if(Curdate>=12 && Curdate<19){
        greet="GOOD EVENING"
        cssStyle.color="orange"
        icon="fas fa-cloud-moon"
    }else{
        greet="GOOD NIGHT"
        cssStyle.color="yellow"
        icon="fas fa-moon"
    }
    
    return (
        <>
            <nav class="navbar fixed-bottom navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{color:"lightgreen",marginLeft:"5px",fontSize:"larger"}}><div><h6 style={{marginLeft:"0px"}}>{greet} {<i style={cssStyle} class={icon}></i>} <h6>{Curdate-12}:{curr}</h6> </h6></div> </a>
                </div>
            </nav>
        </>
    )
}
export default Navbar
