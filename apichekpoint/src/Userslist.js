import { useEffect, useState } from "react";
import axios from "axios";
import Usercard from './Usercard'
const Userslist = () => {
  const [users, setUsers] = useState("");
  console.log(users, "pp");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
 
 <div>
    {users && users.map((el) => <Usercard el={el} />)}

  </div>
  );

};
export default Userslist;
