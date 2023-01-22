import { useForm } from "react-hook-form";
import { trpc as t } from "../../utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const reviewSchema = z.object({
    title: z
        .string()
        .min(6, { message: "Title must be longer than 6 characters" }),
    message: z
        .string()
        .min(6, { message: "Message must be longer than 6 characters" }),
    name: z
        .string()
        .min(2, { message: "Name must be longer than 2 characters" }),
});

type ReviewType = z.infer<typeof reviewSchema>;

export default function ReviewModal() {
    const { register, handleSubmit, reset } = useForm<ReviewType>({
        resolver: zodResolver(reviewSchema),
    });
    const mutation = t.user.sendReview.useMutation();

    async function onSubmit(data: ReviewType) {
        mutation.mutate(data);
        reset();
    }

    return (
        <>
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <label htmlFor="review-modal" className="modal cursor-pointer">
                <label className="modal-box relative space-y-4" htmlFor="">
                    <h3 className="text-lg font-bold">
                        {" "}
                        {mutation.isSuccess
                            ? "Thank you for your message!"
                            : "Write a review"}
                    </h3>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div>
                            <label className="sr-only" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Title"
                                type="text"
                                id="title"
                                {...register("title", {
                                    required: true,
                                })}
                            />
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
                                <span className="text-sm font-medium">
                                    Loading
                                </span>
                            ) : (
                                <span className="text-sm font-medium">
                                    Submit
                                </span>
                            )}
                        </button>
                    </form>
                </label>
            </label>
        </>
    );
}
