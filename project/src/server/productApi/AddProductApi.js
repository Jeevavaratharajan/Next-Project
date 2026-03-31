import { AxiosApi } from "@/axios";
import { PROPERTY_URL } from "@/helper";

const ProductApi = {
  create: async (data) => AxiosApi.post(PROPERTY_URL, data),
  getAll: async (params = {}) => AxiosApi.get(PROPERTY_URL, { params }),
  getById: async (id) => AxiosApi.get(`${PROPERTY_URL}/${id}`),
  update: async ({ id, data }) => AxiosApi.patch(`${PROPERTY_URL}/${id}`, data),
  delete: async (id) => AxiosApi.delete(`${PROPERTY_URL}/${id}`),
};

export default ProductApi;
