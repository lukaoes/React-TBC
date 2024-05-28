"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../../api";
import { changePictureAction } from "../../actions";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const { user } = useUser();
  const sub = user?.sub;

  useEffect(() => {
    if (blob && sub) {
      changePictureAction(sub, blob?.url);
    }
  }, [sub, blob]);

  return (
    <div className="upload-image-container">
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
        <label htmlFor="file-upload" className="custom-file-upload">
          Change Picture
        </label>
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          required
          id="file-upload"
          style={{ display: "none" }}
          onChange={() => {
            // Show the button when a file is selected
            const hasFile =
              inputFileRef.current?.files &&
              inputFileRef.current?.files.length > 0;
            if (hasFile) {
              inputFileRef.current?.parentNode
                ?.querySelector("button")
                ?.classList.remove("hidden");
            }
          }}
        />
        <button type="submit" className="hidden">
          Upload
        </button>
      </form>
    </div>
  );
}
