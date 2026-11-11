
import CustomInfoDialog from "@/common/CustomInfoDialog";
import { Button } from "@/components/ui/button";
import { usePopUpContext } from "@/context/PopUpContext";
import { toast } from "react-toastify";

type DeleteScheduleProps = {
  row: {
    id: string;
    customerName: string;
    propertyName: string;
  };
};

const DeleteAppointment = ({ data}:{data:any}) => {
  const { closeDialog } = usePopUpContext();

  // const [deleteAppointment, { isLoading: loading }] =
  //   useDeleteAppointmentMutation();

  const handleDelete = async (id: string) => {
    try {
      // await deleteAppointment(id).unwrap();

      toast.success("Appointment deleted successfully");
      closeDialog();
    } catch (error) {
      toast.error("Failed to delete appointment");
    }
  };

  return (
    <CustomInfoDialog className="capitalize sm:max-w-sm">
      <div className="flex h-full flex-col justify-between space-y-6">
        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            Are you sure you want to delete this appointment?
          </h3>

          <p className="text-xs">
            This action will permanently remove the appointment for
            <span className="px-1 font-medium">
              {data.customerName}
            </span>
            regarding
            <span className="px-1 font-medium">
              {data.propertyName}
            </span>
            from your schedule.
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-24 bg-gray-100 text-black"
            onClick={closeDialog}
          >
            Cancel
          </Button>

          <Button
            type="button"
            className="w-24 bg-red-700 text-white hover:bg-red-800"
            onClick={() => handleDelete(data.id)}
            // disabled={loading}
          >
            Delete
          </Button>
        </div>
      </div>
    </CustomInfoDialog>
  );
};

export default DeleteAppointment;
