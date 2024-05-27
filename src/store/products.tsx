import { create } from "zustand";
import { ProductStore } from "../interface/products";
import { Products } from "@service";
const useProductStore = create<ProductStore>(() => ({
  data: [],
  getProducts: async (params) => {
    try {
      const response = await Products.get_products(params);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  getProduct: async (id) => {
    try {
      const response = await Products.get_product(id);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}));

export default useProductStore;
