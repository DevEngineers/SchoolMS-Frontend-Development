import React from "react";
import Select from "@material-ui/core/Select";
import { Container, MenuItem, TextField } from "@material-ui/core";
import "../../styles/usersStyles/Users.css";
import { toast, ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import UserService from "../../services/UserService";
import BranchService from "../../services/BranchService";

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

class CreateUserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smBranch: "",
      username: "",
      email: "",
      uType: "",
      password: "",
      rePassword: "",
      sBranch: [],
      userType: ["Administrative Staff", "Examination Staff"],
    };
  }

  componentDidMount() {
    BranchService.getBranches()
      .then((res) => {
        this.setState({ sBranch: res });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /**
   * this function is to capture data in the input fields
   */
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  restForm() {
    this.setState({
      smBranch: "",
      username: "",
      email: "",
      uType: "",
      password: "",
      rePassword: "",
    });
  }

  createUserAccount(event) {
    event.preventDefault();
    let user = {
      branch: this.state.smBranch,
      username: this.state.username,
      email: this.state.email,
      userType: this.state.uType,
      password: this.state.password,
    };

    if (user.branch === "") {
      toast.warn("Select the Branch", options);
    } else if (user.username === "") {
      toast.warn("Enter the username", options);
    } else if (user.email === "") {
      toast.warn("Enter user email", options);
    } else if (user.userType === "") {
      toast.warn("Select the user type", options);
    } else if (user.password === "") {
      toast.warn("Enter user password", options);
    } else {
      UserService.storeUser(user)
        .then((res) => {
          if (res.status === 200) {
            toast.success("User Account Created Successfully", options);
            setTimeout(() => {
              this.props.history.push("/manageUsers");
            }, 3000);
          } else {
            throw Error("Something went wrong!! Try again.");
          }
        })
        .catch((error) => {
          toast.error(error.message, options);
        });
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div>
          <div className={"box"}>
            <label className={"custom-underline"}>CREATE USER ACCOUNTS</label>
          </div>
        </div>
        <div id={"largeUserDiv"}>
          <form>
            <Container id={"form-style-user"}>
              <div id={"userLabelEDiv"}>
                <label className={"classULabel"}>Branch</label>
                <label className={"classULabel"}>Username</label>
                <label className={"classULabel"}>Email</label>
                <label className={"classULabel"}>Account Type</label>
                <label className={"classULabel"}>Password</label>
                <label className={"classULabel"}>Renter-Password</label>
              </div>
              <div id={"userSelectOpt"}>
                <div className={"textFieldUAc"}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={"smBranch"}
                    value={this.state.smBranch}
                    className={"userSize"}
                    onChange={(event) => this.onChange(event)}
                    displayEmpty
                  >
                    <MenuItem value={""}>
                      <span className={"selectUName"}>Select Branch</span>
                    </MenuItem>
                    {this.state.sBranch.map((branch) => (
                      <MenuItem
                        key={branch._id}
                        value={branch._id}
                        className={"selectUName"}
                      >
                        <span className={"selectUName"}>
                          {branch.branchName}
                        </span>
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className={"textFieldUAc"}>
                  <TextField
                    type={"text"}
                    className={"userSize"}
                    name={"username"}
                    value={this.state.username}
                    onChange={(event) => this.onChange(event)}
                  />
                </div>
                <div className={"textFieldUAc"}>
                  <TextField
                    type={"text"}
                    className={"userSize"}
                    name={"email"}
                    value={this.state.email}
                    onChange={(event) => this.onChange(event)}
                  />
                </div>
                <div className={"textFieldUAc"}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={"uType"}
                    value={this.state.uType}
                    className={"userSize"}
                    onChange={(event) => this.onChange(event)}
                    displayEmpty
                  >
                    <MenuItem value={""}>
                      <span className={"selectUName"}>Select Account Type</span>
                    </MenuItem>
                    {this.state.userType.map((type) => (
                      <MenuItem key={type} value={type}>
                        <span className={"selectUName"}>{type}</span>
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className={"textFieldUAc"}>
                  <TextField
                    type={"password"}
                    className={"userSize"}
                    name={"password"}
                    value={this.state.password}
                    onChange={(event) => this.onChange(event)}
                  />
                </div>
                <div className={"textFieldUAc"}>
                  <TextField
                    type={"password"}
                    className={"userSize"}
                    name={"rePassword"}
                    value={this.state.rePassword}
                    onChange={(event) => this.onChange(event)}
                  />
                </div>
              </div>
            </Container>
            <div className={"btnEDiv"}>
              <input
                type={"submit"}
                id={"submitUBtn"}
                value={"Store Results"}
                onClick={this.createUserAccount.bind(this)}
              />
              <input
                type={"reset"}
                id={"restUBtn"}
                value={"Reset"}
                onClick={this.restForm.bind(this)}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUserAccount;
