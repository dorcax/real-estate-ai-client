// import type { PropertyFormValues } from "@/types";
import PropertyForm from "./PropertyForm";
// import type { Property } from "../da";

// type EditPropertyProps = {
//   property: PropertyFormValues;
// };

const EditProperty = ({ property }: any) => {
  if (!property) {
    return null;
  }

  const handleUpdate = (data: any) => {
    console.log("UPDATE PROPERTY", {
      id: property.address,
      ...data,
    });
  };

  return (
    <PropertyForm
      mode="edit"
      defaultValues={{
        title: property.title,

        description: property.description,

        price: Number(property.price),

        propertyType: property.propertyType,

        propertyPurpose: property.propertyPurpose,

        address: property.address,

        city: property.city,

        state: property.state,

        bedrooms: property.bedrooms,

        bathrooms: property.bathrooms,

        toilets: property.toilets,

        parkingSpace: property.parkingSpace,

        buildingSize: property.buildingSize,

        amenities: property.amenities,

        isFeatured: property.isFeatured,
      }}
      onSubmit={handleUpdate}
    />
  );
};

export default EditProperty;
