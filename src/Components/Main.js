import {React, useEffect, useState} from "react";
import axios from "axios";
import { getAllByPlaceholderText } from "@testing-library/react";
import MainNews from "./MainNews";
import MostPopular from "./MostPopular";






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
                                if(el.media.length != 0){
                                    return (
                                        <div className="news-wrapper" key={el.id}>
                                        <MainNews path={value[index]} {...el}/>
                                    </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="col-lg-4">
                        <MostPopular />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Main;