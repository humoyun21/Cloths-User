export interface data {
    page: number
    limit: number
    name?: string
}

export interface Request {
    get_products: (data: data) => any
    get_product: (id:string) => any
    like_product: (id:string) => any
    get_liked_products: () => any
}

export interface ProductStore {
    data:any[],
    getProducts: (data: data) => void
    getProduct: (id:string) => void
    likeProduct: (id:string) => void
    getLikedProducts: () => void
}