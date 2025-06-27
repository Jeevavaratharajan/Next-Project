const { AxiosApi } = require("@/axios")
const { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT_BY_NAME } = require("@/helper");
const { data } = require("autoprefixer");

const ProductApi =  {
    create : async(data)=>{
        return await AxiosApi.post(CREATE_PRODUCT, data);
    },

    getAll : async()=>{
        return await AxiosApi.get(GET_PRODUCTS,data);
    },
    getByName : async(data)=>{
        return await AxiosApi.get(`${GET_PRODUCT_BY_NAME},${data.name}`);
    },
    delete : async(data)=>{
        return await AxiosApi.delete(`${GET_PRODUCT_BY_NAME}/${data.name}`);
    }
}
export default ProductApi;