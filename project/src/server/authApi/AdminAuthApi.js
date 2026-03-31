import { AxiosApi } from "@/axios";
import { ADMIN_URL } from "@/helper";

const AdminAuthApi = {
  login: async (data) => AxiosApi.post(`${ADMIN_URL}/login`, data),
  me: async () => AxiosApi.get(`${ADMIN_URL}/me`),
  logout: async () => AxiosApi.post(`${ADMIN_URL}/logout`),
};

export default AdminAuthApi;
