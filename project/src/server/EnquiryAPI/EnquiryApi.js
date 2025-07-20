const { AxiosApi } = require("@/axios")
import { CREATE_ENQUIRY } from "@/helper"

const EnquiryAPI={
    create : async(data)=>{
        return await AxiosApi.post(CREATE_ENQUIRY,data)
    }
}
export default EnquiryAPI;