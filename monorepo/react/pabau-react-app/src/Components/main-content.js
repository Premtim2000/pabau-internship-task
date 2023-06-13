import React, { useEffect } from "react";
import { ListItem } from "./list-item-component";
import {Link} from 'react-router-dom';

function MainContent(props) {
    useEffect(() => {
        props.updateStep(1);
    });

    return (
        <div className="container mt-5" id="main">
            <div className="row">
                <Link to="/details/1" className="flex-center" state={{name: "Anti Wrinkle Treatment"}}><ListItem name="Anti Wrinkle Treatment" /></Link>
                <Link to="/details/2" className="flex-center" state={{name: "Dermal Fillers"}}><ListItem name="Dermal Fillers" /></Link>
                <Link to="/details/3" className="flex-center" state={{name: "Facials"}}><ListItem name="Facials" /></Link>
                <Link to="/details/4" className="flex-center" state={{name: "Sercet RF"}}><ListItem name="Sercet RF" /></Link>
                <Link to="/details/5" className="flex-center" state={{name: "Fat Dissolve"}}><ListItem name="Fat Dissolve" /></Link>
            </div>
        </div>
    )
}

export default MainContent;