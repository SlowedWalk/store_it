import React from "react";
import { AppFile } from "@/types";
import Thumbnail from "@/components/Thumbnail";
import FormatedDateTime from "@/components/FormatedDateTime";
import { convertFileSize, formatDateTime } from "@/lib/utils";

const ImageThumbnail = ({ file }: { file: AppFile }) => (
  <div className="file-details-thumbnail">
    <Thumbnail type={file.type} url={file.url} />
    <div className="flex flex-col">
      <p className="subtitle-2 mb-2">{file.name}</p>
      <FormatedDateTime date={file.$createdAt} classNames="caption" />
    </div>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex">
    <p className="file-details-label text-left">{label}</p>
    <p className="file-details-value text-left">{value}</p>
  </div>
);

export const FileDetails = ({ file }: { file: AppFile }) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetailRow label="Format:" value={file.extension} />
        <DetailRow label="Size:" value={convertFileSize(file.size)} />
        <DetailRow label="Owner:" value={file.owner.fullName} />
        <DetailRow label="Last edit:" value={formatDateTime(file.$updatedAt)} />
      </div>
    </>
  );
};
