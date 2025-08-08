"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const getFormSchema = () =>
  z.object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." })
      .refine(
        (name) => {
          const takenUsernames = JSON.parse(
            localStorage.getItem("takenUsernames") || "[]"
          );
          return !takenUsernames.includes(name.trim().toLowerCase());
        },
        {
          message: "This username is already taken",
        }
      ),
  });

export const SignUpUserName = ({
  handleNext,
  onChangeUserName,
}: {
  handleNext: () => void;
  onChangeUserName: (_userName: string) => void;
}) => {
  
  const form = useForm<z.infer<ReturnType<typeof getFormSchema>>>({
    resolver: zodResolver(getFormSchema()),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<ReturnType<typeof getFormSchema>>) {
    const a = values.username.trim().toLowerCase();
    const stored = localStorage.getItem("takenUsernames");
    const takenUsernames: string[] = stored ? JSON.parse(stored) : [];

    if (!takenUsernames.includes(a)) {
      takenUsernames.push(a);
      localStorage.setItem("takenUsernames", JSON.stringify(takenUsernames));
    }
    onChangeUserName(values.username);
  
    handleNext();
  }

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 bg-[#FBBF24] flex items-center justify-center ">
        <div className="text-center px-10  ">
          <div className="mb-6 ">
            <div className="w-[240px] h-[240px] rounded-full mx-auto flex items-center justify-center bg-[#D97706] ">
              <img src="illustration.png" alt="image" className="w-full" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-black">
            Fund your creative work
          </h2>
          <p className="text-black text-base w-[455px]">
            Accept support. Start a membership. Set up a shop. It&apos;s easier
            than you think.
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-8">
          <h1 className="text-2xl font-semibold mb-6 text-black">
            Create Your Account
          </h1>
          <p className="text-sm mb-2 text-gray-600">
            Choose a username for your page
          </p>

          <Form {...form}>
            <form
              className="space-y-8 text-black"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />

              <Button
                className={`w-full transition ${
                  !form.formState.isValid
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                type="submit"
                disabled={!form.formState.isValid}
              >
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
