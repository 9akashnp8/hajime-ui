import { useParams } from "react-router-dom"

import { CodeBlock } from "react-code-blocks"
import { useEffect, useState } from "react";

export default function TemplateCanvas() {
    const { templateId } = useParams();
    const [ templateCode, setTemplateCode ] = useState<string>("");

    useEffect(() => {
        async function getTemplate() {
            const res = await fetch(`http://localhost:3000/templates/${templateId}/`)
            if (res.ok) {
                const template = await res.json()
                setTemplateCode(template.data)
            }
        }
        getTemplate()
    }, [])

    return (
        <div className="">
            <CodeBlock
                text={templateCode}
                language="html"
                showLineNumbers={false}
                wrapLongLines
            />
        </div>
    )
}