import Listing from "@/components/property/Listing"
import PropertyStats from "@/components/property/PropertyStats"

const PropertyListing = () => {
  return (
   <main className="space-y-8 h-full min-w-0 flex-1 overflow-y-auto  [&::-webkit-scrollbar]:hidden ">
    <PropertyStats />
    <Listing />

   </main>
  )
}

export default PropertyListing