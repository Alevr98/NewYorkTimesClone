import React from "react";
import { useParams } from "react-router-dom";
function Article () {
    const params = useParams();
    let id = params.id;
    
    const getArticle = () => {
        console.log(id);
    }
    getArticle();
return (
    <main>
        <div className="container">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-lg-8 d-flex justify-content-center">
                    <h1>Article</h1>
                </div>
            </div>
        </div>
    </main>
)
}

export default Article;