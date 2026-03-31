import { AxiosApi } from "@/axios";

const EnquiryApi = {
  send: async (data) => AxiosApi.post("/enquiry/enquiry", data),
};

export default EnquiryApi;
