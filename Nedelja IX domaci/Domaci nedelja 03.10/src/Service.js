import axios from "axios"

export const getAllProducts = () => axios.get(`http://localhost:3020/product-list`)

export const addProduct = (product) => axios.post(`http://localhost:3020/product-list`,product)