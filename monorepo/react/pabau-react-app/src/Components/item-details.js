import React, { useEffect } from "react";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export function ItemDetails(props) {
    useEffect(() => {
        props.updateStep(2);
    });

    let data = useLocation();
    let item = data.state;
    return (
        <div className="container mt-5">
            <div className="flex-center flex-direction-column">
                <h2>{item && item.name}</h2>
                <Link to="/"><button type="button" className="btn btn-primary">Go back</button></Link>
            </div>
        </div>
    )
}