"use client"

import { useState } from 'react';

export default function CommentSection() {
  // State to manage the list of comments and input value
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      // Add the new comment to the list
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(''); // Clear input field after submission
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold text-Black mb-4 flex justify-center items-center">Comments</h2>
      
      {/* Comment Input Section */}
      <div className='max-w-lg mx-auto p-8 rounded-lg bg-green-950 backdrop-blur-md text-center border border-transparent mt-24'>
      <div className="flex space-x-4 mb-6 ">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border border-black text-black rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleCommentSubmit}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Post
        </button>
      </div>

      {/* Displaying the Comments */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-white">No comments yet. Be the first to post!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="p-4 bg-white/20 rounded-md">
              <p className="text-white">{comment}</p> {/* Set text color to black */}
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}
