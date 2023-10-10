import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [user, setUser] = useState([]);

    useEffect(() => {
      const getUser = async () => {
        const res = await axios.get('http://localhost:3003/user')
        console.log(res)
      }
      getUser();
    })
};

export default Example;
