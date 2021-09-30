import React, {useEffect, useState} from "react";
import {Container, IconButton, TextField} from "@material-ui/core";
import "../../styles/usersStyles/Users.css";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import UserService from "../../services/UserService";
import {toast, ToastContainer} from "material-react-toastify";
import {useHistory} from "react-router-dom";

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
		const [userid] = useState(localStorage.getItem("userID"));
		const [email, setEmail] = useState("");
		const [username, setUsername] = useState("");
		const [password, setPassword] = useState("");
		const [rePassword, setRePassword] = useState("");
		const [userType, setUserType] = useState("");
		const [branch, setBranch] = useState("");
		const [enableEdit, setEnableEdit] = useState(false);
		const [checkMail, setCheckMail] = useState(false);
		const [checkPassword, setCheckPassword] = useState(false);
		const [checkRePassword, setCheckRePassword] = useState(false);

		useEffect(() => {
				if(localStorage.getItem('userToken') === null){
						history.push('/');
				}
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

		/**
		 * this function is to capture data and validate email input
		 */
		function onChangeEmail(value) {
				setEmail(value);
				const emailRegex = /\S+@\S+\.\S+/;
				if (emailRegex.test(value)) {
						setCheckMail(false)
				} else if (value === '') {
						setCheckMail(false)
				} else {
						setCheckMail(true)
				}
		}

		/**
		 * this function is to capture password or re-enter password and validate password
		 * and check the password enter match with re-enter password
		 */
		function onChangePassword(value, type) {
				if (type === 'password') {
						if (value.match(/^.{8,32}$/)) {
								setCheckPassword(false);
						} else if (value === '') {
								setCheckPassword(false);
						} else {
								setCheckPassword(true);
						}
				} else if (type === 'rePassword') {
						if (value.match(password)) {
								setCheckRePassword(false)
						} else if (value === '') {
								setCheckRePassword(false)
						} else {
								setCheckRePassword(true)
						}
				}

				if (type === 'password') {
						setPassword(value)
				} else if (type === 'rePassword') {
						setRePassword(value)
				}

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
										window.location.reload();
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
					<ToastContainer/>
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
													style={{backgroundColor: "transparent"}}
													onClick={() => enableEditFunction(true)}
												>
														<EditIcon/>
												</IconButton>
										</div>
									) : (
										<div id={"uPEdit"}>
												<IconButton
													aria-label="edit"
													style={{backgroundColor: "transparent"}}
													onClick={() => enableEditFunction(false)}
												>
														<CloseIcon/>
												</IconButton>
										</div>
									)}
									<Container id={"form-style-userProfile"}>
											<div id={"userPro"}>
													{enableEdit === true ? (
														<div>
																<div className={"textFieldUp"}>
																		<label className={"ULabel"}>Username</label>
																		<TextField
																			type={"text"}
																			className={"fieldSize"}
																			name={"username"}
																			value={username}
																			onChange={(event) => setUsername(event.target.value)}
																			style={{marginLeft:'25px'}}
																		/>
																</div>
																<div className={"textFieldUp"}>
																		<label className={"ULabel"}>Email</label>
																		<TextField
																			type={"text"}
																			className={"fieldSize"}
																			name={"email"}
																			value={email}
																			onChange={(event) => onChangeEmail(event.target.value)}
																			style={{marginLeft:'60px'}}
																		/>
																		<br/>
																		{checkMail ?
																			<span style={{
																					fontSize: '12px',
																					color: 'red',
																					marginLeft:'60px'
																			}}>Please enter a valid email!</span> : null}
																</div>
																<div className={"textFieldUp"}>
																		<label className={"ULabel"}>Branch</label>
																		<label className={"upValLabel"} style={{marginLeft:'50px'}}>{branch}</label>
																</div>
																<div className={"textFieldUp2"}>
																		<label className={"ULabel"}>Account Type</label>
																		<label className={"upValLabel"}>{userType}</label>
																</div>
																<div id={"uPEditBtn"}>
																		<Button
																			variant="contained"
																			color="secondary"
																			style={{backgroundColor: "#36988c"}}
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
																<div className={'viewProDataDiv'}>
																		<label className={"UpLabel"}>Username</label>
																		<label className={"upVal2Label"} style={{marginLeft: '25px'}}>{username}</label>
																</div>
																<div className={'viewProDataDiv'}>
																		<label className={"UpLabel"}>Email</label>
																		<label className={"upVal2Label"} style={{marginLeft: '60px'}}>{email}</label>
																</div>
																<div className={'viewProDataDiv'}>
																		<label className={"UpLabel"}>Branch</label>
																		<label className={"upVal2Label"} style={{marginLeft: '50px'}}>{branch}</label>
																</div>
																<div className={'viewProDataDiv'}>
																		<label className={"UpLabel"}>Account Type</label>
																		<label className={"upVal2Label"}>{userType}</label>
																</div>
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
											<div id={"userPro"}>
													<div className={"textFieldUp"}>
															<label className={"UpPLabel"}>New Password</label>
															<TextField
																type={"password"}
																className={"fieldSize"}
																name={"password"}
																onChange={(event) => onChangePassword(event.target.value, 'password')}
																value={password}
																style={{marginLeft:'30px'}}
															/>
															<br/>
															{checkPassword ?
																<span style={{
																		fontSize: '12px',
																		color: 'red',
																		marginLeft:'30px'
																}}>Password must be 8 characters long</span> : null}
													</div>
													<div className={"textFieldUp"}>
															<label className={"UpPLabel"}>Re-enter Password</label>
															<TextField
																type={"password"}
																className={"fieldSize"}
																name={"rePassword"}
																onChange={(event) => onChangePassword(event.target.value, 'rePassword')}
																value={rePassword}
															/>
															<br/>
															{checkRePassword ?
																<span style={{fontSize: '12px', color: 'red'}}>Password Doesn't match</span> : null}
													</div>
													<div id={"uPEditPBtn"}>
															<Button
																variant="contained"
																color="secondary"
																style={{backgroundColor: "#36988c"}}
																onClick={(event) => updateUserProfile(event, "Password")}
															>
																	Update Password
															</Button>
													</div>
											</div>
									</Container>
							</form>
					</div>
					<br/>
			</div>
		);
}

export default UserProfile;
