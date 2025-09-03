import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import axios from "axios";

import { toast } from "sonner";

const NewPasswordSchema = z
  .object({
    NewPassword: z
      .string()
      .min(2, { message: "Please enter your new password" }),
    confirmPassword: z
      .string()
      .min(2, { message: "Enter your new password again" }),
  })
  .refine((data) => data.NewPassword === data.confirmPassword, {
    message: "Нууц үг таарахгүй байна",
    path: ["confirmPassword"],
  });

export const NewPassword = ({ userId }: { userId: number }) => {
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      NewPassword: "",
      confirmPassword: "",
    },
  });

  const UpdatePassword = (confirmPassword: string) => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/update-user/${userId}`,
        {
          password: confirmPassword,
        }
      )
      .then((response) => {})
      .catch((error) => {
        toast.error("Error");
      });
  };

  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    UpdatePassword(values.confirmPassword);
  }

  return (
    <div className=" p-6 flex gap-6 flex-col border-1 border-zinc-200 rounded-lg ">
      <p className="text-base font-bold">Set a new password</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="NewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="text-right mt-[24px]">
            <Button className="w-full">Save changes</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
