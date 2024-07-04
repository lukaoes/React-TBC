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
