import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/UI/dialog";
import { Button } from "../UI/button";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { ProseH2, ProseP } from "../UI/typography";

import { Controller, useForm } from "react-hook-form";
import { trpc as t } from "../../utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../UI/textarea";

export const reviewSchema = z.object({
  name: z.string().min(2, { message: "Name must be longer than 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z
    .string()
    .min(6, { message: "Phone must be longer than 6 characters" }),
  message: z.string().min(1),
});

type ReviewType = z.infer<typeof reviewSchema>;

export default function AppointmentModal() {
  const { control, handleSubmit, reset } = useForm<ReviewType>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const mutation = t.user.requestAppointment.useMutation();

  async function onSubmit(data: ReviewType) {
    mutation.mutate(data);
    control._reset();
    reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="subtle">Book an appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <ProseH2>
            {mutation.isSuccess
              ? "Thank you for your message"
              : " These appointments are scheduled only at request"}
          </ProseH2>
          <ProseP>
            {mutation.isSuccess
              ? "We will get back to you soon!"
              : "Just send us your info and we'll get back to you soon!"}
          </ProseP>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    id="name"
                    placeholder="Pedro Duarte"
                    className="col-span-3"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    id="email"
                    placeholder="peduarte@gmail.com"
                    className="col-span-3"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    id="phone"
                    placeholder="+420608984789"
                    className="col-span-3"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="message"
                    className="col-span-3"
                    placeholder="Any information you would like to share..."
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="float-right">
            <Button type="submit" size="lg">
              {mutation.isLoading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-4 w-4 text-invert"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {mutation.isLoading ? "Loading" : "Send"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
