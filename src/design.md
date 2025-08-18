# Terra Pottery Studio - Design System Specification

## Overview
This document outlines the complete design system for the Terra Pottery Studio website, fdecd8r color palettes, typography, component specifications, and design patterns. This specification can be used to recreate the design in any codebase.

## Color Palette

### Primary Colors
- **secondary (Primary)**: Warm terracotta tones
  - `secondary-50`: #fef7f0
  - `secondary-100`: #fdfdecd8recd8r
  - `secondary-200`: #fbd5b0
  - `secondary-300`: #f8b87d
  - `secondary-400`: #f59347
  - `secondary-500`: #f2751f
  - `secondary-600`: #e35d14
  - `secondary-700`: #bc4513
  - `secondary-800`: #963817
  - `secondary-900`: #7a3018
  - `secondary-950`: #42160a

### Secondary Colors
- **primary (Secondary)**: Muted green tones
  - `primary-50`: #f6f7f6
  - `primary-100`: #e3e7e3
  - `primary-200`: #c7d0c7
  - `primary-300`: #a3b1a3
  - `primary-400`: #7a8c7a
  - `primary-500`: #5f715f
  - `primary-600`: #4a5a4a
  - `primary-700`: #3d483d
  - `primary-800`: #333b33
  - `primary-900`: #2c322c
  - `primary-950`: #161a16

### Accent Colors
- **tertiary (Accent)**: Rich brown tones
  - `tertiary-50`: #faf6f1
  - `tertiary-100`: #f2e8d9
  - `tertiary-200`: #e4d0b3
  - `tertiary-300`: #d1b285
  - `tertiary-400`: #bb8f5a
  - `tertiary-500`: #a67c45
  - `tertiary-600`: #8f6639
  - `tertiary-700`: #745131
  - `tertiary-800`: #5f4330
  - `tertiary-900`: #4f392a
  - `tertiary-950`: #2a1e15

### CSS Custom Properties
```css
:root {
  --qwik-dark-blue: #006ce9;
  --qwik-light-blue: #18b6f6;
  --qwik-light-purple: #ac7ff4;
  --qwik-dark-purple: #713fc2;
  --qwik-dirty-black: #1d2033;
  --qwik-dark-background: #151934;
  --qwik-dark-text: #ffffff;
}
```

## Typography

### Font Families
- **Primary Sans**: `'Inter Variable'` with fallback to system sans-serif
- **Serif**: `'Playfair Display'` with fallback to system serif

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Text Sizes
- **Hero Headings**: 5xl (3rem) to 6xl (3.75rem)
- **Section Headings**: 4xl (2.25rem) to 5xl (3rem)
- **Subheadings**: 2xl (1.5rem) to 3xl (1.875rem)
- **Body Text**: Base (1rem) to xl (1.25rem)
- **Small Text**: xs (0.75rem) to sm (0.875rem)

## Background Patterns & Gradients

### Texture Pattern
```css
background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f2751f" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')
```

### Gradient Definitions
```css
/* secondary Gradient */
background: linear-gradient(135deg, #f2751f 0%, #bc4513 100%);

/* primary Gradient */
background: linear-gradient(135deg, #5f715f 0%, #3d483d 100%);

/* tertiary Gradient */
background: linear-gradient(135deg, #a67c45 0%, #745131 100%);

/* Multi-color Gradients */
background: linear-gradient(135deg, #f2751f 0%, #a67c45 50%, #5f715f 100%);
```

## Component Specifications

### 1. Hero Section

#### Background Layers
1. **Pottery Texture**: `bg-pottery-texture opacity-30`
2. **Primary Gradient**: `bg-gradient-to-br from-secondary-50/80 via-primary-50/60 to-tertiary-50/70`
3. **Secondary Gradient**: `bg-gradient-to-t from-secondary-100/20 via-transparent to-primary-100/30`

