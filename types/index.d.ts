/* eslint-disable no-unused-vars */

import React from "react";
import { Models } from "node-appwrite";

declare type FileType = "document" | "image" | "video" | "audio" | "other";

declare interface ActionType {
  label: string;
  icon: string;
  value: string;
}

declare interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}
declare interface GetFilesProps {
  types: FileType[];
  searchText?: string;
  sort?: string;
  limit?: number;
}
declare interface RenameFileProps {
  fileId: string;
  name: string;
  extension: string;
  path: string;
}
declare interface UpdateFileUsersProps {
  fileId: string;
  emails: string[];
  path: string;
}
declare interface DeleteFileProps {
  fileId: string;
  bucketFileId: string;
  path: string;
}

declare interface FileUploaderProps {
  ownerId: string;
  accountId: string;
  className?: string;
}

declare interface MobileNavigationProps {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}
declare interface SidebarProps {
  fullName: string;
  avatar: string;
  email: string;
}

declare interface ThumbnailProps {
  type: string;
  extension?: string;
  url: string;
  className?: string;
  imageClassName?: string;
}

declare interface AppUser extends Models.Document {
  fullName: string;
  email: string;
  avatar?: string;
  accountId: string;
  files?: string[];
}

declare interface AppFile extends Models.Document {
  name: string;
  type: string;
  url: string;
  accountId: string;
  bucketFileId: string;
  extension: string;
  size: number;
  users: string[];
  owner: AppUser;
}

declare interface ShareInputProps {
  file: AppFile;
  // onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: React.Dispatch<React.SetStateAction<string[]>>;
  onRemove: (email: string) => void;
}
