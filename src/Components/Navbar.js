import { React, useState } from "react";
import { BsFillSunFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/navbar.css';
import Logo from '../assets/IMG/logo.png';
import { changeSidebar, changeSearch, changeVal } from '../redux/store';

function Navbar (props) {
    let navigate = useNavigate();
    let today = new Date();
    let day = today.getUTCDate();
    let year = today.getUTCFullYear();
    let month = today.toLocaleString('default', {month: 'long'});
    let dayName = today.toLocaleDateString('default', { weekday: 'long' });  
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch(changeSearch());
    }
    const handleSubmit = () => (e) => {
        const inputValue = document.querySelector('#searchButton').value;
        dispatch(changeSearch());
        dispatch(changeVal(inputValue));
        navigate(`/search`);
    }

    return (
        <>
        <div className="container-fluid" style={{padding: '0rem 4rem', backgroundColor: '#f8f9fa'}}>
            <div className="row first-row">
                <div className="col-12 p-0">
            <section className="navbar-container">
            <nav className="navbar navbar-expand bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse items-container" style={{display:"flex !important", justifyContent:"space-between"}} id="navbarSupportedContent">
                <div className="icon container-left">
                    <div className="container search-wrapper d-flex" style={{visibility: props.search ? 'visible' : 'hidden'}}>
                        <input className="form-control me-2" id='searchButton' type="search" placeholder="Search" aria-label="Search"/>
                        <button type="button" onClick={handleSubmit()} className="btn btn-secondary mr-2 ml-2">Go</button>
                    </div>
                    <div className="icon-wrapper" style={{display:'flex'}}>
                <GiHamburgerMenu style={{marginRight: "1.5rem", fontSize: '2rem', cursor: 'pointer'}} className={!props.sidebar ? ('sidebar-smooth'): ('sidebar')} onClick={() => dispatch(changeSidebar())}/>
                <FaSearch  style={{marginRight: "1.5rem", fontSize: '2rem'}} onClick={handleChange}/>
                    </div>
                </div>
                <ul className="navbar-nav mb-2 mb-lg-0 section-container">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">U.S.</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">International</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Canada</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Espanol</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">中文</a>
                    </li>
                </ul>
                <div className="button-container-right">
                <button type="button" className="btn btn-secondary mr-2 ml-2" style={{marginLeft:"1rem"}}>Subscribe for 0.50€/week</button>
                <button type="button" className="btn btn-secondary mr-2 ml-2" style={{marginLeft:"1rem"}}>Log in</button>
                </div>
                </div>
            </div>
            </nav>
            </section>
                </div>
            </div>
            <div className="row second-row">
                <div className="col-lg-12 bg-light">
                <div className="header-container d-flex" style={{justifyContent:'space-between', margin:'1rem 0'}}>
                    <div className="date-container" style={{margin: '1rem'}}>
                        <h6>{`${dayName}, ${month} ${day}, ${year}`}</h6>
                        <p>Today's Paper</p>
                    </div>
                    <div className="logo-wrapper d-flex justify-content-center align-items-centerd" style={{width:'-webkit-fill-available', minWidth: '200px', maxWidth:'700px'}}>
                    <Link to="/">
                        <img src={Logo} alt="" style={{width:'auto'}}/>
                    </Link>
                    </div>
                    <div className="weather-container" style={{margin: '1rem'}}>
                        <div className="first-row d-flex">
                        <BsFillSunFill style={{color:'orange'}}/>
                        <p style={{margin:'0'}}><b>16°C</b> <span style={{fontWeight:'200'}}>22° 14°</span></p>
                        </div>
                        <p className='stock-container' style={{color:'green'}}> S%P <span>+2,37%</span></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row categories-list">
                <div className="col-lg-12 bg-light">
                <div className="categories-container d-flex justify-content-center" style={{justifyContent:'space-between'}}>
                    <ul className='d-flex'>
                        <li>World</li>
                        <li>U.S.</li>
                        <li>Politics</li>
                        <li>N.Y.</li>
                        <li>Business</li>
                        <li>Opinion</li>
                        <li>Tech</li>
                        <li>Science</li>
                        <li>Health</li>
                        <li>Sports</li>
                        <li>Arts</li>
                        <li>Books</li>
                        <li>Style</li>
                        <li>Food</li>
                        <li>Travel</li>
                        <li>Magazine</li>
                        <li>T Magazine</li>
                        <li>Real Estate</li>
                        <li>Video</li>
                    </ul>
                </div>
                </div>
            </div>
                <div className="row live_wrapper_row">
                    <div className="container live_wrapper_container">
                        <div className="col-lg-8 live_wrapper">
                            <h6 className='live_section'>LIVE</h6>
                            <p>World Cup Updates <span className='minutes_ago'> 11 min ago</span></p>
                            <p>Russia - Ukraine War<span className='minutes_ago'> 29 min ago</span></p>
                        </div>
                    </div>
                </div>
                <hr className='live_wrapper_line'/>
        </div>
        </>
    )
}

export default Navbar;