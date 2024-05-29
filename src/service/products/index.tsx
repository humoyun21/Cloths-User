import request from '../config'
import { Request } from '../../interface/products'

const products: Request = {
    get_products: (params) => request.get('/products', {params}),
    get_product: (id) => request.get(`/product/${id}`),
    like_product: (id) => request.post(`/like/${id}`),
    get_liked_products: () => request.get(`/wishlist?page=1&limit=100`)
}

export default products;
