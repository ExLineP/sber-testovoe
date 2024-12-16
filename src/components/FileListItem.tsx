import { FileIcon, PresentationIcon, FileText } from "lucide-react";

interface FileListItemProps {
  name: string;
  date: string;
  size: string;
  type: "pdf" | "ppt" | "doc" | "xls";
}

const iconColors = {
  pdf: "text-red-400",
  ppt: "text-blue-400",
  doc: "text-yellow-400",
  xls: "text-green-400",
};

const IconComponent = {
  pdf: FileText,
  ppt: PresentationIcon,
  doc: FileIcon,
  xls: FileIcon,
};

export function FileListItem({ name, date, size, type }: FileListItemProps) {
  const Icon = IconComponent[type];

  return (
    <div className="flex items-center gap-3 py-3">
      <div className={`${iconColors[type]}`}>
        <Icon size={25} />
      </div>
      <div className="flex-1">
        <div className="text-sm text-white">{name}</div>
        <div className="text-xs text-gray-300">{date}</div>
      </div>
      <div className="text-xs text-gray-500">{size}</div>
    </div>
  );
}
