"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Gender } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { api } from "@/trpc/react";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().min(10),
  gender: z.string(),
  nationality: z.string(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

const UserRegisterForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });
  const error = useSearchParams()?.get("error");
  const router = useRouter();
  const createUserMutation = api.user.create.useMutation({
    onSuccess: () => {
      toast.success("User Created Successfully");
      router.push("/login");
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    if (values.password != values.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    const user = await createUserMutation.mutateAsync(values);

    if (user) {
      toast.success("User Created Successfully");
    } else {
      toast.error("Error Creating User");
    }
  }

  const genders = Object.keys(Gender).map((key) => ({
    value: key,
    label: key,
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Roshan" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="roshan@gmail.com" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input placeholder="9876543210" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select
                  value={
                    String(form.watch("gender")) != ""
                      ? String(form.watch("gender"))
                      : "Select Gender"
                  }
                  onValueChange={(value: string) =>
                    form.setValue("gender", String(value))
                  }
                >
                  <SelectTrigger className="capitalize">
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {genders.map((gender) => (
                        <SelectItem
                          key={gender.value}
                          value={String(gender.value)}
                        >
                          {gender.value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationality</FormLabel>
              <FormControl>
                <Input placeholder="India" type="text" {...field} />
              </FormControl>
              {/* <FormDescription>
    
                  </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div>
          {error ? (
            <SignInError error={error} />
          ) : (
            <div className="flex items-center justify-center py-2 text-sm text-red-500">
              <span>&nbsp;</span>
            </div>
          )}
        </div> */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default UserRegisterForm;
