import { About, Pages } from "../../lib/types";

export default function Component({
    bio,
    page,
}: {
    bio: About;
    page: Pages[number];
}) {
    return (
        <div className="space-y-8">
            <div className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
                    <h2 className="text-3xl font-bold sm:text-4xl text-center">
                        {page.headline}
                    </h2>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12 space-y-6">
                            <p className="text-lg text-center lg:text-left font-medium">
                                {page.tagline}
                            </p>

                            <div className="space-y-4 text-center lg:text-left">
                                <a
                                    href=""
                                    className="text-2xl font-bold text-pink-600"
                                >
                                    {bio.phoneNumber}
                                </a>

                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>
                                        Monday to Friday: {bio.weekdaySchedule}
                                    </li>
                                    <li>Weekend: {bio.weekendSchedule}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            className="sr-only"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="sr-only"
                                            htmlFor="phone"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className="sr-only"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows={6}
                                        id="message"
                                    ></textarea>
                                </div>
                                <button className="flex w-full md:w-fit justify-center rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                                    <span className="text-sm font-medium">
                                        Submit
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
