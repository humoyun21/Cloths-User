import Card from "../../components/ui/product-card";
import { Container } from "@containers";
import useProductStore from "../../store/products";
import { useEffect, useState } from "react";
const index = () => {
  const {getLikedProducts} = useProductStore()
  const [data, setData] = useState([])
  const [liked, setLiked]:any = useState([])
  const getLiked = async () => {
    const response:any = await getLikedProducts()
    console.log(response);
    setLiked(response.data.products.map((item:any) => item.product_id))
    setData(response.data.products)
  }
  useEffect(()=> {
    getLiked()
  }, [])
  return (
    <>
      <section className="pt-[50px] pb-[60px]">
        <Container>
          <p className="text-[35px] font-semibold mb-5">Liked products</p>
          <div className="grid gap-x-3 justify-center grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-y-10 lg:grid-cols-4">
          {
            data?.map((item, index) => {
              return <Card liked={liked} key={index} data={item} />;
            })
          }
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
