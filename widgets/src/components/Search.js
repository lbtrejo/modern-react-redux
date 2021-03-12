import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 750);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        // async/await syntax is not allowed in the useEffect parent function
        // Option 1: make an async helper function and invoke it (recommended)

        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                }
            );
            setResults(data.query.search);
        };

        search();

        // Option 2: IIFE option 1
        // (async (term) => {
        //     await axios.get('searchAPIURL');
        // })();

        // Option 3: Promise chaining
        // axios.get('searchAPIURL').then((response) => {
        //     console.log(response.data);
        // });
    }, [debouncedTerm, results.length]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                </div>
                <span
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                ></span>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
