import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

import { usePopUpContext } from "@/context/PopUpContext";


type CustomInfoDialogType = {
  imgUrl?: string;
  title?: string;
  children: ReactNode;
  description?: string;
  okText?: string;
  className?: string;
  close?: boolean;
};



const CustomInfoDialog = ({
  title,
  children,
  description,
  okText,
  imgUrl,
  className,
  close,
}: CustomInfoDialogType) => {


  const {
    isDialogOpen,
    closeDialog,
  } = usePopUpContext();



  return (

    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeDialog();
        }
      }}
    >


      <DialogContent
        className={cn(
          "sm:max-w-md bg-[#222a3d] text-[#dae2fd]",
          className
        )}
      >


        <DialogHeader >


          {imgUrl && (

            <div className="flex justify-center">

              <img
                src={imgUrl}
                alt="dialog-image"
                width={70}
              />

            </div>

          )}



          <DialogTitle className="capitalize text-sm text-[#dae2fd]">

            {title}

          </DialogTitle>



          <DialogDescription>

            {description}

          </DialogDescription>


        </DialogHeader>



        {children}



        {/* <DialogFooter>

          {close && (

            <Button
              type="button"
              variant="secondary"
              onClick={closeDialog}
            >

              {okText}

            </Button>

          )}

        </DialogFooter> */}

       


      </DialogContent>


    </Dialog>

  );
};


export default CustomInfoDialog;