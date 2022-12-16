/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Style from "./Style.module.css";

const Index = () => {
  const [BoardTeam, setBoardTeam] = useState([]);
  useEffect(() => {
    fetch(`https://api.rwandaartscouncil.rw/api/TeamBoard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBoardTeam(data);
      });
  }, []);
  return (
    <>
    {BoardTeam.team?.map((team, id) => (
       <div className={Style.mainWraper}>
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