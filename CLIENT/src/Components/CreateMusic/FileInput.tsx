import React, { useRef, useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
const CustomFileInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // 1. add state for tracking the selected files
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // 2. pass the click event to the hidden input element to trigger the file selection.
  const handleClick = () => {
    ref.current?.click();
  };

  // 3. convert FileList to File[]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files ?? []);
    setSelectedFiles(files);
  };
  return (
    <div className="">
      <div
        // 4. add onClick handler
        onClick={handleClick}
        className="p-4 flex flex-col items-center gap-2  bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer"
      >
        <CloudArrowUpIcon className="w-6 h-6" />
        <span>Drop your vocal file here</span>
        <input
          type="file"
          ref={ref}
          className="hidden"
          // 5. add onChange handler
          onChange={handleChange}
        />
      </div>
      {/* 6. display selected files */}
      {!!selectedFiles.length && (
        <div className="p-4 mt-4 bg-violet-50 overflow-hidden text-ellipsis">
          <p>Selected Files:</p>
          {selectedFiles.map((file, i) => {
            return (
              <span key={i} className="text-violet-500 whitespace-nowrap">
                {file.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomFileInput;
