import { useEffect, useState } from "react";
import { fakeFetch } from "./fakefetch";

// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.
export const ChatRoom = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/userchats");
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
    <div className="chat-room">
      <h2>Chat Room</h2>
      {isLoading && <span>Loading......</span>}
      {data.map((item, index) => (
        <div key={index}>
          {index % 2 == 0 ? "user" : "You"}: {item}
        </div>
      ))}
    </div>
  );
};
