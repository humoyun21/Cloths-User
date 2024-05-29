import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "@containers";
import Logo from "../../assets/uzum_logo.png";
import { Button } from "@mui/material";
const index = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Container>
        <nav className="flex items-center justify-between gap-x-20 h-[80px]">
          <div>
            <NavLink to="/">
              <img className="w-[300px]" src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search products"
              className="w-full ring-1 ring-[#ACA9AF] px-[10px] rounded-sm h-[40px] focus:ring-2 outline-none duration-150 focus:ring-[#1976D2]"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/signin")}
              sx={{ display: "flex", gap: "7px", padding: "10px" }}
            >
              <LoginOutlinedIcon className="w-[30px] h-[30px] text-[#1976D2]" />
              <span className="text-[#1976D2] capitalize font-medium">
                Login
              </span>
            </Button>
            <Button onClick={() => navigate("/liked-products")} sx={{ display: "flex", gap: "7px", padding: "10px" }}>
              <FavoriteBorderOutlinedIcon className="w-[30px] h-[30px] text-[#1976D2]" />
              <span className="text-[#1976D2] capitalize font-medium">
                Liked
              </span>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default index;
