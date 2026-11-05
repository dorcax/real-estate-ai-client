import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { usePopUpContext } from "@/context/PopUpContext";
import CustomerDrawer from "../drawser/customer/customerDrawer";
import DeleteCustomer from "../Dialog/Customer/DeleteCustomer";






const CustomerActions = ({ row }: { row: any }) => {
    console.log(row)

  const { openDrawer,openDialog } = usePopUpContext();


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


        <DropdownMenuItem onClick={() => openDrawer(() => (<CustomerDrawer customer={row} />))}>
          View
        </DropdownMenuItem>
        <DropdownMenuItem>
        Edit
        </DropdownMenuItem>


        <DropdownMenuItem

        onClick={()=>openDialog(()=>(<DeleteCustomer  row={row}/>))}
         
        >
          Delete
        </DropdownMenuItem>


      </DropdownMenuContent>

    </DropdownMenu>
  );
};


export default CustomerActions;