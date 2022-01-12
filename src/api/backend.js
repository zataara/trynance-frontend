import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3003";

class BackendApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${BackendApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (e) {
      console.error("API Error:", e.response);
      let message = e.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  
  static async login(data) {
    let res = await this.request(`auth/token`, data, 'post');
    return res.token;
  }

  static async register(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async getAssets(username) {
    let res = await this.request(`users/${username}/assets`);
    return res;
  }

  static async getTrades(username) {
    let res = await this.request(`users/${username}/trades`);
    return res;
  }

  static async postTrade(username, cfa, cf, cta, ct, dt) {
    let res = await this.request(`users/${username}/${cfa}/${cf}/${cta}/${ct}/${dt}`, {}, 'post');
    return res;
  }

  static async getFaves(username) {
    let res = await this.request(`users/${username}/faves`);
    return res;
  }

  static async postFave(username, fave) {
    let res = await this.request(`users/${username}/${fave}`, {}, 'post');
    return res;
  }
}

export default BackendApi;
