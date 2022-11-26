import React from "react";
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import '../assets/css/footer.css'

function Footer () {
return (
    <div className="container-fluid footer-wrapper mt-4" style={{padding:'0'}}>
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center" style={{padding: '0'}}>
                <div className="row d-flex" style={{flexDirection: 'row', width: '100%'}}>
                    <div className="col-4 p-5 d-flex justify-content-center" style={{backgroundColor: '#999'}}>
                        <BsInstagram style={{fontSize: '7rem',}}/>
                    </div>
                    <div className="col-4 p-5 d-flex justify-content-center" style={{backgroundColor: '#777'}}>
                        <BsFacebook style={{fontSize: '7rem'}}/>
                    </div>
                    <div className="col-4 p-5 d-flex justify-content-center" style={{backgroundColor: '#555'}}>
                        <BsTwitter style={{fontSize: '7rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer;