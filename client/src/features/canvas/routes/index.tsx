import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux'

import { RootState } from "../../core/store"
import { useForceUpdate } from "../../../utils/hooks";

export default function Canvas() {
    const forceUpdate = useForceUpdate();
    const ref = useRef<HTMLDivElement>(null);
    const generatedElement = useSelector((state: RootState) => state.generatedElement);

    useEffect(() => {
        const template = document.createElement('template')
        template.innerHTML = generatedElement.trim()
        ref.current?.replaceWith(template.content.firstChild!)
        forceUpdate() // rerender to get styles from (how would you do after building?)
    }, [generatedElement])

    return (
        <section className="bg-slate-500 grid place-items-center h-[calc(100vh-100px)] mt-5 rounded">
            <div id="canvasElement" ref={ref}></div>
        </section>
    )
}
