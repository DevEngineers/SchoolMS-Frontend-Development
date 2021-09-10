import React, { useEffect, useState } from "react";
import { Container, IconButton, TextField } from "@material-ui/core";
import "../../styles/usersStyles/Users.css";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import UserService from "../../services/UserService";
import { toast, ToastContainer } from "material-react-toastify";
import { useHistory } from "react-router-dom";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

//Toast Message Configuration
const options = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
};

function UserProfile() {
  const history = useHistory();
  const [userid] = useState("6134acbdabd1441eac4f3760");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [branch, setBranch] = useState("");
  const [enableEdit, setEnableEdit] = useState(false);

  useEffect(() => {
    fetchUser().then();
  }, []);

  /**
   * fetching exam timetable form database
   */
  async function fetchUser() {
    await UserService.getUserByID(userid)
      .then((user) => {
        setUsername(user.username);
        setEmail(user.email);
        setBranch(user.branch.branchName);
        setUserType(user.userType);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function enableEditFunction(value) {
    setEnableEdit(value);
  }

  function updateUserProfile(event, changeType) {
    event.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
    };

    UserService.updateUserProfile(userid, user)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`User ${changeType} Updated Successfully`, options);
          setTimeout(() => {
            history.push("/userProfile");
          }, 3000);
        } else {
          throw Error("Something went wrong!! Try again.");
        }
      })
      .catch((error) => {
        toast.error(error.message, options);
      });
  }

  return (
    <div>
      <ToastContainer />
      <div>
        <div className={"box"}>
          <label className={"custom-underline"}>USER PROFILE</label>
        </div>
      </div>
      <div id={"largeUserPDiv"}>
        <form>
          {enableEdit === false ? (
            <div id={"uPEdit"}>
              <IconButton
                aria-label="edit"
                style={{ backgroundColor: "transparent" }}
                onClick={() => enableEditFunction(true)}
              >
                <EditIcon />
              </IconButton>
            </div>
          ) : (
            <div id={"uPEdit"}>
              <IconButton
                aria-label="edit"
                style={{ backgroundColor: "transparent" }}
                onClick={() => enableEditFunction(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>
          )}
          <Container id={"form-style-userProfile"}>
            <div id={"userLabelEDiv"}>
              <label className={"UpLabel"}>Username</label>
              <label className={"UpLabel"}>Email</label>
              <label className={"UpLabel"}>Branch</label>
              <label className={"UpLabel"}>Account Type</label>
            </div>
            <div id={"userPro"}>
              {enableEdit === true ? (
                <div>
                  <div className={"textFieldUp"}>
                    <TextField
                      type={"text"}
                      className={"userSize"}
                      name={"username"}
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                  <div className={"textFieldUp"}>
                    <TextField
                      type={"text"}
                      className={"userSize"}
                      name={"email"}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <label className={"upValLabel"}>{branch}</label>
                  <br />
                  <label className={"upValLabel"}>{userType}</label>
                  <div id={"uPEditBtn"}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ backgroundColor: "#36988c" }}
                      onClick={(event) =>
                        updateUserProfile(event, "Username and Email")
                      }
                    >
                      Update Profile
                    </Button>
                  </div>
                </div>
              ) : (
                <div id={"viewDeUpDiv"}>
                  <label className={"upVal2Label"}>{username}</label>
                  <label className={"upVal2Label"}>{email}</label>
                  <label className={"upVal2Label"}>{branch}</label>
                  <label className={"upVal2Label"}>{userType}</label>
                </div>
              )}
            </div>
          </Container>
        </form>
      </div>
      <div id={"passwordHDiv"}>
        <label id={"passHLabel"}>Change Password</label>
      </div>
      <div id={"largeUserPBDiv"}>
        <form>
          <Container id={"form-style-user"}>
            <div id={"userProLabelDiv"}>
              <label className={"UpPLabel"}>New Password</label>
              <label className={"UpPLabel"}>Re-enter Password</label>
            </div>
            <div id={"userPro"}>
              <div className={"textFieldUp"}>
                <TextField
                  type={"password"}
                  className={"userSize"}
                  name={"password"}
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
              <div className={"textFieldUp"}>
                <TextField
                  type={"password"}
                  className={"userSize"}
                  name={"rePassword"}
                />
              </div>
              <div id={"uPEditPBtn"}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#36988c" }}
                  onClick={(event) => updateUserProfile(event, "Password")}
                >
                  Update Password
                </Button>
              </div>
            </div>
          </Container>
        </form>
      </div>
      <br />
    </div>
  );
}

export default UserProfile;
