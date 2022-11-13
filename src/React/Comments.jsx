import React, { useState, useEffect } from "react";

const Comments = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((c) => c.json())
      .then((c1) => setList(c1.filter((x) => x.postId === id)));
  }, []);

  const [list, setList] = useState([]);
  const id = JSON.parse(localStorage.getItem("postId"));
  return (
    <>
      <div>Comments</div>
      {list.map((data, idx, idx2) => {
        return (
          <>
          <p key={idx2}>{data.email}</p>
          <p key={idx2}>{data.name}</p>
            <div key={idx}>{data.name}</div>
            <div key={idx2}>{data.body}</div>
          </>
        );
      })}
    </>
  );
};

export default Comments;
