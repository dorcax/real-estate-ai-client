import Listing from "@/components/property/Listing"
import PropertyStats from "@/components/property/PropertyStats"

const PropertyListing = () => {
  return (
   <main className="space-y-8">
    <PropertyStats />
    <Listing />

   </main>
  )
}

export default PropertyListing