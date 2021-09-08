const BRANCH_BASE_URI = "http://localhost:5000/branch";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class BranchService {
  /**
   *  This service function is to Get All branches from backend
   */
  async getBranches() {
    return await fetch(BRANCH_BASE_URI, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((reason) => {
        return reason;
      });
  }
}

export default new BranchService();
