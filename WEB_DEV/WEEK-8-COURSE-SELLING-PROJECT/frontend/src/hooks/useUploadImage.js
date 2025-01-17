import axios from "axios";
import { useState } from "react";;
import { toast } from "sonner";

const cloud_preset = import.meta.env.CLOUD_PRISET;
const cloud_name = import.meta.env.CLOUD_NAME;

const useCloudnaryUpload = () => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    console.log(cloud_preset);
    console.log(cloud_name);
    if (!file) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      formData.append("cloud_name", cloud_name);
      formData.append("cloud_preset", cloud_preset);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );

      console.log(res.data);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, uploadImage };
};

export default useCloudnaryUpload