# EzoEzo

Ezoezo is a comprehensive platform designed to facilitate the buying, selling, and renting of products and campsites across cities in Georgia. Whether you're looking to rent out your yard for camping, purchase new or used items, or find a campsite, EzoEzo offers a user-friendly and efficient experience.

## Features

### Landing Page
- **Overview**: Quickly understand what EzoEzo does.
- **Latest Listings**: View the latest products and campsites.

### Products
- **Filtering**: Filter by price, type (used, new, etc.), category, and location.
- **Sorting and Search**: Sort products and use the search functionality to find specific items.
- **Single Product Page**: Detailed information and images of the product, social media sharing, and similar product recommendations.
- **User Profile**: Click on the seller's profile picture or username to view their page.
- **Language Support**: Supports Georgian and English with dynamic language switching.
- **Metadata**: Language-specific metadata for SEO.
- **Edit and Delete**: Only authors and admins can edit or delete products.
- **Cart Functionality**: Add products to your cart.

### Campsites
- **Campsites Page**: Displays all available campsites with search and detailed filtering.
- **Campsite Cards**: Basic information, including guest types (tent, caravan, car, bicycle).
- **Single Campsite Page**: Detailed information, amenities, nearby activities, Google Maps location, reviews, and social media sharing.
- **Reviews**: Users can write reviews with images, which can be deleted by the author or admin.
- **Edit and Delete**: Campsites can be edited or deleted by the author or admin.

### Blog
- **Blog Page**: Browse blog cards with titles, authors, and dates. Filter by categories and search for specific blogs.
- **Add Blog**: Authorized users can add blogs using Markdown, which converts to JSX.
- **Single Blog Page**: Edit and remove options for authors and admins, social media sharing, and a 5-star review system with image attachments.

### Contact
- **Contact Page**: Users can submit queries that are stored in the database and accessible to the admin.

### Cart
- **Cart Page**: View products added to the cart, adjust quantities, and proceed to checkout.
- **Stock Management**: Quantity adjustments are limited by available stock.
- **Address Requirement**: Users must add an address in their profile settings before purchasing.
- **Stripe Integration**: Redirect to Stripe for payment processing and view order details post-purchase.

### User Profiles
- **User Page**: View user activities, blogs, products, campsites, and reviews.
- **Profile Page**: Available only to logged-in users for nickname and profile picture updates.
- **Address Management**: Add, remove, or edit shipping addresses.
- **Orders**: View, refund, and see detailed order information.

### Admin Panel
- **Messages**: View messages from the contact page.
- **Management**: Admin can modify or delete products, blogs, and campsites.
- **User List**: Admin can update user nicknames and profile pictures.
- **Order Management**: View detailed order information, cancel orders, and view invoices.

### Header and Navigation
- **Profile Menu**: Add new products or campsites via the profile dropdown menu.
- **Advanced Search**: Choose to search blogs, campsites, or products with autofill suggestions.

### 404 Page
- **Custom 404**: A beautifully designed 404 page.

## SEO
Each page has English and Georgian metadata and title. Each single product page has that product's image as OpenGraph, product description as metadata, and product title as title. The same applies for campsites and blogs.

The site includes a `robots.txt` file that instructs search crawlers on what not to crawl, such as the admin page. It also has a sitemap that is automatically updated when new products, blogs, campsites, or users are added, informing crawlers of these updates.

## Technical Details
- **Languages**: Georgian and English.
- **Themes**: Dark and light mode.
- **Technologies**: PostgreSQL, Next.js 14, SCSS.
- **Authentication**: Auth0.
- **Markdown Conversion**: markdown-to-jsx.
- **Internationalization**: next-international.
- **Image Zoom**: react-image-lightbox.
- **Sliders**: Swiper.
- **Payment Processing**: Stripe.
- **Protected Routes**: Admin access is restricted (contact for admin access).
- **Responsive Design**: Fully responsive UX, designed in Figma **by me**.

EzoEzo is more than just a marketplace!


## Landing Page

[![home.png](https://i.postimg.cc/T1vVyM8z/home.png)](https://postimg.cc/2bTbJtSG)

## Products Page

[![screencapture-ezoezo-vercel-app-ge-products-2024-07-04-19-24-20.png](https://i.postimg.cc/yxKR1mcB/screencapture-ezoezo-vercel-app-ge-products-2024-07-04-19-24-20.png)](https://postimg.cc/9Rx01qLN)

## Single Product Page

[![screencapture-ezoezo-vercel-app-ge-products-32-2024-07-04-19-25-30.png](https://i.postimg.cc/vTG1FQwZ/screencapture-ezoezo-vercel-app-ge-products-32-2024-07-04-19-25-30.png)](https://postimg.cc/CB6MbpK3)

## Campsites Page

[![campsites.png](https://i.postimg.cc/qv1x15nK/campsites.png)](https://postimg.cc/pmnjTksV)

## Single Campsite Page

[![screencapture-ezoezo-vercel-app-ge-campsites-24-2024-07-04-19-32-03.png](https://i.postimg.cc/N0QZHStr/screencapture-ezoezo-vercel-app-ge-campsites-24-2024-07-04-19-32-03.png)](https://postimg.cc/k2hjrjBn)

## Blog

[![blog.png](https://i.postimg.cc/15cHqt3J/blog.png)](https://postimg.cc/9r0Z3cT7)

## Single Blog Page

[![single-Blog.png](https://i.postimg.cc/c1f7pHw0/single-Blog.png)](https://postimg.cc/PNr8ZdSR)

## Contact

[![contact.png](https://i.postimg.cc/Qd8qk3Bs/contact.png)](https://postimg.cc/Cz2DS9H6)

## Cart

[![cart.png](https://i.postimg.cc/28fGyvr1/cart.png)](https://postimg.cc/jCZPkDWT)

## User Public Profile Page

[![user-Profile.png](https://i.postimg.cc/9Qgydq5t/user-Profile.png)](https://postimg.cc/5XvH1yt6)

## User Profile Settings Page

[![profile.png](https://i.postimg.cc/PqNz9QzR/profile.png)](https://postimg.cc/7C82T7R3)

[![profile-Address.png](https://i.postimg.cc/nL5YJ93c/profile-Address.png)](https://postimg.cc/xkvbG8rW)

[![profile-Orders.png](https://i.postimg.cc/Pxwbrf7b/profile-Orders.png)](https://postimg.cc/tZ9nBbp7)

## Add Page

[![add.png](https://i.postimg.cc/wBbFjGjz/add.png)](https://postimg.cc/GBGvMzDg)

## Add Campsite Page

[![add-Campsite.png](https://i.postimg.cc/Y0Qx82f2/add-Campsite.png)](https://postimg.cc/rRFWwkP7)

## Add Product Page

[![add-Product.png](https://i.postimg.cc/C13Njn86/add-Product.png)](https://postimg.cc/CB4k01mj)

## 404 Page

[![404.png](https://i.postimg.cc/13yZGfct/404.png)](https://postimg.cc/TpNSG2sM)


## SEO

[![opengraph1.png](https://i.postimg.cc/L6w1hFzN/opengraph1.png)](https://postimg.cc/ppQT17cF)

[![opengraph2.png](https://i.postimg.cc/wBdRc54N/opengraph2.png)](https://postimg.cc/gxN0GhWc)

[![opengraph3.png](https://i.postimg.cc/g0qXMw1T/opengraph3.png)](https://postimg.cc/940Q0fmd)

[![opengraph4.png](https://i.postimg.cc/pLjnFcCx/opengraph4.png)](https://postimg.cc/K1ZzXNCs)