#### Floating Elements
- **Position**: Absolute positioned circles with blur effects
- **Animation**: `animate-float` with 6s duration, ease-in-out, infinite
- **Colors**: secondary, primary, and tertiary tones with 20-30% opacity
- **Sizes**: 16px to 32px diameter

#### Hero Content
- **Layout**: Two-column grid on desktop, stacked on mobile
- **Typography**: Large serif headings with gradient text
- **Buttons**: Rounded-full with gradient backgrounds and hover effects

### 2. Workshop Cards

#### Card Structure
```css
/* Card Container */
background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(95,113,95,0.3) 50%, rgba(242,117,31,0.3) 100%);
backdrop-filter: blur(8px);
border: 2px solid rgba(242,117,31,0.2);
border-radius: 1rem;
box-shadow: 0 10px 25px rgba(0,0,0,0.1);
```

#### Image Section
- **Aspect Ratio**: 16:9 or 4:3
- **Overlay**: `bg-gradient-to-t from-secondary-900/40 via-transparent to-transparent`
- **Badges**: Level indicators and spot availability

#### Content Section
- **Typography**: Serif headings, sans-serif body text
- **Spacing**: Consistent 1.5rem gaps
- **Icons**: 16px SVG icons with secondary-600 color

#### Interactive States
- **Hover**: Scale 105%, enhanced shadow
- **Focus**: Ring outline with secondary-500 color
- **Transition**: 300ms duration, ease-in-out

### 3. Review Cards

#### Card Design
```css
/* Review Card */
background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(95,113,95,0.3) 50%, rgba(242,117,31,0.3) 100%);
backdrop-filter: blur(8px);
border: 2px solid rgba(242,117,31,0.2);
border-radius: 1rem;
padding: 1.5rem;
```

#### Star Rating
- **Size**: 20px (w-5 h-5)
- **Active Color**: `text-yellow-400 fill-current`
- **Inactive Color**: `text-gray-300`

#### Typography
- **Quote**: Serif font, 18px, secondary-900 color
- **Author**: Bold, secondary-900 color
- **Date**: Small text, primary-500 color

### 4. FAQ Accordion

#### Accordion Item
```css
/* Accordion Container */
background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(95,113,95,0.3) 50%, rgba(242,117,31,0.3) 100%);
backdrop-filter: blur(8px);
border: 2px solid rgba(242,117,31,0.2);
border-radius: 1rem;
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
```

#### Category Badges
```css
/* Category Colors */
Care: bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 border-primary-300
General: bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-700 border-secondary-300
Shipping: bg-gradient-to-r from-tertiary-100 to-tertiary-200 text-tertiary-700 border-tertiary-300
Custom: bg-gradient-to-r from-secondary-100 to-tertiary-100 text-secondary-700 border-secondary-300
Workshops: bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 border-primary-300
```

#### Toggle Button
- **Icon**: Chevron down/up with rotation animation
- **Background**: Gradient circle with secondary/primary colors
- **Transition**: 300ms duration

### 5. Contact Form

#### Form Container
```css
/* Form Background */
background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(95,113,95,0.3) 50%, rgba(242,117,31,0.3) 100%);
backdrop-filter: blur(8px);
border: 2px solid rgba(242,117,31,0.2);
border-radius: 1.5rem;
padding: 2rem;
```

#### Input Fields
```css
/* Input Styling */
border: 2px solid rgba(242,117,31,0.2);
border-radius: 0.75rem;
background: rgba(255,255,255,0.5);
padding: 0.75rem 1rem;
transition: all 200ms ease-in-out;

/* Focus State */
focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-secondary-400
```

#### Submit Button
```css
/* Button Styling */
background: linear-gradient(135deg, #e35d14 0%, #a67c45 50%, #e35d14 100%);
color: white;
border-radius: 9999px;
padding: 0.75rem 2rem;
font-weight: 600;
transition: all 300ms ease-in-out;

/* Hover State */
hover:scale-105 hover:shadow-lg
```

