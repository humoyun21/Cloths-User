import request from '../config'
import { Request } from '../../interface/products'

const products: Request = {
    get_products: (params) => request.get('/products', {params}),
    get_product: (id) => request.get(`/product/${id}`)
}

export default products;
