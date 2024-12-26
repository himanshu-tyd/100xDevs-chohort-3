import { useState } from "react";
import { signInValidation } from "../utils/helper";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getContextData } from "../context/AuthContexProvider";

const useSignIn = () => {
  const [loadig, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = getContextData();

  const signIn = async (formData) => {
    const isValid = signInValidation(formData);

    if (!isValid) return;

    const { email, password, role } = formData;

    try {
      setLoading(true);
      if (role == "admin") {
        const res = await axios.post("/api/admin/signin", {
          email,
          password,
          role,
        });

        if (!res.data.success) {
          return toast.error(res.data.message);
        }

        toast.success(res.data.message);
        navigate("/");

        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUser(res.data.data);
        //here we set data in localStorage
      }
      if (role == "user") {
        const res = await axios.post("/api/users/signin", {
          email,
          password,
          role,
        });

        if (!res.data.success) {
          return toast.error(res.data.message);
        }

        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUser(res.data.data);
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (e) {
      return toast.error("Internal server error", e.error);
    } finally {
      setLoading(false);
    }
  };

  return { loadig, signIn };
};

export default useSignIn;
