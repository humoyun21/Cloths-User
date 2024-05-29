import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalProps } from "@global-interface";
import { auth } from "@service";
import Notification from "@notification";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: 1.3,
  boxShadow: 24,
  p: 3,
  outline: "none",
};

interface IModalProp extends ModalProps {
  email: string;
}

const index = ({ open, handleClose, email }: IModalProp) => {
  const [otp, setOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const navigate = useNavigate();
  useEffect(()=> {
    let timer = null;
    if (open) {
      timer = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    }
  }, [open])
  useEffect(() => {
    if (secondsLeft === 0) {
      handleClose();
    }
  }, [secondsLeft, handleClose])
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await auth.auth_verify(email, otp);
      if (response.status === 200) {
        navigate("/signin");
        Notification({
          title: "Successfully registrate",
          type: "success",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-deskription"
      >
        <Box sx={style}>
          <Typography
            id='keep-mounted-modal-title'
            className="text-center"
            variant="h6"
            component="h2"
          >
            Code
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="fullWidth"
              label="Code"
              sx={{ marginY: "20px" }}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Typography>
                {`Time left: ${secondsLeft} seconds`}
              </Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Tasdiqlash
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default index;
