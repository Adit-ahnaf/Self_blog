import React,{createContext, useEffect, useState} from 'react';
import Homepage from './Homepage';
import axios from 'axios';


export const titleProvider = createContext();
export const Datascrap = props => {

  const [users, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const result = await axios.get(
      "http://localhost:1337/Documents"
    );
    console.log(result);
    setUser(result.data);
  };
  return (
   <titleProvider.Provider value={[users,setUser]}>
       {props.children}
   </titleProvider.Provider>
  );
};

export default Datascrap;