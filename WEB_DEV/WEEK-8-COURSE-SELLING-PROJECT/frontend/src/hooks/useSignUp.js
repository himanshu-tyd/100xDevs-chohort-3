import { useState } from "react";
import { signUpValidation } from "../utils/helper";
import axios from "axios";
import { toast } from "sonner";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signUp = async (formData) => {
    const isValid = signUpValidation(formData);

    if (!isValid) return;

    try {
      setLoading(true);
      if (formData.role == "admin") {
        const res = await axios.post("/api/admin/signup", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });

        console.log(res.data);
      }
    } catch (e) {
      console.log(e);
      return toast.error(`Opps something went wrong try again ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

export default useSignUp;
