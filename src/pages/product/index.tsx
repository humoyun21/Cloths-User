import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import useProductStore from "../../store/products";
import { useEffect, useState } from "react";
import { Container } from "@containers";
import { Button, CardMedia, IconButton } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const index = () => {
  const { getProduct } = useProductStore();
  const { id }: any = useParams();
  const [data, setData]: any = useState([]);
  const [number, setNumber]: any = useState(1);
  const [cost, setCost]: any = useState();
  const response = async () => {
    const response: any = await getProduct(id);
    setData(response.data);
    setCost(
      Math.round(
        response?.data?.cost -
          (response?.data?.cost / 100) * response?.data?.discount
      )
    );
  };
  const add = () => {
    setNumber(number + 1);
    setCost(cost + Math.round(data?.cost - (data?.cost / 100) * data?.discount));
  };
  const remove = () => {
    setNumber(number - 1);
    setCost(cost - Math.round(data?.cost - (data?.cost / 100) * data?.discount));
  };
  useEffect(() => {
    response();
  }, []);
  return (
    <div className="py-[50px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <CardMedia
              sx={{
                height: 455,
                width: "100%",
                backgroundImage: `url(${data.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              component="img"
            />
          </div>
          <div className="w-[50%] px-3">
            <p className="text-[#04BEEC] font-semibold text-[35px] mb-3">
              {data.product_name}
            </p>
            <p className="text-[18px] border-b-[1px] border-b-[#9ca3afa0] pb-4 mb-8">
              {data.description}
            </p>
            <div className="flex mb-6 items-center gap-5">
              <div className="flex items-center gap-4 border-2 border-[#9ca3af74] p-1 rounded-md">
                <IconButton
                  onClick={remove}
                  color="primary"
                  disabled={number === 1}
                >
                  <RemoveOutlinedIcon />
                </IconButton>
                <span>{number}</span>
                <IconButton
                  onClick={add}
                  color="primary"
                  disabled={number === data.count}
                >
                  <AddOutlinedIcon />
                </IconButton>
              </div>
              <div>
                <p className="text-[#04BEEC] font-semibold text-[20px]">
                  Only {data.count} left
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-b-[#9ca3afa0] pb-4 mb-8">
              <p className="mb-1">Price:</p>
              <div className="flex items-center gap-7 mb-5">
                <p className="text-[20px] font-semibold">
                  {cost && cost.toLocaleString() + " $"}
                </p>
                {data.discount > 0 ? (
                  <p className="line-through text-[#646363d0]">
                    {data?.cost?.toLocaleString() + " $"}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <Button sx={{border: "2px solid #04BEEC", paddingLeft: "40px", paddingRight: '40px', display: "flex", gap: "8px"}}>
                  <span className="text-[#04BEEC] text-[20px] capitalize font-semibold">
                    Purchase
                  </span>
                  <ShoppingCartOutlinedIcon className="text-[#04BEEC]" />
                </Button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[20px] font-semibold">
                About the product:
              </p>
              <ul>
                <li>
                  <p className="text-[18px] mb-2">
                    <span className="text-[#04BEEC]">Made in: </span>
                    {data.made_in}
                  </p>
                </li>
                <li>
                  <p className="text-[18px] mb-2">
                    <span className="text-[#04BEEC]">Color: </span>
                    {data.color}
                  </p>
                </li>
                <li>
                  <p className="text-[18px] mb-2">
                    <span className="text-[#04BEEC]">Size: </span>
                    {data.size}
                  </p>
                </li>
                <li>
                  <p className="text-[18px] mb-2">
                    <span className="text-[#04BEEC]">Max age: </span>
                    {data.age_max}
                  </p>
                </li>
                <li>
                  <p className="text-[18px] mb-2">
                    <span className="text-[#04BEEC]">Max min: </span>
                    {data.age_min}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
