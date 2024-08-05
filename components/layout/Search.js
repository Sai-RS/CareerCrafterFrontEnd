import React, { useState } from "react";
import Image from "next/image";
import { router, useRouter } from "next/router";

const Search = () => {

    const [keyword, setkeyword] = useState('')
    const [location, setlocation] = useState('')

    const router = useRouter()

    const submitHandler = async (e) => {
        e.preventDefault()

        if (keyword) {
            let searchQuerry = `/?keyword=${keyword}`;
            if (location) searchQuerry = searchQuerry.concat(`&location=${location}`)

            router.push(searchQuerry);
        } else {
            router.push('/')
        }
    }


    return (
        <div className="modalMask">
            <div className="modalWrapper">
                <div className="left">
                    <div style={{ width: "100%", height: "100%", position: "relative" }}>
                        <Image
                            src="/images/job-search.svg"
                            alt="search"
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="rightContentWrapper">
                        <div className="headerWrapper">
                            <h2>SEARCH</h2>
                        </div>
                        <form className="form" onSubmit={submitHandler}>
                            <div className="inputWrapper">
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Keyword"
                                        value={keyword}
                                        onChange={(e) => setkeyword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-industry"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter City, State ..."
                                        value={location}
                                        onChange={(e) => setlocation(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="searchButtonWrapper">
                                <button type="submit" className="searchButton">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;