import { t } from "../trpc";
import { reviewSchema } from "../../components/UI/ReviewModal";
import { contactSchema } from "../../components/Home/Contact";
import sanity from "@/sanity/client";

export const userRouter = t.router({
  sendReview: t.procedure.input(reviewSchema).mutation(async ({ input }) => {
    const document = {
      ...input,
      _type: "reviews",
      read: false,
      date: new Date().toISOString(),
    };
    try {
      await sanity.create(document);
      return;
    } catch (_) {
      return;
    }
  }),
  sendContact: t.procedure.input(contactSchema).mutation(async ({ input }) => {
    const document = {
      ...input,
      _type: "messages",
      read: false,
      date: new Date().toISOString(),
    };
    try {
      await sanity.create(document);
      return;
    } catch (_) {
      return;
    }
  }),
});
