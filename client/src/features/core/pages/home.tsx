import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { axiosInstance } from "../../api/axios";

export default function Home() {
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState("");

    async function handlePromptSubmit(event: React.FormEvent) {
        event.preventDefault();
        await axiosInstance
            .post('/templates/generate?mock=True', { prompt })
            .then((res) => {
                const templateId = res.data.data;
                navigate(`/template/${templateId}/preview`)
            })
    }
    return (
        <div className="h-1/2 grid place-content-center" >
            <form className="flex gap-5" onSubmit={handlePromptSubmit}>
                <input
                    required
                    type="text"
                    name="prompt"
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="rounded w-96 text-black caret-gray-800"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-black p-2 rounded" >
                    Generate
                </button>
            </form>
        </div>
    )
}
