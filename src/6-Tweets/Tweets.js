// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { Card } from "../3-Card";

// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.
export const Tweets = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [filterState, setFilterState] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/usertweets");
      if (response.status === 200) {
        setData(response.data);
        setLoadingState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="tweets">
      <button onClick={() => setFilterState((prevState) => !prevState)}>
        {filterState
          ? "Show All tweets"
          : "Show tweets with more than 50 likes"}
      </button>
      <div className="tweets-list">
        {isLoading && <span>Loading......</span>}
        {filterState
          ? data
              .filter(({ likes }) => likes > 50)
              .map(({ content, likes, views }) => {
                return (
                  <div className="tweet-card">
                    <h3>{content}</h3>
                    <span>Likes:{likes}</span>
                    <span>Views:{views}</span>
                  </div>
                );
              })
          : data.map(({ content, likes, views }) => {
              return (
                <div className="tweet-card">
                  <h3>{content}</h3>
                  <span>Likes:{likes}</span>
                  <span>Views:{views}</span>
                </div>
              );
            })}
      </div>
    </div>
  );
};
