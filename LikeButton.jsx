import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleLike}>
        Like
      </button>

      <p>Total Likes: {likes}</p>
    </div>
  );
}

export default LikeButton;