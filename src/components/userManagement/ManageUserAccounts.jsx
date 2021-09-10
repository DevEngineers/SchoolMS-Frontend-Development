import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import "../../styles/usersStyles/Users.css";
import UserService from "../../services/UserService";
import {toast, ToastContainer} from "material-react-toastify";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

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

function ManageUserAccounts() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteResultObj, setDeleteResultObj] = useState("");

  useEffect(() => {
	fetchUsers().then();
  }, []);

  async function fetchUsers() {
	await UserService.getUsers()
	  .then(users => {
		setUsers(users);
	  })
	  .catch((err) => {
		console.error(err);
	  });
  }

  /**
   * handler to open the alter dialog box and setting up the
   * relevant result that we going to remove in deleteResultObj state variable
   */
  const handleClickOpen = (user) => {
	setOpen(true);
	setDeleteResultObj(user);
  };

  /**
   * handler to close the alter dialog box
   */
  const handleClose = () => {
	setOpen(false);
  };


  const restPassword = (user) => {
	user.password = '1234567890';
	UserService.updateUser(user._id, user)
	  .then(response => {
		if (response.status === 200) {
		  toast.success(`User Password Reset Successfully`, options);
		} else {
		  throw Error("Something went wrong!! Try again.");
		}
	  })
	  .catch((error) => {
		toast.error(error.message, options);
	  });
  }

  const changeStatus = (user) => {
	if (user.status === 'Active') {
	  user.status = 'Inactive'
	} else if (user.status === 'Inactive') {
	  user.status = 'Active'
	}

	UserService.updateUser(user._id, user)
	  .then(response => {
		if (response.status === 200) {
		  toast.success(`User Status Changed`, options);
		} else {
		  throw Error("Something went wrong!! Try again.");
		}
	  })
	  .catch((error) => {
		toast.error(error.message, options);
	  });
  }

  const removeUser = () => {
	UserService.removeUser(deleteResultObj._id)
	  .then(response => {
		if (response.status === 200) {
		  handleClose();
		  toast.success(`User Password Reset Successfully`, options);
		} else {
		  throw Error("Something went wrong!! Try again.");
		}
	  })
	  .catch((error) => {
		handleClose();
		toast.error(error.message, options);
	  });
  }


  return (
	<div>
	  <ToastContainer/>
	  <div>
		<div className={"box"}>
		  <label className={"custom-underline"}>USER ACCOUNTS</label>
		</div>
	  </div>
	  <div id={"tblDiv"}>
		<table id={"styled-table"}>
		  <thead>
		  <tr>
			<td className={"thUData"}>Username</td>
			<td className={"thUData"}>Email</td>
			<td className={"thUData"}>School Branch</td>
			<td className={"thUData"}>Account Type</td>
			<td className={"thUData"}>Status</td>
			<td className={"thUDataBtn"}>Action</td>
		  </tr>
		  </thead>
		  <tbody>
		  {users.map((user) => (
			<tr key={user._id}>
			  <td className={"tdUData"}>{user.username}</td>
			  <td className={"tdUData"}>{user.email}</td>
			  <td className={"tdUData"}>{user.branch.branchName}</td>
			  <td className={"tdUData"}>{user.userType}</td>
			  <td className={"tdUData"}>{user.status}</td>
			  <td className={"tdUDataBtn"}>
				<Button variant="contained" color="primary" onClick={() => restPassword(user)}>
				  Reset Password
				</Button>
				&nbsp;&nbsp;
				<Button variant="contained" color="primary" onClick={() => changeStatus(user)} style={{width:'30%'}}>
				  {user.status === 'Inactive'?'Activate ':'Deactivate'}
				</Button>
				&nbsp;&nbsp;
				<Button variant="contained" color="secondary" onClick={() => handleClickOpen(user)}>
				  Remove
				</Button>
			  </td>
			</tr>
		  ))}
		  </tbody>
		</table>
	  </div>
	  <Dialog
		open={open}
		onClose={handleClose}
		aria-labelledby="form-dialog-title"
	  >
		<DialogTitle id="form-dialog-title">Alert</DialogTitle>
		<DialogContent>
		  <DialogContentText>
			Are you sure to remove this user
		  </DialogContentText>
		</DialogContent>
		<DialogActions>
		  <Button
			onClick={handleClose}
			color="primary"
			style={{fontWeight: "bold"}}
		  >
			Cancel
		  </Button>
		  <Button
			onClick={removeUser}
			color="secondary"
			style={{fontWeight: "bold"}}
		  >
			Proceed
		  </Button>
		</DialogActions>
	  </Dialog>
	</div>
  );
}

export default ManageUserAccounts;
