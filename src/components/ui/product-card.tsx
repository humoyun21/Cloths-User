import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from "react-router-dom";

export default function ActionAreCard({ data }: any) {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
      navigate(`/product/${id}`)
  }
  return (
    <>
    <Card sx={{ maxWidth: 255, position: "relative" }}>
      <CardActionArea onClick={() => handleClick(data.product_id)}>
        <CardMedia
          sx={{
            height: 255,
            width: "100%",
            backgroundImage: `url(${data.image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          component='img'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.product_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description.slice(0, 30)}...
          </Typography>
          <div className="mt-2">
            {data.discount > 0 ? (
              <p className="line-through text-[#646363d0]">{data.cost} $</p>
            ) : (
              <p>-</p>
            )}
            <p>
              {Math.round(data.cost - (data.cost / 100) * data.discount)} $
            </p>
          </div>
        </CardContent>
      </CardActionArea>
      <FavoriteBorderOutlinedIcon sx={{ position: "absolute", bottom: 15, right: 15, color: '#04BEEC', cursor: 'pointer' }} />
    </Card>
    </>
  );
}
