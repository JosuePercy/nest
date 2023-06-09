import axios from "axios";

export class PokeApiAdapter {
  private readonly axios = axios;
  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    return data;
  }
  async post(url: string, data: any) {
    // peticion post
    return;
  }
  async patch(url: string, data: any) {
    // peticion patch
    return;
  }
  async delete(url: string) {
    // peticion delete
    return;
  }
}
