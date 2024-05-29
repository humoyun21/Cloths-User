import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInValidationSchema } from "@validation";
import { Signin } from "@auth-interface";
import { setDataToCookie } from "@data-service";
// import { SignInModal } from "../../components/modals";
import { auth } from "@service";
import { useNavigate } from "react-router-dom";
import Notification from "@notification";
import { useState } from "react";
import "./style.scss";

const index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: Signin = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: Signin) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        navigate("/");
        setDataToCookie("access_token",response.data.access_token);
        Notification({
          title: "Successfully login",
          type: "success",
        });
      }
    } catch (error:any) {
      if (error.response.status === 400) {
        Notification({
          title: error?.response?.data?.message,
          type: "error",
        });
      } else if (error.response.status === 404) {
        Notification({
          title: "Email not found",
          type: "error",
        });
      }
      console.error(error);
    }
  };
  return (
    <>
      <div className="h-screen flex-col flex items-center justify-center gap-8 p-5">
        <h1 className="text-[35px] font-bold sm:text-[40px] md:text-[50px]">
          Login
        </h1>
        <div className="max-w-[600px]">
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-5"
                >
                  {isSubmitting ? "Submitting" : "Login"}
                </Button>
                <p onClick={()=>navigate("/signup")} className="mt-3 cursor-pointer text-[20px] hover:text-blue-500">Signup</p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default index;
