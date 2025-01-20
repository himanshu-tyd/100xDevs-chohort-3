import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const useAddUpload = () => {
  const [loading, setLoading] = useState(false);

  const uploadCours = async (data) => {


    const success = isvalid(data);

    if (!success) return;

    try {
      setLoading(true);
      const res = await axios.post("api/admin/create", data);

      
      toast.success(res.data.message)

    } catch (e) {
      toast.error(e.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, uploadCours };
};

export default useAddUpload;

const isvalid = ({ title, description, imageUrl, price }) => {
  console.log({ title, description, imageUrl, price });

  if (!title || !description || !imageUrl || !price) {
    toast.error("All field are required");

    return false;
  }

  return true;
};
