import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TemplatePreview() {
    const { templateId } = useParams();

    useEffect(() => {
        async function getTemplate() {
            const res = await fetch(`http://localhost:3000/templates/${templateId}/preview`)
            if (res.ok) {
                const template = await res.text()
                const preview = document.createElement('iframe')
                const templateBlob = new Blob([template], { type: 'text/html; charset=utf-8'})
                preview.setAttribute('src', URL.createObjectURL(templateBlob))
                const previewSection = document.getElementById('previewSection')!;
                previewSection.appendChild(preview);
            }
        }
        getTemplate()
    }, [])

    return (
        <section
            id="previewSection"
            className="bg-slate-100 grid place-items-center h-[calc(100vh-150px)] rounded"
        ></section>
    )
}
