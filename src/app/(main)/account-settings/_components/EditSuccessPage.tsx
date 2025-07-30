import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const NewSuccessSchema = z.object({
  successMsg: z.string().min(2, { message: "First name must match" }),
});

export const EditSuccessPage = () => {
  const form = useForm<z.infer<typeof NewSuccessSchema>>({
    resolver: zodResolver(NewSuccessSchema),
    defaultValues: {
      successMsg:
        "Thank you for supporting me! It means a lot to have your support. It’s a step toward creating a more inclusive and accepting community of artists.",
    },
  });

  function onSubmit(values: z.infer<typeof NewSuccessSchema>) {
    console.log(values);
  }
  return (
    <div className="p-6 flex gap-6 flex-col border-1 border-zinc-200 rounded-lg ">
      <p className="text-[16px] font-bold pb-6">Success page</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="successMsg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmation message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter new password"
                      {...field}
                      className="resize-none w-[510px] h-[130px]"
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
