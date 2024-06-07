export interface ProductsDisplay {
  id: number;
  type: string;
  category: string;
  subcategory: string;
  shoe_size: string;
  clothing_size: string;
  backpack_capacity: string;
  tent_capacity: string;
  main_photo: string;
  title_ge: string;
  description_ge: string;
  title_en: string;
  description_en: string;
  price: string;
  negotiable: boolean;
  location: string;
  created_at: string;
  condition: string;
}

export interface Product {
  id: number;
  user_id: string;
  type: string;
  category: string;
  subcategory: string;
  shoe_size: string;
  clothing_size: string;
  backpack_capacity: string;
  tent_capacity: string;
  main_photo: string;
  photo_urls: string[];
  title_ge: string;
  description_ge: string;
  title_en: string;
  description_en: string;
  price: string;
  negotiable: boolean;
  location: string;
  first_name: string;
  phone: string;
  created_at: string;
  quantity: string;
  condition: string;
}

export interface Blog {
  id: number;
  category: string;
  main_photo: string;
  blog_post: string;
  title: string;
  description: string;
  created_at: string;
}

export type BlogsDisplay = Blog[];
