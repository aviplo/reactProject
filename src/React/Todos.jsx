import React, { useEffect, useState } from "react";
import '../style/styleTable.css'
const Todos = () => {
  const [list, setList] = useState(null);
  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState(true);

  useEffect(() => {
    getTodos();
    listOfTodos();
  }, []);

  const sort = () => {
    const newList = [...list];
    newList.sort((x, y) => {
      if (x[sortBy] > y[sortBy]) {
        return sortOrder ? 1 : -1;
      } else if (x[sortBy] < y[sortBy]) {
        return sortOrder ? -1 : 1;
      }
      return 0;
    });
    return setList(newList);
  };

  const data = localStorage.getItem("userObj");
  const parse = JSON.parse(data);
  const id = parse.id;
  const getTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();
    return data;
  };
  
  useEffect(() => {
    listOfTodos();
  }, []);
  
  const listOfTodos = () => {
    return getTodos().then((allTodos) =>
      setList(allTodos.filter((i) => i.userId === id))
    );
  };
  function checkedHandler(e, id) {
    const newList = [...list];
    newList[id] = { ...list[id], completed: e };
    setList(newList);
    console.log(e, id);
  }

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortBy("id");
                sort();
                setSortOrder(!sortOrder);
              }}
            >
              <a href="#" className="sort-by"></a>
              #
            </th>
            <th
            
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortBy("title");
                sort();
                setSortOrder(!sortOrder);
              }}
            ><a href="#" className="sort-by"></a>
              title
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSortBy("completed");
                sort();
                setSortOrder(!sortOrder);
              }}
            >
              <a href="#" className="sort-by"></a>
              done
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {list &&
            list.map((obj, idx) => (
              <tr key={idx}>
                {Object.values(obj).map((cell, idx2) =>
                  idx2 > 0 ? (
                    typeof cell === "boolean" ? (
                      <input
                        type="checkbox"
                        checked={cell}
                        onChange={(e) => checkedHandler(e.target.checked, idx)}
                        key={idx2}
                      />
                    ) : (
                      <td key={idx2}>{cell}</td>
                    )
                  ) : null
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Todos;
