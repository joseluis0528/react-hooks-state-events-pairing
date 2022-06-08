import React, { useState } from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";
import Votes from "./Votes.js";

function App() {
  // console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title={video.title} views={video.views} createdAt={video.createdAt} />
      <Votes upvotes={upvotes} downvotes={downvotes} setUpvotes={setUpvotes} setDownvotes={setDownvotes} setComments={setShowComments} showComments={showComments} />
      {showComments ? <Comments comments={video.comments} />  : ' '}
    </div>
  );
}

export default App;
