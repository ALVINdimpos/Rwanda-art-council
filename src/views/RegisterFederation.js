import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { registerFederation } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

const RegisterFederation = () => {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [image, setImage] = React.useState();
  // const dispatch = useDispatch();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
    // acceptedFiles.map((file) => {
    //   setImage(file);
    // });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log(image);

  const registerFed = (data) => {
    let loginData;
    if (data.logo && data.logo.length !== 0) {
      console.log(data);
      // const logourl = URL.createObjectURL(data.logo[0]);
      // console.log(logourl);
      // const logo = new FileReader();
      // logo.readAsDataURL(logourl);
      // // logo.append("logo", data.logo);
      // // logo.append("Content-Type", "image/*");
      // loginData = { ...data, logo: logo };
      // console.log(loginData);
      // dispatch(registerFederation(loginData));
    }
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Register a new federation
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit(registerFed)}>
              {/* <FormGroup>
                <Label for="federationName">Federation name</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="federationName"
                  name="federationName"
                  placeholder="Name of the federation"
                  type="text"
                  {...register("fed_name", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Federation name is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="federationLeaderFirstName">
                  Federation leader first name
                </Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="federationLeaderFirstName"
                  name="federationLeaderFirstName"
                  placeholder="Federation leader first name"
                  type="text"
                  {...register("fname", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Federation name is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="federationLeaderLastName">
                  Federation leader last name
                </Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="federationLeaderLastName"
                  name="federationLeaderLastName"
                  placeholder="Federation leader last name"
                  type="text"
                  {...register("lname", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Federation name is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone number</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="text"
                  {...register("phone", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Federation name is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="emailAddress"
                  name="email"
                  placeholder="Email Address"
                  type="text"
                  {...register("email", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Email is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="tinNumber">Tin Number</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="tinNumber"
                  name="tinNumber"
                  placeholder="Tin Number"
                  type="number"
                  {...register("tinNumber", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Email is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="numberOfUnions">Number of unions</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="numberOfUnions"
                  name="numberOfUnions"
                  placeholder="Number of unions under the federation"
                  type="number"
                  {...register("union", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Number Of unions is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="description">Decription</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="description"
                  name="description"
                  placeholder="Enter description of the federation"
                  type="textarea"
                  {...register("description", { required: true })}
                />
                {errors.federationName && (
                  <p style={{ color: "red" }}>Description is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <div className={Style.carddetails}>
                  <input
                    style={{
                      width: "100%",
                      padding: "5px 10px",
                      borderColor: "whitesmoke",
                      borderWidth: "1px",
                      borderRadius: "5px",
                    }}
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    type={passwordShown ? "text" : "password"}
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <span>
                    <small
                      className="fa fa-eye-slash passcode"
                      onClick={togglePassword}
                    />
                  </span>
                </div>
                {errors.federationName && (
                  <p style={{ color: "red" }}>Password is required</p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <div className={Style.carddetails}>
                  <input
                    style={{
                      width: "100%",
                      padding: "5px 10px",
                      borderColor: "whitesmoke",
                      borderWidth: "1px",
                      borderRadius: "5px",
                    }}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    type={passwordShown ? "text" : "password"}
                    {...register("password_confirmation", { required: true })}
                  />
                  <span>
                    <small
                      className="fa fa-eye-slash passcode"
                      onClick={togglePassword}
                    />
                  </span>
                </div>
                {errors.federationName && (
                  <p style={{ color: "red" }}>confirm your Password</p>
                )}
              </FormGroup> */}
              <FormGroup {...getRootProps}>
                <Label for="imageFile">Upload image</Label>
                <input
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    borderColor: "whitesmoke",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  {...getInputProps()}
                  // {...register("logo", { required: true })}
                />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
                {errors.federationName && (
                  <p style={{ color: "red" }}>Image is required</p>
                )}
                <FormText>
                  To Upload an image of your federation's logo or headquartes
                </FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterFederation;
