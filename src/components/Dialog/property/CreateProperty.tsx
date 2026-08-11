import PropertyForm from "./PropertyForm";

const CreateProperty = () => {
  const createProperty = (data: any) => {
    console.log("CREATE", data);

    // POST API HERE
  };

  return <PropertyForm mode="create" onSubmit={createProperty} />;
};

export default CreateProperty;
