import React from "react";
import "./Style.css"
const Index = () => {
  return (
    <div>
      <div className="form__wrapper">
        <form action="/#" autoComplete="off">
          <div className="form active">
            <p className="form__subtitle">Personal info</p>
            <div className="form__input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form__input">
              <input type="email" placeholder="email" />
            </div>
            <div className="form__input">
              <input type="text" placeholder="Enter your testmonial"/>
            </div>
            <div className="button__wrapper">
              <button id="next" className="button button--filled">
               Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
