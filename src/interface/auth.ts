// --------- Authorization  -------------
export interface ForgotPassword{
    email: string,
}

export interface Signin extends ForgotPassword{
    password: string,
}

export interface SignUp extends Signin{
    first_name: string,
    last_name: string,
    gender: string,
}

export interface UpdatePassword{
    code: string,
    new_password: string,
    email?: string,
}

export interface AuthVerify{
    otp: string,
    email: string,
}

export interface Request{
    sign_up:(data:SignUp)=>any,
    sign_in:(data:Signin)=>any,
    auth_verify:(email:string, otp:string)=>any,
    forgot_password:(data:ForgotPassword)=>any,
    update_password:(data:UpdatePassword)=>any,
}


// ------------------------------------