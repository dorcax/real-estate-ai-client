import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { usePopUpContext } from "@/context/PopUpContext";
import DeleteProperty from "../Dialog/property/DeleteProperty";

import type { Property } from "./data-column";
import EditProperty from "../Dialog/property/EditProperty";
import { Link } from "react-router-dom";


const PropertyActions = ({ property }: { property: any }) => {

  const { openDialog } = usePopUpContext();


  return (
    <DropdownMenu>

      <DropdownMenuTrigger >
        <Button
          // variant="ghost"
          className='bg-[#464554] text-[#dae2fd] '
          size="icon"
        >
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>


      <DropdownMenuContent align="end" className='bg-[#464554] text-[#dae2fd] '>


        <DropdownMenuItem >
          <Link to={`/dashboard/view-property/${property.id}`}>View </Link>
        </DropdownMenuItem>
        <DropdownMenuItem  onClick={()=>openDialog(()=>(<EditProperty property={property}/>))}>
          Edit
        </DropdownMenuItem>


        <DropdownMenuItem

        onClick={()=>openDialog(()=>(<DeleteProperty row={property}/>))}
         
        >
          Delete
        </DropdownMenuItem>


      </DropdownMenuContent>

    </DropdownMenu>
  );
};


export default PropertyActions;