import React, { useEffect } from "react";
import Picture1 from "../../../assets/photos/CatImage4.jpeg";
import Style from "./Style.module.css";
import Button from "../../Button/Index";
import Model from "../../box/EventModal/Index";
import { useState } from "react";
import { MDBModal } from "mdb-react-ui-kit";

function Index() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [Event,setEvent]=useState([])
  const Token = localStorage.getItem("token");
  const fetchEvents = () => {
    fetch("https://rwanda-art-api.herokuapp.com/api/user/category", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setEvent(data);
      });
  };
  useEffect(() => {
    fetchEvents();
  }, [Event]);
  return (
    <div>
      <div className={Style.CardWraper}>
        <div className={Style.Card}>
          <div className={Style.overFlow}>
            <img
              src={Picture1}
              alt="description"
              className={Style.CardImgTop}
            />
          </div>
          <h4>Event name</h4>
          <div className={Style.DateCardWraper}>
            <div className={Style.DateCard}>
              <h5>August</h5>
              <h5>2022</h5>
              <h5>12</h5>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis
              </p>
              <div className={Style.EventButton}>
                <Button name="Book now" onClick={toggleShow} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <Model />
      </MDBModal>
    </div>
  );
}

export default Index;
