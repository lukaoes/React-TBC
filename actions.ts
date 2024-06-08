"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL, deleteUser } from "./api";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);

  await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
  revalidatePath("/admin/add");

  // return response
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function editUser(id: number, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  await fetch(
    `${BASE_URL}/api/edit-user/${id}?name=${name}&email=${email}&age=${age}`,
    {
      method: "PUT",
    }
  );

  revalidatePath("/admin");
}

export const handleProductRemove = async (
  productId: string,
  userId: string
) => {
  await fetch(`${BASE_URL}/api/cart/single-remove`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      productId,
    }),
  });
  revalidatePath("/cart");
};

export const handleQuantityChange = async (
  productId: string,
  quantityChange: number,
  userId: string
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/add-cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        productId,
        quantity: quantityChange,
      }),
    });
    revalidatePath("/cart");

    if (response.ok) {
      const inputElement = document.getElementById(
        `qty-${productId}`
      ) as HTMLInputElement;
      if (inputElement) {
        const currentValue = parseInt(inputElement.value);
        inputElement.value = (currentValue + quantityChange).toString();
      }
    } else {
      console.error("Error updating quantity:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
};

export const handleAddToCart = async (productId: string, userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/cart/add-cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        productId: productId,
        quantity: 1,
      }),
    });
    revalidatePath("/");

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export async function getPictureAction(sub: string) {
  const response = await fetch(BASE_URL + "/api/users/get-user-picture/", {
    method: "POST",
    body: JSON.stringify({ sub }),
  });
  const data = await response.json();
  return data.response;
}
export async function changePictureAction(sub: string, picture: string) {
  await fetch(BASE_URL + "/api/users/change-user-picture/", {
    method: "PUT",
    body: JSON.stringify({ sub, picture }),
  });
  revalidatePath("/profile");
}

export async function addAdvertisement(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/products/add-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export async function addCampsite(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/campsites/add-campsite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export async function sendContactMessage(formData: any) {
  try {
    const res = await fetch(BASE_URL + "/api/contact/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data) {
      revalidatePath("/contact");
    }
  } catch (error) {
    console.error("Error submitting message:", error);
  }
}

export async function changeNicknameAction(sub: string, nickname: string) {
  await fetch(BASE_URL + "/api/users/change-user-nickname/", {
    method: "PUT",
    body: JSON.stringify({ sub, nickname }),
  });
  revalidatePath("/profile");
}

export async function getNicknameAction(sub: string) {
  const response = await fetch(BASE_URL + "/api/users/get-user-nickname/", {
    method: "POST",
    body: JSON.stringify({ sub }),
  });
  const data = await response.json();
  return data.response;
}

export async function addAddressAction(formData: any) {
  try {
    const response = await fetch(`${BASE_URL}/api/address/save-address`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      revalidatePath("profile/address");
      const data = await response.json();
      console.log("Address added:", data);
    } else {
      console.error("Error adding address", response.statusText);
    }
  } catch (error) {
    console.error("Error adding address", error);
  }
}

export async function getAddyAction(sub: string) {
  const response = await fetch(BASE_URL + "/api/address/get-addy/", {
    method: "POST",
    body: JSON.stringify({ sub }),
  });
  const data = await response.json();
  return data.response;
}

export async function deleteAddyAction(sub: string) {
  const response = await fetch(BASE_URL + "/api/address/delete-addy/", {
    method: "DELETE",
    body: JSON.stringify({ sub }),
  });
  revalidatePath("profile/address");

  const data = await response.json();
  return data.response;
}

export const updateAddyAction = async (sub: string, updatedData: any) => {
  const response = await fetch(BASE_URL + "/api/address/edit-addy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sub, ...updatedData }),
  });

  if (!response.ok) {
    throw new Error("Failed to update address");
  }

  const data = await response.json();
  return data;
};

export async function getUserProductsDisplay() {
  const response = await fetch(
    BASE_URL + "/api/products/get-user-products-display",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  const products = data.users.rows;

  return products;
}

export async function getSingleProduct(id: string) {
  const response = await fetch(
    `${BASE_URL}/api/products/get-single-product/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  const product = data.product.rows;

  return product;
}

export async function getSimilarProducts(category: string, excludedId: number) {
  const response = await fetch(
    BASE_URL + "/api/products/get-similar-by-category",
    {
      method: "POST",
      body: JSON.stringify({ category, excludedId }),
    }
  );
  const data = await response.json();
  return data;
}

export const updateProductAction = async (updatedData: any) => {
  try {
    const response = await fetch(BASE_URL + "/api/products/edit-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to update product");
    }
    revalidatePath(`/`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export async function deleteSingleProduct(id: number) {
  const response = await fetch(BASE_URL + "/api/products/delete-product/", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidatePath("/products");

  const data = await response.json();
  return data.response;
}

export async function getSingleBlog(id: string) {
  const response = await fetch(`${BASE_URL}/api/blog/get-single-blog/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();

  const blog = data.blog.rows;

  return blog;
}

export async function getBlogDisplay() {
  const response = await fetch(BASE_URL + "/api/blog/get-blog-display", {
    cache: "no-store",
  });
  const data = await response.json();

  const products = data.users.rows;

  return products;
}

export async function addBlogPost(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/blog/add-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      revalidatePath("/blog");
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export const updateBlogAction = async (blogData: any) => {
  const response = await fetch(`${BASE_URL}/api/blog/edit-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  revalidatePath("/");

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.error || "Failed to update blog";
    throw new Error(errorMessage);
  }
};

export async function deleteBlog(id: number) {
  const response = await fetch(BASE_URL + "/api/blog/delete-blog/", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  revalidatePath("/");

  const data = await response.json();
  return data.response;
}

export async function addBlogComment(formData: any) {
  try {
    const response = await fetch(BASE_URL + "/api/blog/add-blog-comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      revalidatePath("/blog");
      return await response.json();
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Submission failed");
  }
}

export async function getBlogComments(id: string) {
  const response = await fetch(`${BASE_URL}/api/blog/get-blog-comments/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();

  const comments = data.comments.rows;

  return comments;
}
