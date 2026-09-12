import { Button } from "@/components/ui/button";
import {
  Building2,
  HouseIcon,
  MapIcon,
  MoveRight,
  User,
  UserIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const ReadyStep = () => {
  return (
    <section className="space-y-3">
      <header>
        <h1 className="text-[#ffb783] uppercase text-base ">workspace ready</h1>
        <h2 className="text-2xl  capitalize ">your company is ready!</h2>
        <p className="text-base ">
          your company workspace has been set up successfully.
        </p>
      </header>
      <section className="border bg-white shadow-lg  rounded-lg text-black p-4 space-y-2">
        <div className="flex gap-3 items-center  border-b pb-3">
          <span className="bg-[#c0c1ff] text-[#1000A9]  w-9 h-9  shrink-0 rounded-full flex  justify-center items-center">
            <Building2 className="size-4" />
          </span>
          <div>
            <p className="uppercase text-sm">company</p>
            <span className="text-sm capitalize">zoracom</span>
          </div>
        </div>
        {/* location */}
        <div className="flex gap-3 items-center   border-b pb-3">
          <span className="bg-[#c0c1ff] text-[#1000A9]  w-9 h-9 shrink-0  rounded-full flex  justify-center items-center">
            <MapIcon className="size-4" />
          </span>
          <div>
            <p className="uppercase text-sm ">based in </p>
            <span className="text-sm capitalize">nigeria</span>
          </div>
        </div>
        {/* team invitation */}
        <div className="flex gap-2 items-center  ">
          <span className=" w-9 h-9 bg-[#c0c1ff] text-[#1000A9] rounded-full flex  justify-center items-center">
            <UserIcon className="size-4" />
          </span>
          <div>
            <p className="uppercase text-sm ">team invitation</p>
            <span className="text-sm capitalize">1</span>
          </div>
        </div>
      </section>
      {/* button  */}

      <div className="flex  justify-end">
        <Link to="/dashboard">
         <Button className="bg-[#c0c1ff]  text-[#1000A9] capitalize text-sm hover:bg-[#c0c1ff]">
          go to dashboard <MoveRight />
        </Button> </Link>
       
      </div>
    </section>
  );
};

export default ReadyStep;
