import { Products } from "@sections";
import { Carusel } from "../../components/corusel";
import { Container } from "@mui/material";
const index = () => {
  return (
    <>
     <div>
      <Container>
     <Carusel/>
     </Container>
     </div>
   
    
      <Products />
    </>
  );
};

export default index;
