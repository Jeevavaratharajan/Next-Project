const { AxiosApi } = require("@/axios")
const { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT_BY_ID, DELETE_PRODUCT} = require("@/helper");
const { data } = require("autoprefixer");

const ProductApi =  {
    create : async(data)=>{
        return await AxiosApi.post(CREATE_PRODUCT, data);
    },

    getAll : async()=>{
        return await AxiosApi.get(GET_PRODUCTS);
    },
    getById : async(id)=>{
        return await AxiosApi.get(`${GET_PRODUCT_BY_ID}/${id}`);
    },
    delete : async(id)=>{
        return await AxiosApi.delete(`${DELETE_PRODUCT}/${id}`);
    }
}
export default ProductApi;  