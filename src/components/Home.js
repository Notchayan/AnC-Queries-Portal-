import React, { useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [question, setQuestion] = useState("");
  const [posts, setPosts] = useState([]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    setPosts((prevPosts) => [
      ...prevPosts,
      { id: prevPosts.length + 1, text: question, author: "Anonymous", votes: 0 },
    ]);
    setQuestion("");
  };

  const handleUpvote = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, votes: post.votes + 1 } : post));
  };

  const handleDownvote = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, votes: post.votes - 1 } : post));
  };

  return (
    <div className={styles.home}>
      <form onSubmit={handleQuestionSubmit} className={styles.questionForm}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Question to ask"
          className={styles.questionInput}
        />
        <button type="submit" className={styles.questionSubmit}>
          ➤
        </button>
      </form>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2 className={styles.postText}>{post.text}</h2>
            <p className={styles.postAuthor}>Posted by {post.author}</p>
            <p className={styles.postVotes}>Votes: {post.votes}</p>
            <div className={styles.postActions}>
              <button onClick={() => handleUpvote(post.id)} className={styles.postActionButton}>Upvote</button>
              <button onClick={() => handleDownvote(post.id)} className={styles.postActionButton}>Downvote</button>
              <button className={styles.postActionButton}>Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
