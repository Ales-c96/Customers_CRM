import api from "../lib/axios.js";

export default {
  getCustomers() {
    return api.get("/customers");
  },
  getCustomersByID(id) {
    return api.get(`/customers/${id}`);
  },
  postCustomers(data) {
    return api.post("/customers", data);
  },
};
