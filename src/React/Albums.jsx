import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Albums = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
      res.json().then((res) => setList(res))
    );
    sort();
  }, []);
  const [list, setList] = useState([]);
  const sort = () => {
    const newList = [...list];
    newList.sort((x, y) => {
      if (x.title > y.title) {
        return 1;
      }
      if (x.title < y.title) {
        return -1;
      }
      return 0;
    });
    return newList;
  };

  return (
    <>
      <Outlet />
      <div>Albums</div>
      <ul className="list-group">
        {sort().map((album, idx) => {
          return (
            <Link to={`/albums/${album.id}/photos`}>
              <li className="list-group-item" key={idx}>{album.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Albums;
