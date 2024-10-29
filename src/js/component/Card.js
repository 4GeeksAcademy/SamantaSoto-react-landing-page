import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";

const Card = ({ title, description, cardBtnName, imgSrc }) => {
    return (
        <div className="card col-12 col-sm-6 col-lg m-3" style={{ "width": "20rem" }} >
            <img src={imgSrc} className="card-img-top img-square" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{cardBtnName}</a>
            </div>
        </div>
    );
}

export default Card;