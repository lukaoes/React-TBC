"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../../api";
import { changePictureAction } from "../../actions";

interface AvatarUploadPageProps {
  sid: string;
}

export default function AvatarUploadPage({ sid }: AvatarUploadPageProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  useEffect(() => {
    if (blob && sid.length > 0) {
      changePictureAction(sid, blob?.url);
    }
  }, [sid, blob]);

  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `${BASE_URL}/api/avatar/upload?filename=${file.name}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