### 6. Navigation Header

#### Header Structure
```css
/* Header Container */
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 2rem;
background: transparent;
```

#### Logo
- **Font**: Serif, bold, secondary-900 color
- **Size**: 20px (text-xl)

#### Navigation Links
```css
/* Link Styling */
color: white;
text-decoration: none;
transition: color 200ms ease-in-out;

/* Hover State */
hover:text-secondary-600
```

### 7. Call-to-Action Sections

#### CTA Container
```css
/* CTA Background */
background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(95,113,95,0.1) 50%, rgba(242,117,31,0.1) 100%);
backdrop-filter: blur(8px);
border: 1px solid rgba(242,117,31,0.2);
border-radius: 1.5rem;
padding: 2rem;
box-shadow: 0 20px 25px rgba(0,0,0,0.1);
```

#### Button Groups
- **Primary Button**: secondary gradient with white text
- **Secondary Button**: White background with secondary border and text
- **Hover Effects**: Scale 105%, enhanced shadow

## Animation Specifications

### Keyframe Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Animation Classes
- `animate-float`: 6s ease-in-out infinite
- `animate-spin-slow`: 3s linear infinite
- `animate-pulse-slow`: 4s cubic-bezier(0.4, 0, 0.6, 1) infinite

### Transition Durations
- **Fast**: 200ms
- **Standard**: 300ms
- **Slow**: 500ms

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Adaptations
- **Cards**: Single column, full width
- **Typography**: Reduced sizes (text-4xl → text-3xl)
- **Spacing**: Reduced padding and margins
- **Navigation**: Collapsible menu

### Tablet Adaptations
- **Cards**: 2-3 columns
- **Grid**: Responsive grid layouts
- **Typography**: Medium sizes

### Desktop Enhancements
- **Cards**: 4+ columns
- **Hover Effects**: Enhanced interactions
- **Animations**: More complex animations
- **Layout**: Multi-column content

## Accessibility

### Color Contrast
- **Text on Light**: Minimum 4.5:1 ratio
- **Text on Dark**: Minimum 4.5:1 ratio
- **Interactive Elements**: Clear focus indicators

### Focus States
```css
/* Focus Ring */
focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2
```

### Screen Reader Support
- **ARIA Labels**: All interactive elements
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images and icons

## Dark Mode Support

### Color Adaptations
- **Background**: Dark secondary tones
- **Text**: Light colors for contrast
- **Borders**: Darker border colors
- **Gradients**: Adjusted opacity for dark backgrounds

### Dark Mode Classes
```css
/* Dark Mode Overrides */
dark:bg-secondary-900
dark:text-secondary-100
dark:border-secondary-700
```

## Implementation Notes

### CSS Framework
- **Base**: Tailwind CSS
- **Typography**: @tailwindcss/typography plugin
- **Custom Colors**: Extended color palette
- **Custom Animations**: Extended animation utilities

### Browser Support
- **Modern Browsers**: Full support
- **Fallbacks**: Graceful degradation for older browsers
- **Progressive Enhancement**: Core functionality works without JavaScript

### Performance Considerations
- **CSS-in-JS**: Avoided for better performance
- **Image Optimization**: Responsive images with proper sizing
- **Animation Performance**: Hardware-accelerated transforms
- **Bundle Size**: Minimal CSS footprint

## File Structure Reference

### Key Files
- `tailwind.config.js`: Color palette and theme configuration
- `src/global.css`: Global styles and CSS custom properties
- `src/components/`: Individual component styles
- `public/fonts/`: Custom font files

### Component Organization
- **Layout Components**: Header, Footer, Layout
- **Content Components**: Hero, Cards, Forms
- **Interactive Components**: Carousels, Accordions, Buttons
- **Utility Components**: Icons, Loading states

This design system provides a complete specification for recreating the Terra Pottery Studio website with consistent styling, typography, and user experience across all components and pages. 