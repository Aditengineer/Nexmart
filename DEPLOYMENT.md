# Nexmart E-Commerce Application

A modern, responsive e-commerce web application built with React, Vite, and React Router. Features a unique teal and coral color palette with comprehensive shopping functionality.

## Features

- **Homepage** - Hero banner, product categories, featured products, newsletter signup
- **Product Search & Filtering** - Real-time search with price range and rating filters
- **Product Details** - Full product information with images, specifications, and pricing
- **Shopping Cart** - Add/remove products, quantity management, persistent storage
- **Checkout** - Multi-step checkout flow with shipping and payment simulation
- **User Authentication** - Login/Register with mock Google OAuth integration
- **Order History** - View past orders with order details
- **Responsive Design** - Mobile, tablet, and desktop layouts
- **Toast Notifications** - User feedback for actions
- **Mock Data** - 36 products across 6 categories (Electronics, Fashion, Home, Books, Sports, Toys)

## Tech Stack

- **Frontend Framework**: React 18+ with Vite
- **Routing**: React Router v6
- **State Management**: React Context API with localStorage persistence
- **Styling**: CSS with CSS custom properties (variables)
- **Build Tool**: Vite (fast, modern bundler)

## Color Palette

- **Primary**: #006D77 (Teal)
- **Secondary**: #E29578 (Coral)
- **Background**: #EDF6F9 (Light off-white)
- **Text**: #333333 (Charcoal)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/indestrial-tra.git
   cd indestrial-tra
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Button, Input, Modal, Toast, Badge, Card, etc.
│   ├── layout/         # Header, Footer components
│   ├── product/        # ProductCard, ProductGrid, Filters
│   ├── cart/           # CartItem, CartSummary
│   ├── checkout/       # CheckoutSteps, ShippingForm, PaymentForm
│   └── auth/           # LoginForm, RegisterForm
├── pages/              # Page components
│   ├── HomePage
│   ├── SearchPage
│   ├── ProductDetailPage
│   ├── CartPage
│   ├── CheckoutPage
│   ├── OrderHistoryPage
│   └── AuthPages
├── context/            # React Context for state management
│   ├── CartContext.jsx
│   └── AuthContext.jsx
├── hooks/              # Custom React hooks
│   └── useCart.js
├── utils/              # Utility functions and mock data
│   └── mockData.js
└── styles/             # Global styles
    └── index.css
```

## Key Components

### Cart Management

- Add/remove products from cart
- Update quantities
- Persistent storage with localStorage
- Calculate totals with tax

### Authentication

- Email/password login and registration
- Mock Google OAuth integration
- User profile dropdown
- Session persistence

### Checkout Flow

1. Review order items and total
2. Enter shipping address
3. Select payment method
4. Order confirmation

### Search & Filtering

- Real-time product search
- Filter by price range (0-1000)
- Filter by minimum rating (1-5 stars)
- Sort by newest, price (asc/desc), or rating

## Deployment Options

### GitHub Pages (Recommended for Static Sites)

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json**

   ```json
   {
     "homepage": "https://YOUR-USERNAME.github.io/indestrial-tra/",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Vercel (Easiest for Vite Apps)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Sign up at [vercel.com](https://vercel.com)**

3. **Click "New Project" and import your GitHub repository**

4. **Vercel will auto-detect Vite configuration**

5. **Click "Deploy" - your app is live!**

### Netlify

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Sign up at [netlify.com](https://netlify.com)**

3. **Click "New site from Git"**

4. **Connect your GitHub account and select repository**

5. **Build settings:**

   - Build command: `npm run build`
   - Publish directory: `dist`

6. **Deploy**

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Nexmart
```

## Mock Data

The application uses mock data with 36 products across 6 categories:

- Electronics (laptops, phones, tablets)
- Fashion (clothing, accessories)
- Home (furniture, decor)
- Books (various genres)
- Sports (equipment, gear)
- Toys (games, puzzles)

All mock data is stored in `src/utils/mockData.js` and includes:

- Product details (name, price, rating, description, specs)
- Search functionality
- Filter operations
- Mock API calls with realistic delays

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Real backend API integration
- Payment gateway integration (Stripe, PayPal)
- User reviews and ratings
- Wishlist functionality
- Product recommendations
- Advanced filtering with multiple categories
- Email notifications
- Admin dashboard

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com)

---

**Live Demo**: [View on Vercel/Netlify/GitHub Pages]

**Repository**: [GitHub Link]
