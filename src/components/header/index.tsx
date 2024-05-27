import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import Logo from "../../assets/logo.svg";
import { Button } from "@mui/material";
const index = () => {
  return (
    <header>
      <Container>
        <nav className="flex items-center justify-between gap-x-20 h-[80px]">
          <div>
            <NavLink to="/">
         <h1 className="text-green-400 ">Cloths</h1>
            </NavLink>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search products"
              className="w-full ring-1 ring-[#ACA9AF] px-[10px] rounded-sm h-[40px] focus:ring-2 outline-none duration-150 focus:ring-[#000000]"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button sx={{ display: "flex", gap: "7px", padding: "10px" }}>
              <LoginOutlinedIcon className="w-[30px] h-[30px] text-[#111111]" />
              <span className="text-[#04BEEC] capitalize font-medium">
                Login
              </span>
            </Button>
            <Button sx={{ display: "flex", gap: "7px", padding: "10px" }}>
              <FavoriteBorderOutlinedIcon className="w-[30px] h-[30px] text-[#0c0d0d]" />
              <span className="text-[#04BEEC] capitalize font-medium">
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
