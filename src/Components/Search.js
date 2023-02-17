import {React, useState, useEffect} from "react";
import { useSearchParams } from 'react-router-dom'
import axios from "axios";
import { logDOM } from "@testing-library/react";

function Search ({query}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState();
    let queryValue = query.value.payload;
    async function getSearchData () {
        let queryValue = query.value.payload;
        try {
            if(queryValue == ""){
                setSearchQuery('error')
            }else {
                const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryValue}&api-key=Ns7fTLmeIf1AiN9SgCdKbx4pW5mOHa3R`);
                setSearchQuery(response.data.response.docs);
            }
        } catch (error) {
            setSearchQuery('error')
        }
    }

    useEffect(() => {
        getSearchData();
    },[query])

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center m-4" style={{fontSize: '3rem'}}>Risultati per: <span style={{fontWeight: '200'}}>{queryValue}</span></h2>
                </div>
            </div>
            <div className="row result_wrapper">
                <div className="col-lg-12">
                    { searchQuery && searchQuery == 'error' || searchQuery && searchQuery.length == 0 ? (<p style={{textAlign: 'center', fontSize: '2rem', fontWeight: '200'}}>La ricerca non ha prodotto risultati</p>): (
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