import React from "react";
import { cn, formatDateTime } from "@/lib/utils";

interface FormatedDateTimeProps {
  date: string;
  classNames?: string;
}

const FormatedDateTime = ({ date, classNames }: FormatedDateTimeProps) => {
  return (
    <p className={cn("body-1 text-light-200", classNames)}>
      {formatDateTime(date)}
    </p>
  );
};

export default FormatedDateTime;
