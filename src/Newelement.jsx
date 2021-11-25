import React from 'react'

export default function Newelement(props) {
    return (
        <>
            <div className="card">
              <img src={props.articles.image} className="card-img-top" alt="image"/>
                <div className ="card-body">
                <h5 className ="card-title">{props.title}</h5>
                <p className ="card-text">{props.description}</p>
                <a href="#" className ="btn btn-primary">{props.url}</a>
                </div>
            </div>
       </>
    )
}

