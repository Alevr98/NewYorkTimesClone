import React from "react";
import { GiH2O } from "react-icons/gi";

function MainNews (props) {
    const {path, id, title, abstract, url} = props;
    return (
        <a href={url} style={{textDecoration: "none", color: "#333"}}>
        <div className="container news-wrapper" key={id} style={{padding:'2rem'}}>
            <div className="row">
                <div className="col-lg-4">
                    <h6><b>{title}</b></h6>
                    <p>{abstract}</p>
                </div>
                <div className="col-lg-8">
                    <img src={path} alt="" width="400"/>
                </div>
            </div>
            <hr />
        </div>
        </a>
    )
}

export default MainNews;