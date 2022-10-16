import {React, useEffect, useState} from "react";
import axios from "axios";
import { getAllByPlaceholderText } from "@testing-library/react";






function Main () {
    const [articles, setArticles] = useState();
    const [value, setValue] = useState();
    const getData = async function() {
        try {
            const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=Ns7fTLmeIf1AiN9SgCdKbx4pW5mOHa3R');
            setArticles(response.data.results);
            let imagesObj = {}
            response.data.results.map((el, index) => {
                if(el.media[0] != undefined){
                    imagesObj[index] = el.media[0]['media-metadata'][2].url;
                }
            })
            setValue(imagesObj);
        } catch (error) {
            console.error(error);   
        } 
    }
    useEffect(() => {
        getData();
    }, [])
    return(
        <section className="main-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    {articles &&
                            articles.map((el, index) => {
                                return (<div className="card m-5" key={el.id}>
                                <img src={value[index]} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{el.title}</h5>
                                    <p className="card-text">{el.abstract}</p>
                                    <a href={el.url} className="btn btn-primary">Watch more</a>
                                </div>
                            </div>)
                            })
                        }
                    </div>
                    <div className="col-lg-4">
                        <h2>Prova</h2>
                        {/* {articles &&
                            articles.map((el) => {
                                return (<div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>)
                            })
                        } */}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Main;