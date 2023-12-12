import { Outlet, useParams } from "react-router-dom"

export default function TemplateRootPage() {
  const { templateId } = useParams();

  return (
    <div>
      <h2 className="text-4xl font-bold pb-5">Template: {templateId}</h2>
      <Outlet />
    </div>
  )
}
