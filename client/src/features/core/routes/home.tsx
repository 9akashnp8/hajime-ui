export default function Home() {
    return (
        <div className="h-1/2 grid place-content-center" >
            <form className="flex gap-5">
                <input
                    type="text"
                    name="prompt"
                    id="prompt"
                    className="rounded w-96 text-black caret-gray-800"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-black p-2 rounded" >
                    Generate
                </button>
            </form>
        </div>
    )
}
