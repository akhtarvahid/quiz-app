import React from "react";
import './results.scss';

export default function Results({ lists }) {
  const [limit, setLimit] = React.useState(5);
  const handleMore = () => {
    if(limit <= lists.length)
     setLimit(limit + 3);
  }
  let len = lists && lists.length;
  return (
    <div className="results">
      <div className="searchlist-row">
        {lists && lists.length > 0 ?
          lists.slice(0, limit).map((list) => (
            <div key={list.id} className="list">
              <img src={list.largeImageURL} alt={list.tags} />
              <div>{list.tags}</div>
            </div>
          )):
          <div>Something went wrong</div>
        }
      </div>
      {limit < len && <button onClick={handleMore}>Load more</button>}
    </div>
  );
}
