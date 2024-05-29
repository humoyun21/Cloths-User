import request from "../config";
import { Request } from "@auth-interface";

const auth: Request = {
    sign_up: (data) => request.post("/register", data),
    sign_in: (data) => request.post("/login", data),
    auth_verify: (email, otp) => request.post(`/verify?email=${email}&otp=${otp}`),
    forgot_password: (data) => request.post("/auth/forgot-password", data),
    update_password: (data) => request.post("/auth/verify-forgot-password", data),
}

export default auth