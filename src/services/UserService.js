const User_API_BASE_URI = "http://localhost:5000/users";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class UserService {
  /**
   *  This service function is to send user details to backend
   */
  async storeUser(User) {
    const bearer = "Bearer " + localStorage.getItem("userToken");
    return await fetch(User_API_BASE_URI, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: bearer,
      },
      body: JSON.stringify(User),
    })
      .then((response) => {
        return response;
      })
      .catch((reason) => {
        return reason;
      });
  }

  /**
   *  This service function is to Get All Users from backend
   */
  async getUsers() {
    return await fetch(User_API_BASE_URI, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((reason) => {
        return reason;
      });
  }

  /**
   *  This service function is to get a User from backend
   */
  async getUserByID(id) {
    return await fetch(User_API_BASE_URI + "/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  /**
   *  This service function is from user login
   */
  async userLogin(User) {
    return await fetch(User_API_BASE_URI + "/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: bearer,
      },
      body: JSON.stringify(User),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  /**
   *  This service function is to update stored User in backend
   */
  async updateUser(id, User) {
    const bearer = "Bearer " + localStorage.getItem("userToken");
    return await fetch(User_API_BASE_URI + "/" + id, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        Authorization: bearer,
      },
      body: JSON.stringify(User),
    })
      .then((response) => {
        return response;
      })
      .catch((reason) => {
        return reason;
      });
  }

  /**
   *  This service function is to Remove stored User in backend
   */
  async removeUser(id) {
    const bearer = "Bearer " + localStorage.getItem("userToken");
    return await fetch(User_API_BASE_URI + "/" + id, {
      headers: {
        /*'Authorization': bearer*/
      },
      method: "DELETE",
    })
      .then((response) => {
        return response;
      })
      .catch((reason) => {
        return reason;
      });
  }
}

export default new UserService();
