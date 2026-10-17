import { useCreatePropertyMutation } from "@/api/property.api";
import { toast } from "react-toastify";
import PropertyForm from "../Dialog/property/PropertyForm";
import { useNavigate } from "react-router-dom";

const CreateProperty = () => {
  const [Property] = useCreatePropertyMutation();
  const navigate = useNavigate();

  const createProperty = async (data: any) => {
    console.log("CREATE", data);
    const res = await Property(data).unwrap();
    navigate("/dashboard/property-listing");
    toast.success(res.message);
  };

  return <PropertyForm mode="create" onSubmit={createProperty} />;
};

export default CreateProperty;
