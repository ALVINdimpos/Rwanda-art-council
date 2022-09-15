import React from 'react'
import NavBar from "../NavBar/Index";
import Footer from "../Footer/Footer";
import PageIndicator from "../PageIndicator/Index";
import { useEffect,useState } from 'react';


const Fideration = () => {
  const [Fid, setFid] = useState(null);
  useEffect(() => {
    fetch(`https://rwanda-art-api.herokuapp.com/api/ViewUser/1`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFid(data);
        console.log(data);
      }
      );
  }, []);
  return (
    <>
<NavBar/>
<PageIndicator name="Fideration name"/>

<Footer/>
    </>
  )
}

export default Fideration