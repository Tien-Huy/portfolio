import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const projects = [
  {
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Đang phát triển",
  },
  {
    title: "Phân mềm quản lý quán cafe",
    description:
      "Ứng dụng quản lý đơn hàng, khách hàng, doanh thu và nhân viên",
    tech: ["Windows Forms", "C#", "SQL Server"],
    status: "Hoàn thành",
  },
  {
    title: "Phát hiện và mô tả đặc trưng trong ảnh",
    description:
      "Ứng dụng sử dụng HOG và SIFT để phát hiện đặc trưng trong ảnh và thực hiện panorama stitching",
    tech: ["Python", "OpenCV", "HOG ", "SIFT", "Panorama Stitching"],
    status: "Hoàn thành",
  },
];
export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge
                  variant={
                    project.status === "Hoàn thành" ? "default" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
