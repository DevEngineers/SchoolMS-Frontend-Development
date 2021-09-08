const CLASS_TYPE_BASE_URI = "http://localhost:5000/classType";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ClassTypeService {
  /**
   *  This service function is to Get All Class Types from backend
   */
  async getClassTypes() {
    return await fetch(CLASS_TYPE_BASE_URI, {
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

export default new ClassTypeService();
