import api from "../lib/axios.js";

export default {
  getCustomers() {
    return api.get("/customers");
  },
  postCustomers(data) {
    return api.post("/customers", data);
  },
};
