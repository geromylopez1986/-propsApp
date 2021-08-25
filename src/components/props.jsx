import React from 'react'

const Props = (props) => {

    const { img, title, text } = props

    return (
        <div className="col">
             <img className="card-img-top img-thumbnail" src={img} alt="..." />
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{text}</p>
                 <a href="google.com" className="btn btn-primary">Ver mas</a>
             </div>
        </div>
    )
}

export default Props