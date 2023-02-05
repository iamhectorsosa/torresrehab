import { useForm } from "react-hook-form";
import { trpc as t } from "../../utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { About } from "@/sanity/schemas/about";
import { Pages } from "@/sanity/schemas/pages";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be longer than 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z
    .string()
    .min(6, { message: "Phone must be longer than 6 characters" }),
  message: z.string().min(1),
});

type ContactType = z.infer<typeof contactSchema>;

export default function Component({
  bio,
  page,
}: {
  bio: About;
  page: Pages[number];
}) {
  const { register, handleSubmit, reset } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
  });
  const mutation = t.user.sendContact.useMutation();

  async function onSubmit(data: ContactType) {
    mutation.mutate(data);
    reset();
  }

  return (
    <div className="space-y-8">
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            {mutation.isSuccess ? "Thank you for your message" : page.headline}
          </h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 space-y-6">
              <p className="text-lg text-center lg:text-left font-medium">
                {page.tagline}
              </p>

              <div className="space-y-4 text-center lg:text-left">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {bio.phoneNumber}
                </a>

                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Monday to Friday: {bio.weekdaySchedule}</li>
                  <li>Weekend: {bio.weekendSchedule}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: true,
                      })}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={6}
                    id="message"
                    {...register("message", {
                      required: true,
                    })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex w-full md:w-fit justify-center rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                >
                  {mutation.isLoading && (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-invert"
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
                  {mutation.isLoading ? (
                    <span className="text-sm font-medium">Loading</span>
                  ) : (
                    <span className="text-sm font-medium">Submit</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
