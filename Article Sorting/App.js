import "h8k-components";

import Articles from "./components/Articles";

import React, { useState, useEffect } from 'react';

import "./App.css";

function App({ articles }) {
  const [articlList, setArticleList] = useState(articles);
  useEffect(() => {
    handleMostUpvoted();
  }, []);


  const handleMostUpvoted = () => {
    const tempArr = [...articlList];
    tempArr.sort((a, b) => b.upvotes - a.upvotes);
    setArticleList(tempArr);
  };

  const handleMostRecent = () => {
    const tempArr = [...articlList];
    tempArr.sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticleList(tempArr);
  };


  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articlList={articlList} />
      </div>
    </>
  );
}

export default App;
