import React from "react";
import Style from "./RegisterStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBFile } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Index() {
  const [Federation_name, SetFederation_name] = useState("");
  const [Phone_number, SetPhone_number] = useState("");
  const [Tin_number, SetTin_number] = useState("");
  const [Email, SetEmail] = useState("");
  const [Number_of_members, SetNumber_of_members] = useState("");
  const [Category, SetCategory] = useState("");
  const [Cluster, SetCluster] = useState("");
  const [Password, SetPassword] = useState("");
  const [ConfirmPassword, SetConfirmPassword] = useState("");
  const [CustomFile, SetCustomFile] = useState({});
  const [Logo, SetLogo] = useState({});
  const [loading, setLoading] = useState(false);
  const Federation_nameHandler = (e) => {
    SetFederation_name(e.target.value);
  };
  const Phone_numberHander = (e) => {
    SetPhone_number(e.target.value);
  };
  const Tin_numberHandler = (e) => {
    SetTin_number(e.target.value);
  };
  const EmailHandler = (e) => {
    SetEmail(e.target.value);
  };
  const Number_of_membersHandler = (e) => {
    SetNumber_of_members(e.target.value);
  };
  const CategoryHandler = (e) => {
    SetCategory(e.target.value);
  };
  const ClusterHandler = (e) => {
    SetCluster(e.target.value);
  };
  const PasswordHandler = (e) => {
    SetPassword(e.target.value);
  };
  const ConfirmPasswordHandler = (e) => {
    SetConfirmPassword(e.target.value);
  };
  const CustomLogoHandler = (e) => {
    e.preventDefault();
    const logo = e.target.files[0];
    if (logo.size > 1000000) alert("Logo size cannot exceed more than 8MB");
    else SetLogo(logo);
  };
  const CustomFileHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    // console.log(file);
    if (file.size > 1000000) alert("File size cannot exceed more than 8MB");
    else SetCustomFile(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("federation_name", Federation_name);
    formData.append("phone_number", Phone_number);
    formData.append("tinnumber", Tin_number);
    formData.append("email", Email);
    formData.append("number_of_members", Number_of_members);
    formData.append("category_id", Category);
    formData.append("password", Password);
    formData.append("password_confirmation", ConfirmPassword);
    formData.append("file", CustomFile);
    formData.append("image", Logo);
    setLoading(true);
    try {
      const res = await axios.post(
        "https://rwanda-art-api.herokuapp.com/api/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const fetchCategorie = () => {
    fetch("https://rwanda-art-api.herokuapp.com/api/user/category", {
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        SetCategory(data);
      });
  };
  console.log("category", Category);
  useEffect(() => {
    fetchCategorie();
    submitHandler();
  }, []);

  return (
    <>
      <div className={Style.mainWraper}>
        <div className={Style.registerWraper}>
          <div>
            <div>
              <Link to="/Home">
                {" "}
                <h4 style={{ color: "#c5801a" }}>
                  <MDBIcon fas icon="angle-left" />
                  Home
                </h4>
              </Link>
            </div>
          </div>
          <div>
            <h2>Create a new account</h2>
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Federation_name"
              onChange={Federation_nameHandler}
              value={Federation_name}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Phone_number"
              onChange={Phone_numberHander}
              value={Phone_number}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="text"
              placeholder="Tin_number"
              onChange={Tin_numberHandler}
              value={Tin_number}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="email"
              placeholder="Enter your email"
              onChange={EmailHandler}
              value={Email}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="number"
              placeholder="Number_of_members"
              onChange={Number_of_membersHandler}
              value={Number_of_members}
            />
          </div>
          <div>
            <select
              className="browser-default custom-select"
              onChange={CategoryHandler}
              value={Category}
            >
              <option defaultValue>Select category</option>
              <option value="1">PLASTIC ARTS</option>
              <option value="2">MUSIC & DANCE</option>
              <option value="3">ACTING & DRAMA</option>
              <option value="3">CINEMATOGRAPHY & PHOTOGRAPHY</option>
              <option value="3">LITERATURE</option>
              <option value="3">FASHION</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id="cars"
              className="browser-default custom-select"
              onChange={ClusterHandler}
              value={Cluster}
            >
              <optgroup label="PLASTIC ARTS">
                <option defaultValue>Select cluster</option>
                <option value="Illustrators">Illustrators</option>
                <option value="Painters">Painters</option>
                <option value="Sculptors">Sculptors</option>
              </optgroup>
              <optgroup label="MUSIC & DANCE">
                <option value="Singing">Singing</option>
                <option value="Dancing">Dancing</option>
                <option value="Instruments">Instruments</option>
                <option value="Composing">Composing</option>
              </optgroup>
              <optgroup label="FASHION">
                <option value="mercedes">Design</option>
              </optgroup>
              <optgroup label="ACTING & DRAMA">
                <option value="mercedes">Stage Acting</option>
                <option value="Film Acting">Film Acting</option>
                <option value="Comedy">Comedy</option>
              </optgroup>
              <optgroup label="CINEMATOGRAPHY & PHOTOGRAPHY">
                <option value="Photography">Photography</option>
                <option value="Filming">Filming</option>
                <option value="Animation">Animation</option>
              </optgroup>
              <optgroup label="LITERATURE">
                <option value="Writing">Writing</option>
                <option value="Poetry">Poetry</option>
              </optgroup>
            </select>
          </div>

          <div>
            <MDBInput
              id="typeText"
              type="password"
              placeholder="Password"
              onChange={PasswordHandler}
              value={Password}
            />
          </div>
          <div>
            <MDBInput
              id="typeText"
              type="password"
              placeholder="Confirm password"
              onChange={ConfirmPasswordHandler}
              value={ConfirmPassword}
            />
          </div>

          <div>
            <MDBFile
              label="RDB Certificate"
              id="customFile"
              onChange={CustomFileHandler}
            />
          </div>
          <div>
            <MDBFile
              label="upload your logo"
              id="customFile"
              onChange={CustomLogoHandler}
            />
          </div>
          <div>
            <Button
              name={loading ? "loading..." : `Sign up`}
              onClick={submitHandler}
            />
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <Link to="/Login">
                <span style={{ color: "#c5801a" }}>Sign in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
