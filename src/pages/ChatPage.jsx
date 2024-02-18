import React, { useState, useEffect } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await fetch("/api/chat");
      if (!response.ok) {
        throw new Error("Failed to fetch chat data");
      }
      const data = await response.json();
      console.log(data); // This line logs the fetched data
      setChats(data);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>Chat Page</div>;
};

export default ChatPage;
