import CustomInfoDialog from "@/common/CustomInfoDialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel } from "../../ui/field";
import { Input } from "../../ui/input";
import AmenityBadge from "../../property/AmenitiesBadge";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";
import { Label } from "../../ui/label";


const propertyPurpose = [
  { label: "Rent", value: "rent" },
  { label: "Sell", value: "sell" },
  { label: "Lease", value: "lease" },
];


const propertyType = [
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Land", value: "land" },
  { label: "Office", value: "office" },
  { label: "Shop", value: "shop" },
];


const labelStyle = "text-xs text-gray-900 font-medium";


const CreateProperty = () => (
  <CustomInfoDialog
    title="New Property Listing"
    className="w-full md:max-w-[500px] max-h-125 overflow-y-auto overflow [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
  >

    <form>

      <FieldGroup>


        <Field>
          <FieldLabel className={labelStyle}>
            Name
          </FieldLabel>

          <Input
            placeholder="name"
            required
          />
        </Field>


        <div className="grid grid-cols-2 gap-2">

          <Field>

            <FieldLabel className={labelStyle}>
              Property Type
            </FieldLabel>

            <Select>

              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>


              <SelectContent>

                <SelectGroup>

                  {propertyType.map((item) => (

                    <SelectItem
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>

                  ))}

                </SelectGroup>

              </SelectContent>

            </Select>

          </Field>



          <Field>

            <FieldLabel className={labelStyle}>
              Listing Type
            </FieldLabel>


            <Select>

              <SelectTrigger>
                <SelectValue placeholder="Purpose" />
              </SelectTrigger>


              <SelectContent>

                <SelectGroup>

                  {propertyPurpose.map((item) => (

                    <SelectItem
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>

                  ))}

                </SelectGroup>

              </SelectContent>


            </Select>


          </Field>

        </div>



        <Field>

          <FieldLabel className={labelStyle}>
            Street Address
          </FieldLabel>

          <Input
            placeholder="address"
            required
          />

        </Field>



        <div className="grid grid-cols-3 gap-2">


          {["City", "State", "Zip Code"].map((item)=>(

            <Field key={item}>

              <FieldLabel className={labelStyle}>
                {item}
              </FieldLabel>

              <Input
                placeholder={item}
                required
              />

            </Field>

          ))}


        </div>



        <div className="grid grid-cols-2 gap-2">


          <Field>

            <FieldLabel className={labelStyle}>
              Sale Price
            </FieldLabel>

            <Input
              type="number"
              placeholder="Sale price"
            />

          </Field>



          <Field>

            <FieldLabel className={labelStyle}>
              Display Price
            </FieldLabel>

            <Input
              type="number"
              placeholder="Display price"
            />

          </Field>


        </div>




        <div className="grid grid-cols-4 gap-2">


          {[
            "Bedroom",
            "Bathrooms",
            "Area",
            "Parking",
          ].map((item)=>(

            <Field key={item}>

              <FieldLabel className={labelStyle}>
                {item}
              </FieldLabel>


              <Input
                placeholder={item}
              />

            </Field>

          ))}


        </div>




        <div className="grid grid-cols-2 gap-2">


          <Field>

            <FieldLabel className={labelStyle}>
              Year Built
            </FieldLabel>


            <Input
              type="number"
              placeholder="Year built"
            />

          </Field>



          <Field>

            <FieldLabel className={labelStyle}>
              Building Size
            </FieldLabel>


            <Input
              type="number"
              placeholder="Building size"
            />

          </Field>


        </div>




        <Field>

          <FieldLabel className={labelStyle}>
            Description
          </FieldLabel>


          <Input
            placeholder="Description"
          />

        </Field>




        <Field>

          <FieldLabel className={labelStyle}>
            Amenities
          </FieldLabel>


          <AmenityBadge

            amenities={[
              "Air Conditioning",
              "Pet Friendly",
              "Security System",
              "Laundry",
              "Storage",
              "Solar Panels",
              "Smart Home",
              "Sea View",
            ]}

          />

        </Field>




        <Field>


          <FieldLabel className={labelStyle}>
            Add Custom Feature
          </FieldLabel>


          <div className="flex gap-2">

            <Input
              placeholder="Add custom feature..."
            />


            <Button
              type="button"
              className="bg-[#6366F1]"
            >
              Add
            </Button>

          </div>


        </Field>





        <Field>


          <FieldLabel className={labelStyle}>
            Property-Specific AI Agent
          </FieldLabel>


          <Select>

            <SelectTrigger>

              <SelectValue placeholder="No dedicated agent use default"/>

            </SelectTrigger>


            <SelectContent>

              <SelectItem value="default">
                No dedicated agent use default
              </SelectItem>


            </SelectContent>


          </Select>


        </Field>





        <Field>

          <FieldLabel className={labelStyle}>
            Reservation Deposit ($)
          </FieldLabel>


          <Input
            type="number"
            placeholder="$9,500 — leave blank to disable reservations"
          />

        </Field>





        <Field>

          <FieldLabel className={labelStyle}>
            Listing Status
          </FieldLabel>


          <Select>

            <SelectTrigger>

              <SelectValue placeholder="Available"/>

            </SelectTrigger>


            <SelectContent>

              <SelectItem value="available">
                Available
              </SelectItem>


              <SelectItem value="pending">
                Pending
              </SelectItem>


              <SelectItem value="sold">
                Sold
              </SelectItem>


            </SelectContent>


          </Select>


        </Field>




        <div className="space-y-3">


          <div className="flex items-center gap-2">

            <Switch />

            <Label className={labelStyle}>
              Active (visible to AI)
            </Label>

          </div>



          <div className="flex items-center gap-2">

            <Switch />

            <Label className={labelStyle}>
              Featured Listing
            </Label>

          </div>



          <div className="flex items-center gap-2">

            <Switch />

            <Label className={labelStyle}>
              Show on Marketplace
            </Label>

          </div>


        </div>




        <Button
          type="submit"
          className="w-full bg-[#6366F1] hover:bg-[#6366F1]"
        >
          Create Property
        </Button>



      </FieldGroup>


    </form>


  </CustomInfoDialog>
);


export default CreateProperty;