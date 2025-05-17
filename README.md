# SoftSell - Software License Resale Platform

A responsive, modern, single-page marketing website for a fictional software resale startup called SoftSell. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## Features Implemented

- 📱 **Fully Responsive Design**: Optimized for all screen sizes from mobile to desktop
- 🌙 **Dark/Light Mode**: Theme toggle with system preference detection and local storage persistence
- 💫 **Smooth Animations**: Subtle entrance animations and hover effects using Framer Motion
- 🖼️ **Modern UI**: Clean, professional design with gradients, shadows, and micro-interactions
- 📝 **Form Validation**: Client-side validation with error messages and success confirmation
- 🔍 **SEO Optimized**: Proper meta tags and OpenGraph data for better discoverability
- 🤖 **AI Chat Widget**: Interactive floating chat widget powered by LLaMA via GROQ API

## Page Sections

1. **Header**: Logo, navigation links, and theme toggle
2. **Hero**: Eye-catching headline, subheading, and primary CTA with animated elements
3. **How It Works**: 3-step process with icons and staggered animations
4. **Why Choose Us**: 4 key benefits with hover effects and icon illustrations
5. **Testimonials**: Customer reviews with ratings and animated cards
6. **Contact Form**: Lead capture form with validation and success feedback
7. **AI Chat Widget**: Floating chat assistant to answer visitor questions

## Design Decisions

### Color Palette
- Primary: Blue (#2563eb) to Cyan (#0891b2) gradient
- Accents: Yellow (#facc15) for ratings, Green (#22c55e) for success states
- Dark mode: Rich dark backgrounds (#0f172a) with lighter text for readability
- Light mode: Clean white backgrounds with dark text for maximum contrast

### Typography
- Font Family: Inter (clean, modern sans-serif)
- Headings: Bold, with gradient text highlights for emphasis
- Body: Optimized for readability with proper line height and spacing

### UI Elements
- Cards with subtle shadows and hover effects
- Gradient buttons with micro-interactions
- Custom form inputs with validation states
- Animated illustrations and icons
- Floating chat widget with smooth animations

## AI Chat Feature

The website includes an interactive AI chat widget powered by LLaMA model via the GROQ API:

- **Floating Widget**: Positioned in the bottom-right corner
- **Persistent State**: Chat history and open/closed state are saved in localStorage
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Elegant transitions when opening/closing
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error display if API calls fail

### Setup AI Chat

1. Create a `.env.local` file in the root directory
2. Add your GROQ API key: `GROQ_API_KEY=your_api_key_here`
3. Get an API key from [GROQ Console](https://console.groq.com/)

## Time Spent (Estimates)

- Project Setup & Structure: 30 minutes
- Theme Implementation: 45 minutes
- Header Component: 30 minutes
- Hero Section: 1 hour
- How It Works Section: 45 minutes
- Why Choose Us Section: 45 minutes
- Testimonials Section: 45 minutes
- Contact Form with Validation: 1.5 hours
- AI Chat Widget: 2 hours
- Animations & Polish: 1 hour
- Testing & Fixes: 1 hour

Total: ~9.5 hours

## Running the Project

```bash
# Install dependencies
npm install

# Create .env.local file with your GROQ API key
# GROQ_API_KEY=your_api_key_here

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
