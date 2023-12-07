import { useEffect } from "react";
import { useSelector } from 'react-redux'

import { RootState } from "../../core/store"

export default function Canvas() {
    const generatedElement = useSelector((state: RootState) => state.generatedElement);

    useEffect(() => {
        const preview = document.createElement('iframe')
        preview.setAttribute('srcDoc', generatedElement)
        const previewSection = document.getElementById('previewSection')!;
        previewSection.appendChild(preview);
    }, [])

    return (
        <section
            id="previewSection"
            className="bg-slate-100 grid place-items-center h-[calc(100vh-100px)] mt-5 rounded"
        ></section>
    )
}
