import {React, useEffect, useState} from "react";
import axios from "axios";

function MostPopular () {
    const [articles, setArticles] = useState();
    const [images, setImages] = useState();

    const apiRequest = async () => {
        try {
            const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=Ns7fTLmeIf1AiN9SgCdKbx4pW5mOHa3R');
            setArticles(response.data.results);
            let popularImage = {}
            response.data.results.map((el, index) => {
                if(el.media[0] != undefined){
                    popularImage[index] = el.media[0]['media-metadata'][2].url;
                }
            })
            setImages(popularImage);
        } catch (error) {
            console.error(error);   
        } 
    }

    useEffect(() => {
        apiRequest();
    }, [])

    return (
        <div className="card-container">
            <div className="container">
                <div className="row">
                    <h3 className="text-center mt-3">Best of the Week</h3>
                    <div className="col-lg-12">
                        </div>
                    {
                        articles && articles.map((article, index) => {
                            const {title, abstract, path, id} = article;
                            let descShort = abstract.substring(0, 50);
                            if(images[index] == undefined){
                                return(
                                    <div className="col-lg-6 mb-3 text-center" key={id} style={{display:'none'}}>
                                        <img src={images[index]} alt="" width='150' style={{padding:'10px'}}/>
                                        <h6><b>{title}</b></h6>
                                        <p>{`${descShort}...`}  <b style={{cursor: 'pointer'}}>Load more</b></p>
                                    </div>
                                    );                 
                                }else {
                                    return(
                                        <div className="col-lg-6 mb-3 text-center" key={id}>
                                            <img src={images[index]} alt="" width='150' style={{padding:'10px'}}/>
                                            <h6><b>{title}</b></h6>
                                            <p>{`${descShort}...`}  <b style={{cursor: 'pointer'}}>Load more</b></p>
                                        </div>
                                        );   
                            }
                                
                            })
                        }
                    </div>
                </div>
            </div>
    )

}

export default MostPopular;