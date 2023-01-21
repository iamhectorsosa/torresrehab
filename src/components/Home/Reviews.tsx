import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { Pages, Reviews } from "../../lib/types";
import ActionButton from "../UI/ActionButton";
import GetInTouch from "../UI/GetInTouch";

export default function Component({
    reviews,
    limit,
    page,
}: {
    reviews: Reviews;
    limit?: number;
    page: Pages[number];
}) {
    return (
        <div
            className={`bg-gray-50 rounded px-4 sm:px-6 ${
                limit ? "space-y-6 py-8" : "space-y-8 py-12"
            }`}
        >
            <header>
                <h2
                    className={`max-w-lg text-2xl font-bold sm:text-4xl p-4 ${
                        !limit
                            ? "text-3xl font-bold sm:text-4xl text-center max-w-full"
                            : ""
                    }`}
                >
                    {page.headline}
                </h2>
                {!limit && (
                    <p className="text-center text-lg text-gray-700">
                        {page.tagline}
                    </p>
                )}
            </header>
            {!limit && (
                <div className="flex justify-center">
                    <label
                        htmlFor="review-modal"
                        className="w-full flex cursor-pointer justify-center md:justify-around md:w-fit text-sm font-medium rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500"
                    >
                        Write a review
                    </label>
                </div>
            )}
            {limit ? (
                <div className="lg:col-span-2 lg:mx-0">
                    <div className="carousel gap-4">
                        {reviews.slice(0, limit).map((i) => (
                            <div key={nanoid()} className="carousel-item">
                                <blockquote className="max-w-sm sm:max-w-md bg-white p-10">
                                    <div className="space-y-4">
                                        <div className="flex">
                                            {Array.from({
                                                length: i.rating,
                                            }).map(() => (
                                                <svg
                                                    key={nanoid()}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="0"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-yellow-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
                                            {i.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {i.description}
                                        </p>
                                        <p className="text-gray-500 uppercase text-sm tracking-wide">
                                            - {i.name} ·{" "}
                                            {dayjs(i.date).format(
                                                "DD MMM YYYY"
                                            )}
                                        </p>
                                    </div>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid gap-4">
                    {reviews.map((i) => (
                        <div key={nanoid()}>
                            <blockquote className="bg-white p-10">
                                <div className="space-y-4">
                                    <div className="flex">
                                        {Array.from({
                                            length: i.rating,
                                        }).map(() => (
                                            <svg
                                                key={nanoid()}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeWidth="0"
                                                stroke="currentColor"
                                                className="w-5 h-5 text-yellow-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
                                        {i.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {i.description}
                                    </p>
                                    <p className="text-gray-500 uppercase text-xs tracking-wide">
                                        - {i.name} ·{" "}
                                        {dayjs(i.date).format("DD MMM YYYY")}
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    ))}
                </div>
            )}

            <footer className="flex flex-col justify-center gap-6 items-center">
                {limit ? (
                    <ActionButton href="/reviews" label="Go to Reviews" />
                ) : (
                    <GetInTouch
                        href="/contact"
                        buttonLabel="Send a message"
                        text="Have questions? Send us a message using the button below"
                    />
                )}
            </footer>
        </div>
    );
}
