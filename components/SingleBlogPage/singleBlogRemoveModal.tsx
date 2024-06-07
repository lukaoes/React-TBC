"use client";

import { useRouter } from "next/navigation";
import { deleteBlog } from "../../actions";

interface EditModalProps {
  blogPost: any;
  onClose: () => void;
}

const SingleBlogRemoveModal = ({ blogPost, onClose }: EditModalProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteBlog(blogPost.id);
      router.push("/blog");
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <div className="single-product-edit-modal">
      <div className="single-product-edit-content">
        <h2>ნამდვილად გსურთ ბლოგის წაშლა?</h2>
        <p>ამ ქმედებას უკან ვერ დააბრუნებთ და ბლოგის აღდგენაც ვერ მოხდება.</p>
        <div className="single-prod-remove-modal">
          <button onClick={onClose}>გათიშვა</button>
          <button onClick={handleDelete}>წაშლა</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogRemoveModal;
