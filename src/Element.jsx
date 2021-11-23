import React, { Component} from 'react'
import PropTypes from 'prop-types'

export class Element extends Component {
    

    render() {
        let {title,description,image,url}=this.props
        return (
            <div>
                <div className="card">
                    <img src={!image?"https://picsum.photos/seed/picsum/200/300":image} className="card-img-top" alt="dfd" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} target="_blank" className="btn  btn -sm btn-secondary">READ MORE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Element
