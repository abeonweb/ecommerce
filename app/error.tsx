"use client";
import Link from "next/link"

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div className="flex flex-col gap-y-5 text-center justify-center max-w-96 mx-auto items-center py-10 h-[90vh] px-3">
            <p>
                An error occured while loading the page.
            </p>
            <p>
                We apologize for the inconvenience.
            </p>
            <button onClick={reset} className="bg-primarypurple-950 px-4 py-2 text-white hover:shadow-md transition ease-in-out duration-700">Try Again</button>
            <Link href={"/"} className="underline text-sm leading-5">Back to Home</Link>
        </div>
    )
}
