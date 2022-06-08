import React from "react";

function Votes({upvotes, downvotes, setUpvotes, setDownvotes, setComments, showComments}) {
    function handleUpvotes() {
        setUpvotes(++upvotes)
    }

    function handleDownvotes() {
        setDownvotes(++downvotes)
    }

    function handleComments() {
        setComments(!showComments)
    }

    return (
        <>
        <div>
            <button onClick={handleUpvotes}>{upvotes} 👍</button>
            <button onClick={handleDownvotes}>{downvotes} 👎</button>
        </div>
        <button onClick={handleComments}>{showComments ? 'Hide comments' : 'ShowComments'}</button>
        </> 
    )
}

export default Votes