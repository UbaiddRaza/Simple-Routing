import React, { useState } from 'react';

const Card = ({ title, price, src, description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    const descriptionMore = () => {
        setShowFullDescription(!showFullDescription)
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl border border-black">
            <figure>
                <img src={src} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Rs: {price}</p>
                <p>
                    Rs: {showFullDescription ? description : `${description.slice(0, 20)}...`}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={descriptionMore}>
                        {showFullDescription ? 'Show less' : 'Show more..'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;