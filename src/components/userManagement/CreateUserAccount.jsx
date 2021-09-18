import React from "react";
import Select from "@material-ui/core/Select";
import {Container, MenuItem, TextField} from "@material-ui/core";
import "../../styles/usersStyles/Users.css";
import {toast, ToastContainer} from "material-react-toastify";
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
						checkMail: false,
						checkPassword: false,
						checkRePassword: false
				};
		}

		componentDidMount() {
				BranchService.getBranches()
				.then((res) => {
						this.setState({sBranch: res});
				})
				.catch((err) => {
						console.error(err);
				});
		}

		/**
		 * this function is to capture data in the input fields
		 */
		onChange(event) {
				const {name, value} = event.target;
				this.setState({[name]: value});
		}

		/**
		 * this function is to capture data and validate email input
		 */
		onChangeEmail(event) {
				const {name, value} = event.target;
				this.setState({[name]: value});
				const emailRegex = /\S+@\S+\.\S+/;
				if (emailRegex.test(value)) {
						this.setState({checkMail: false})
				} else if (value === '') {
						this.setState({checkMail: false})
				} else {
						this.setState({checkMail: true})
				}
		}

		/**
		 * this function is to capture password or re-enter password and validate password
		 * and check the password enter match with re-enter password
		 */
		onChangePassword(event, type) {
				const {name, value} = event.target;

				if (type === 'password') {
						if (value.match(/^.{8,32}$/)) {
								this.setState({checkPassword: false})
						} else if(value === ''){
								this.setState({checkPassword: false})
						}else {
								this.setState({checkPassword: true})
						}
				} else if (type === 'rePassword') {
						if (value.match(this.state.password)) {
								this.setState({checkRePassword: false})
						} else if(value === ''){
								this.setState({checkRePassword: false})
						}else {
								this.setState({checkRePassword: true})
						}
				}

				this.setState({[name]: value});
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
							<ToastContainer/>
							<div>
									<div className={"box"}>
											<label className={"custom-underline"}>CREATE USER ACCOUNTS</label>
									</div>
							</div>
							<div id={"largeUserDiv"}>
									<form>
											<Container id={"form-style-user"}>
													<div id={"userSelectOpt"}>
															<div className={"textFieldUAc"}>
																	<label className={"classULabel"} style={{marginRight: '80px'}}>Branch</label>
																	<Select
																		labelId="demo-simple-select-label"
																		id="demo-simple-select"
																		name={"smBranch"}
																		value={this.state.smBranch}
																		className={"fieldSize"}
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
																						<span className={"selectUName"}>{branch.branchName}</span>
																				</MenuItem>
																			))}
																	</Select>
															</div>
															<div className={"textFieldUAc"}>
																	<label className={"classULabel"} style={{marginRight: '58px'}}>Username</label>
																	<TextField
																		type={"text"}
																		className={"fieldSize"}
																		name={"username"}
																		value={this.state.username}
																		onChange={(event) => this.onChange(event)}
																	/>
															</div>
															<div className={"textFieldUAc"}>
																	<label className={"classULabel"} style={{marginRight: '90px'}}>Email</label>
																	<TextField
																		type={"text"}
																		className={"fieldSize"}
																		name={"email"}
																		value={this.state.email}
																		onChange={(event) => this.onChangeEmail(event)}
																	/>
																	<br/>
																	{this.state.checkMail ? <span style={{fontSize: '12px', color: 'red'}}>Please enter a valid email!</span> : null}
															</div>
															<div className={"textFieldUAc"}>
																	<label className={"classULabel"} style={{marginRight: '36px'}}>Account Type</label>
																	<Select
																		labelId="demo-simple-select-label"
																		id="demo-simple-select"
																		name={"uType"}
																		value={this.state.uType}
																		className={"fieldSize"}
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
																	<label className={"classULabel"} style={{marginRight: '64px'}}>Password</label>
																	<TextField
																		type={"password"}
																		className={"fieldSize"}
																		name={"password"}
																		value={this.state.password}
																		onChange={(event) => this.onChangePassword(event, 'password')}
																	/>
																	<br/>
																	{this.state.checkPassword ? <span style={{fontSize: '12px', color: 'red'}}>Password must be 8 characters long</span> : null}
															</div>
															<div className={"textFieldUAc"}>
																	<label className={"classULabel"}>Renter-Password</label>
																	<TextField
																		type={"password"}
																		className={"fieldSize"}
																		name={"rePassword"}
																		value={this.state.rePassword}
																		onChange={(event) => this.onChangePassword(event, 'rePassword')}
																	/>
																	<br/>
																	{this.state.checkRePassword ?
																		<span style={{fontSize: '12px', color: 'red'}}>Password Doesn't match</span> : null}
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
