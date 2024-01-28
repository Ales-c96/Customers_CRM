import api from "../lib/axios.js";

export default {
  getCustomers() {
    // Gets all the customers from the bd
    return api.get("/customers");
  },
  getCustomersByID(id) {
    //Obtain a specific customer by his ID
    return api.get(`/customers/${id}`);
  },
  postCustomers(data) {
    //Upload a customer on the bd
    return api.post("/customers", data);
  },
  editCustomer(id, data) {
    //Upload a customer on the bd
    return api.patch(`/customers/${id}`, data);
  },
  changeState(id, state) {
    //Changes the state of a customer
    return api.patch(`/customers/${id}`, state);
  },
  deleteCustomer(id) {
    return api.delete(`/customers/${id}`);

  }
};
