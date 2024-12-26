import { toast } from "sonner"


export const signUpValidation=(data)=>{
    const {firstName, lastName, email, password, role}=data

    if(!firstName || !lastName || !email || !password || !role){
        toast.error('All fields are require please fill')
        return false
    }


    return true
}