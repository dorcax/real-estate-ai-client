import { useDeletePropertyMutation } from "@/api/property.api";
import CustomInfoDialog from "@/common/CustomInfoDialog";
import { Button } from "@/components/ui/button";
import { usePopUpContext } from "@/context/PopUpContext";
import { toast } from "react-toastify";

type DeletePropertyProps = {
  row: {
    id: string;
    title: string;
  };
};

const DeleteProperty = ({ row }: DeletePropertyProps) => {
  const { closeDialog } = usePopUpContext();

  // const [loading, setLoading] = useState(false);
  const [deleteProperty, { isLoading:loading }] = useDeletePropertyMutation();

  const handleDelete = async (id: string) => {
  try {
    await deleteProperty(id).unwrap();
    toast.success("Property deleted successfully");
    closeDialog()
  } catch (error) {
    toast.error("Failed to delete property");
  }
};

  return (
    <CustomInfoDialog className="capitalize sm:max-w-sm">
      <div className="flex h-full flex-col justify-between space-y-6">

        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            Are you sure you want to delete this property?
          </h3>

          <p className="text-xs ">
            This action will permanently remove 
            <span className="font-medium">
              {row.title}
            </span>
            from the property list.
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
            onClick={()=>handleDelete(row.id)}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>

        </div>

      </div>
    </CustomInfoDialog>
  );
};

export default DeleteProperty;