

import axios from "./Axios";

class StoreService {
  getAllCategories() {
    return axios.get("/categories");
  }

}

export default new StoreService();
