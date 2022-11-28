/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Style from "./Style.module.css";

const Index = () => {
  const [ExcutiveTeam, setExcutive] = useState([]);
  useEffect(() => {
    fetch(`http://art-council.herokuapp.com/api/TeamExecutive`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExcutive(data);
      });
  }, []);
  return (
    <>
  {ExcutiveTeam.team?.map((team, id) => (
         <div className={Style.main}>
         <div className={Style.profile_card} key={id}>
           <div className={Style.img}>
             <img src={team.profile} alt="Loading..." />
           </div>
           <div className={Style.caption}>
             <h3>{team.name}</h3>
             <p>{team.position}</p>
             <div className={Style.social_links}>
               <a href={team.facebook}>
                 <i class="fab fa-facebook"></i>
               </a>
               <a href={team.instagram}>
                 <i class="fab fa-instagram"></i>
               </a>
               <a href={team.twitter}>
                 <i class="fab fa-twitter"></i>
               </a>
             </div>
           </div>
         </div>
       </div>))}
    </>
  )
}

export default Index