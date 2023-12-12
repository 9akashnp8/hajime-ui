import { useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom"

export default function TemplateRootPage() {
  const { templateId } = useParams();
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold pb-5">Template: {templateId}</h2>
        <div className="flex gap-3">
          <Link
            to={`${templateId}/preview`}
            className={(activeButtonIndex == 0 ? "bg-slate-600": "bg-slate-800") + " p-2 rounded outline"}
            onClick={() => setActiveButtonIndex(0)}
          >
            Preview
          </Link>
          <Link
            to={`${templateId}/canvas`}
            className={(activeButtonIndex == 1 ? "bg-slate-600": "bg-slate-800") + " p-2 rounded outline"}
            onClick={() => setActiveButtonIndex(1)}
          >
            Code
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
