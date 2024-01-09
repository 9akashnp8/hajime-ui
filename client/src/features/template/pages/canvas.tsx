import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';


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
        <SyntaxHighlighter language="xml" style={atomOneDarkReasonable} showLineNumbers>
            {templateCode}
        </SyntaxHighlighter>
    )
}