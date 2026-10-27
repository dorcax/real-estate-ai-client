
import { useCreateCompanyInvitationMutation } from "@/api/companyInvitation.api";
import CustomInfoDialog from "@/common/CustomInfoDialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePopUpContext } from "@/context/PopUpContext";

import { ArrowBigRight, Timer } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import Loader from "@/common/Loader";
const role = [
 
  { label: "ADMIN", value: "ADMIN" },
  { label: "AGENT", value: "AGENT" },
  ,
];

const companyInvitationSchema = z.object({
  email: z.email(),
  role: z.enum(['ADMIN','AGENT','OWNER']),
});
type invitationSchema = z.infer<typeof companyInvitationSchema>;
const CreateInvitation = () => {
  const { closeDialog } = usePopUpContext();
  const [createCompanyInvitation, { isLoading: loading }] =
    useCreateCompanyInvitationMutation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<invitationSchema>({
    resolver: zodResolver(companyInvitationSchema),
    defaultValues: {
      email: "",
      role: "ADMIN",
    },
  });

  const onSubmit = async (values: invitationSchema) => {
    try {
      const res = await createCompanyInvitation(values).unwrap();
      console.log("invitation", res);
      toast.success(res.data.message);
      closeDialog()
    } catch (error: any) {
      toast.error(error?.data?.message || 'failed to send an invitation');
    }
  };

  return (
    <CustomInfoDialog className="capitalize sm:max-w-sm">
      <div>
        <div className="flex gap-2 items-center">
          <ArrowBigRight className="size-6" />
          <h1 className="text-lg">Invite Team Member </h1>
        </div>
        <p className="text-xs ">
          send an agency invitation link with role permission
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Field>
            <FieldLabel className="mb-1.5 block text-sm font-medium text-gray-200">
              Email address
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-11 bg-[#1E293B] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#818CF8]"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </Field>

          <Field>
            <FieldLabel className="text-[#dae2fd]">Assign Role</FieldLabel>

            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-[#171f33] py-6  border-[#464554]  text-[#dae2fd]  placeholder:text-[#c7c4d7]  focus-visible:border-[#c0c1ff]  focus-visible:ring-[#c0c1ff]/20  ">
                    <SelectValue placeholder="select a role" />
                  </SelectTrigger>

                  <SelectContent>
                    {role.map((role: any) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.role && (
              <p className="mt-1 text-sm text-red-400">{errors.role.message}</p>
            )}
          </Field>
          <p className="flex items-start gap-2 rounded-md bg-[#171f33] p-3 text-xs leading-relaxed text-[#94A3B8]">
            <Timer className="mt-0.5 size-4 shrink-0 text-[#818CF8]" />
            <span>
              <span className="font-medium text-[#DAE2FD]">
                Time-limited access
              </span>
              {" — "}This invitation expires automatically after 10 minutes.
            </span>
          </p>
          <div className="flex gap-3 justify-end">
            <Button
              className="capitalize bg-[#171f33] "
              onClick={() => closeDialog()}
            >
              cancel
            </Button>
            <Button
              type="submit"
              className=" capitalize bg-[#6366F1] font-medium text-white transition-colors hover:bg-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? <Loader /> : "send invitation"}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </CustomInfoDialog>
  );
};

export default CreateInvitation;
