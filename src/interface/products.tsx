export interface data {
    page: number
    limit: number
    name?: string
}

export interface Request {
    get_products: (data: data) => any
    get_product: (id:string) => any
}

export interface ProductStore {
    data:any[],
    getProducts: (data: data) => void
    getProduct: (id:string) => void
}