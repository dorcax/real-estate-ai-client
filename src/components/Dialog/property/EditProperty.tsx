// import type { PropertyFormValues } from "@/types";
import { useLocation } from "react-router-dom";
import PropertyForm from "./PropertyForm";
// import type { Property } from "../da";

// type EditPropertyProps = {
//   property: PropertyFormValues;
// };

const EditProperty = () => {
  const location =useLocation()
  // if (!property) {
  //   return null;
  // }

const property =location.state?.property

  const handleUpdate = (data: any) => {
    console.log("UPDATE PROPERTY", {
      id: property.address,
      ...data,
    });
  };

  console.log('ffff',property.attachment.uploads)
  return (
    <PropertyForm
      mode="edit"
      existingImages={property.attachment?.uploads ?? []}
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
        attachmentsId:property.attachment?.uploads,

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
