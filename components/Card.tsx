import React from "react";
import Link from "next/link";
import Thumbnail from "@/components/Thumbnail";
import { AppFile } from "@/types";
import { convertFileSize } from "@/lib/utils";
import FormatedDateTime from "@/components/FormatedDateTime";
import ActionDropdown from "@/components/ActionDropdown";

const Card = ({ file }: { file: AppFile }) => {
  return (
    <Link href={file.url} target="_blank" className="file-card">
      <div className="flex justify-between">
        <Thumbnail
          type={file.type}
          extension={file?.extension}
          url={file.url}
          className="!size-20"
          imageClassName="!size-11"
        />
        <div className="flex flex-col items-end justify-between">
          <ActionDropdown file={file} />
          <p className="body-1">{convertFileSize(file.size)}</p>
        </div>
      </div>
      <div className="file-card-details">
        <p className="subtitle-2 line-clamp-1">{file.name}</p>
        <FormatedDateTime
          date={file.$createdAt}
          classNames="body-2 text-light-100"
        />
        <p className="caption line-clamp-1 text-light-200">
          By: {file.owner.fullName}
        </p>
      </div>
    </Link>
  );
};

export default Card;