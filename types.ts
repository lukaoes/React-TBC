export interface ProductsDisplay {
  [x: string]: any;
  map(
    arg0: (
      products: ProductsDisplay,
      index: number
    ) => import("react").JSX.Element
  ): import("react").ReactNode;
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
  map(
    arg0: (item: any, index: number) => import("react").JSX.Element
  ): import("react").ReactNode;
  id: number;
  category: string;
  main_photo: string;
  blog_post: string;
  title: string;
  description: string;
  created_at: string;
}

export type BlogsDisplay = Blog[];

export interface Comments {
  [x: string]: any;
  id: number;
  user_id: string;
  blog_id: string;
  comment: string;
  main_photo: string;
  rating: number;
  created_at: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  number: string;
  created_at: string;
  message: string;
}

export interface CampsitesDisplay {
  [x: string]: any;
  map: any;
  id: number;
  space_type: string;
  accepted_guests: string[];
  capacity: string;
  location: string;
  main_photo: string;
  size: string;
  name: string;
  amenities: string[];
  activities: string[];
  price: string;
  negotiable: boolean;
  description: string;
  descriptionen: string;
}

export interface Campsite {
  id: number;
  user_id: string;
  space_type: "nicepitch";
  accepted_guests: string[];
  capacity: string;
  location: string;
  main_photo: string;
  photo_urls: string[];
  size: string;
  name: string;
  amenities: string[];
  activities: string[];
  description: string;
  descriptionen: string;
  first_name: string;
  phone: string;
  price: string;
  negotiable: boolean;
  map: string;
}

export interface AddCampsite {
  user_id?: string;
  space_type: string;
  accepted_guests: string[];
  capacity: string;
  location: string;
  first_name: string;
  phone: string;
  main_photo: string;
  photo_urls: string[];
  size: number;
  name: string;
  amenities: string[];
  activities: string[];
  description: string;
  descriptionen: string;
  price: string;
  negotiable: boolean;
  map: string;
  [key: string]: any;
}

export interface Review {
  map: any;
  id: number;
  user_id: string;
  campsite_id: string;
  review: string;
  main_photo: string;
  recommended: boolean;
  created_at: string;
}
