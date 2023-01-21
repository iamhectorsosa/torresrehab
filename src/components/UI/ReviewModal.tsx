export default function ReviewModal() {
    return (
        <>
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <label htmlFor="review-modal" className="modal cursor-pointer">
                <label className="modal-box relative space-y-4" htmlFor="">
                    <h3 className="text-lg font-bold">Write a review</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-1 -mt-2">
                            <button onClick={() => console.log("clicked")}>
                                <svg
                                    className="w-6 h-6 text-yellow-500 hover:text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => console.log("clicked")}>
                                <svg
                                    className="w-6 h-6 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => console.log("clicked")}>
                                <svg
                                    className="w-6 h-6 text-yellow-500 hover:text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => console.log("clicked")}>
                                <svg
                                    className="w-6 h-6 text-yellow-500 hover:text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button onClick={() => console.log("clicked")}>
                                <svg
                                    className="w-6 h-6 text-gray-400 hover:text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Title"
                                type="text"
                                id="title"
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
                            />
                        </div>
                        <button className="flex w-full md:w-fit justify-center rounded border border-gray-600 bg-gray-600 px-8 py-3 text-white hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                            <span className="text-sm font-medium">Submit</span>
                        </button>
                    </div>
                </label>
            </label>
        </>
    );
}
