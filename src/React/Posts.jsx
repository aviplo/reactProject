import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    listOfPosts();
  }, []);

  const data = localStorage.getItem("userObj");
  const parse = JSON.parse(data);
  const id = parse.id;
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  };
  const listOfPosts = async () => {
    const allPosts = await getPosts();
    setList(allPosts.filter((i) => i.userId === id));
  };

  console.log(list);
  return (
    <>
      <div>Posts</div>
      <div className="grid" >
        {list &&
          list.map((cell,idx,idx2) => 
          <div className="card" style={{width: "18rem", justifyContent:'center',float:"left" }}key={idx}>
            <img className={"card-img-top"} src="https://picsum.photos/200" alt="" />
            <div className="card-body" key={idx} >
            <Link to={`${cell.id}/comments`} onClick={()=>localStorage.setItem('postId',cell.id)}>
                <h5 className="card-title" key={idx}>{cell.title} </h5></Link><p key={idx2}>{cell.body}</p>
        </div> 
        </div>
          )}
      
      </div>
    </>
  );
};

export default Posts;
