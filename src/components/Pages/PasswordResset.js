import React from "react";
import Style from "./RestPassward.module.css";
function PasswordResset() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <h3>
                  <i className="fa fa-lock fa-4x" />
                </h3>
                <h2 className="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div className="panel-body">
                  <form
                    id="register-form"
                    role="form"
                    autoComplete="off"
                    className="form"
                    method="post"
                  >
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-envelope color-blue" />
                        </span>
                        <input
                          id="email"
                          name="email"
                          placeholder="email address"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        name="recover-submit"
                        className="btn btn-lg btn-primary btn-block"
                        defaultValue="Reset Password"
                        type="submit"
                      />
                    </div>
                    <input
                      type="hidden"
                      className="hide"
                      name="token"
                      id="token"
                      defaultValue
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordResset;
