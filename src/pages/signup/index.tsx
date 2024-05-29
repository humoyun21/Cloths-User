import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, IconButton, InputAdornment, Button, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signUpValidationSchema } from "../../utils/validations"
import { SignUp } from "@auth-interface";
import { auth } from "@service";
import { Signup } from "@modals";
import "./style.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "@notification";

const index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const initialValues: SignUp = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
  }
  const handleSubmit = async(values: SignUp) => {
    setEmail(values.email)
    try {
      const response = await auth.sign_up(values);
      if (response.status === 200) {
        setModal(true)
        Notification({
          title: "Code has been sent to your email",
          type: "success"
        })
      }
    }catch (error) {
      console.error(error)
      Notification({
        title: "This email already in use",
        type: "error"
      })
    }
  }
  return (
    <>
    <Signup open={modal} handleClose={()=> setModal(false)} email={email}/>
      <div className="h-screen flex-col flex items-center justify-center gap-8 p-5">
        <h1 className="text-[35px] font-bold sm:text-[40px] md:text-[50px]">
          Sign up
        </h1>
        <div className="max-w-[600px]">
          <Formik
            initialValues={initialValues}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="first_name"
                  type="text"
                  as={TextField}
                  label="First name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage name="first_name" component='span' className="text-[red] text-[15px]" />
                  }
                />
                <Field
                  name="last_name"
                  type="text"
                  as={TextField}
                  label="Last name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage name="last_name" component='span' className="text-[red] text-[15px]" />
                  }
                />
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage name="email" component='span' className="text-[red] text-[15px]" />
                  }
                />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Parol"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage name="password" component='span' className="text-[red] text-[15px]" />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Field
                    as={RadioGroup}
                    aria-label="for_gender"
                    name="gender"
                    className="flex items-center mb-3"
                    margin="none"
                  >
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <div className="flex items-center justify-between">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  </Field>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-5"
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Ro'yhatdan o'tish"}
                </Button>
                <p onClick={()=>navigate("/signin")} className="mt-3 cursor-pointer text-[20px] hover:text-blue-500">Sign in</p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default index;