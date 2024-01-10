import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <div className="h-screen bg-slate-900 text-white p-5">
            <Outlet />
        </div>
    )
}
