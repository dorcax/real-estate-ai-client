import { useCreatePropertyMutation } from "@/api/property.api";
import { toast } from "react-toastify";
import PropertyForm from "../Dialog/property/PropertyForm";

const CreateProperty = () => {
  const [Property] =useCreatePropertyMutation()

  const createProperty = async (data: any) => {
    console.log("CREATE", data);
   const res =await Property(data).unwrap()
    toast.success(res.message)

  };

  return <PropertyForm mode="create" onSubmit={createProperty} />;
};

export default CreateProperty;
