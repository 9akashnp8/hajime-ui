import { useState } from "react"

/**
 * Simple hook to force component to re-render.
 * @returns 
 */
export function useForceUpdate() {
    const [, setToggle] = useState(false);
    return () => setToggle(toggle => !toggle);
}