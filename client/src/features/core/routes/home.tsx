import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { store } from "../store";

export default function Home() {
    const { dispatch } = store;
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState("");

    async function handlePromptSubmit(event: React.FormEvent) {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/generate?mock=True', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ prompt })
        })
        const aiResponse = await response.json();
        dispatch.generatedElement.set(aiResponse["result"])
        navigate("/canvas")
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
