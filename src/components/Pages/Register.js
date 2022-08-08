import React from "react";
import NavBar from "../NavBar/Index";
import Style from "./RegisterStyle.module.css";
import Button from "../Button/Index";
import { MDBIcon } from "mdbreact";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBFile } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
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
  const [CustomFile, SetCustomFile] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    ConfirmPassword(e.target.value);
  };
  const CustomFileHandler = (e) => {
    SetCustomFile(e.target.value);
  };
  useEffect(() => {
  fetch(``)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
   }, []);
  console.log(CustomFile);
  return (
    <>
      <NavBar />
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
              class="browser-default custom-select"
              onChange={CategoryHandler}
              value={Category}
            >
              <option selected>Select category</option>
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
              class="browser-default custom-select"
              onChange={ClusterHandler}
              value={Cluster}
            >
              <optgroup label="PLASTIC ARTS">
                <option selected>Select cluster</option>
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
              label="Upload file"
              id="customFile"
              onChange={CustomFileHandler}
              value={CustomFile}
            />
          </div>
          <div>
            {" "}
            <Button name="Sign up" />
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
    </>
  );
}

export default Index;
