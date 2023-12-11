import { Outlet } from "react-router-dom"

import NavBar from "../components/NavBar"

export default function Root() {
    return (
        <div className="h-screen bg-slate-900 text-white p-5">
            <NavBar />
            <Outlet />
        </div>
    )
}
