import Link from "next/link";

export default function Home () {
    return (
        <div className="inline-block text-blue-800 bg-blue-200 p-5 rounded">
            <Link href="/cats">
                Click here to view the cat catalog
            </Link>
        </div>
    )
}