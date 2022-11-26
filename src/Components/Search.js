import {React, useState, useEffect} from "react";
import { useSearchParams } from 'react-router-dom'
import axios from "axios";

function Search () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState();
    let request = searchParams.get("query");
    async function getSearchData () {
        let searchValue = searchParams.get("query");
        try {
            const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchValue}&api-key=Ns7fTLmeIf1AiN9SgCdKbx4pW5mOHa3R`);
            setSearchQuery(response.data.response.docs);
        } catch (error) {
            setSearchQuery('error')
        }
    }

    useEffect(() => {
        getSearchData();
    }, [])

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center m-4" style={{fontSize: '3rem'}}>Risultati per: <span style={{fontWeight: '200'}}>{request}</span></h2>
                </div>
            </div>
            <div className="row result_wrapper">
                <div className="col-lg-12">
                    { searchQuery && searchQuery == 'error' || searchQuery && searchQuery.length == 0 || request == null || request == '' ? (<p style={{textAlign: 'center', fontSize: '2rem', fontWeight: '200'}}>La ricerca non ha prodotto risultati</p>): (
                        searchQuery && searchQuery.map((query, key) => {
                            return (
                                <a key={key} href={query.web_url} style={{textDecoration: 'none', color: '#333' }}>
                                <div className="card m-3 shadow">
                                    <div className="card-body">
                                    {query.headline.main}
                                    </div>  
                                </div>
                                </a>
                            )
                        }))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Search   