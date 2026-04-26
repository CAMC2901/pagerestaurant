# Fusion Gourmet - Gastronomic Festival Landing Page

## Description
Fusion Gourmet is a responsive landing page developed as the final project for the HTML and CSS module. It represents a high-end gastronomic festival website that showcases culinary events, guest chefs, a photo gallery, and reservation functionality. The site was built with elegance and modernity in mind, using a sophisticated color palette and advanced CSS techniques.

## Technologies Used
- HTML5 - Semantic structure with proper use of `<header>`, `<main>`, `<section>`, `<nav>`, and `<footer>` tags
- CSS3 - Advanced styling including Flexbox, Grid Layout, animations, transitions, and media queries
- JavaScript (Vanilla) - Interactive features such as carousels, modals, zoom effects, and form validation
- Google Fonts - Cormorant Garamond typeface for elegant typography
- Google Maps Embed API - Event location map embedded in the footer

## Project Structure
pagerestaurant/
├── index.html           Main HTML file with all page sections
├── style.css            Complete stylesheet with all component styles
├── script.js            JavaScript for interactivity and dynamic features
├── logorestaurant.png   Festival logo used in header and footer
├── menu.png             Menu image displayed in the Menu section
├── facebook.png         Facebook social media icon
├── instagram.png        Instagram social media icon
├── x.png                X (Twitter) social media icon
├── tiktok.png           TikTok social media icon
└── README.md            Project documentation
## Page Sections
- **Header** - Sticky navigation with logo and hamburger menu for mobile
- **Hero** - Full-screen section with background image, welcome message, and reservation CTA button
- **Events** - HTML table (`thead`, `tbody`, `th`, `td`) with the full event schedule
- **About** - Festival description, values list (`ul`/`li`), and food photography
- **Gallery** - Automatic infinite-scroll photo carousel using CSS animations
- **Chefs** - Interactive carousel with 5 guest chef cards and hover focus effect
- **Menu** - Menu image with click-to-zoom overlay
- **Footer** - 3-column Grid layout with social icons, logo, Google Maps, and sponsor logos

## CSS Features
- CSS Custom Properties (variables) for consistent color palette
- Flexbox for header, navigation, carousels, and social icons
- CSS Grid for footer layout and social media icon container
- CSS Animations (`@keyframes`) for the automatic photo gallery
- CSS Transitions for hover effects on buttons, cards, and icons
- `position: sticky` on the header for persistent navigation
- `background-attachment: fixed` on the hero for a parallax effect
- `::before` pseudo-element for the dark overlay on the hero

## Responsive Design
The site adapts to all screen sizes using media queries (`max-width: 768px`):
- Navigation collapses into a hamburger menu (CSS-only checkbox toggle)
- Hero section reduces padding and image size
- About images stack vertically
- Chef cards reduce in width
- Footer switches from 3-column grid to single column
- Typography scales down proportionally

## How to Run Locally

**Option 1 - Direct file open:**
Open `index.html` directly in any modern web browser (Chrome, Firefox, Edge, Safari).

**Option 2 - Live Server (recommended):**
1. Install the "Live Server" extension in Visual Studio Code
2. Open the project folder in VS Code
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. The site will open at `http://127.0.0.1:5500`

## Author
- GitHub: CAMILO ANDRES CORONADO BARRAZA
- Module: HTML & CSS
