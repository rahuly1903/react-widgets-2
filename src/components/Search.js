import React, { useState, useEffect } from "react";
import WikiApi from "../apis/WikiApi";
const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [wikiResult, setWikiResult] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (term) {
        setDebouncedTerm(term);
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const onSearch = async () => {
      const { data } = await WikiApi.get("/api.php", {
        params: {
          srsearch: debouncedTerm,
        },
      });
      console.log(data.query.search);
      setWikiResult(data.query.search);
    };
    if (debouncedTerm) {
      onSearch();
    }
  }, [debouncedTerm]);

  const resultList = wikiResult.map((wikiResult) => {
    return (
      <div key={wikiResult.pageid} className="ui item segment">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${wikiResult.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{wikiResult.title}</div>
          <div className="description">
            <span
              dangerouslySetInnerHTML={{ __html: wikiResult.snippet }}
            ></span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            name="wiki-search"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="ui styled list">{resultList}</div>
    </div>
  );
};

export default Search;
