import React from "react";
import { GiH2O } from "react-icons/gi";
import '../assets/css/main_news.css';

function MainNews (props) {
    const {path, id, title, abstract, url} = props;
    return (
        <a href={url} style={{textDecoration: "none", color: "#333"}}>
        <div className="container news-wrapper" key={id} style={{padding:'2rem'}}>
            <div className="row image_container">
                <div className="col-lg-4 text_container">
                    <h6><b>{title}</b></h6>
                    <p>{abstract}</p>
                </div>
                <div className="col-lg-8">
                    <img src={path} alt="" style={{width:'-webkit-fill-available', minWidth:'150px'}}/>
                </div>
            </div>
            <hr />
        </div>
        </a>
    )
}

export default MainNews;