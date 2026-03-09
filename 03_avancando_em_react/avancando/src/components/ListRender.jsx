import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Guilherme", "Gabriel", "Rita", "Guilherme"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Guilherme", age: 34},
        {id: 2, name: "Gabriel", age: 31},
        {id: 3, name: "Rita", age: 64},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id));
    }
  
  return (
    <div>ListRender
        {/* 4 - render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* 6 - previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender