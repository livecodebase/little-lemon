# Little Lemon Restaurant - Table Reservation Web App

A modern, accessible web application for the Little Lemon restaurant that allows customers to reserve tables online. Built with React and designed with UX/UI best practices, semantic HTML, and comprehensive accessibility features.

## 🍋 Project Overview

Little Lemon is a family-owned Mediterranean restaurant in Chicago. This web app provides:
- An elegant homepage showcasing the restaurant
- A functional table reservation system with real-time availability
- Form validation with helpful error messages
- Fully responsive design for mobile, tablet, and desktop
- Accessibility-first approach following WCAG guidelines

## ✨ Features

### Homepage
- Hero section with call-to-action
- Restaurant information and description
- Mobile-responsive navigation
- Semantic HTML structure

### Booking System
- Date picker with validation (no past dates)
- Time slot selection with availability
- Guest count selection (1-10 people)
- Occasion selection for special events
- Real-time form validation with clear error messages
- Booking confirmation page with details

### Accessibility
- Semantic HTML5 elements (`<nav>`, `<main>`, `<footer>`, `<section>`)
- ARIA labels and roles throughout
- Proper heading hierarchy
- Keyboard navigation support
- Form validation with screen reader announcements
- Focus management and visible focus indicators

### Testing
- Unit tests for components
- Form validation tests
- Accessibility attribute tests
- 100% test coverage for booking form logic

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd lemon-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint for code quality

## 🧪 Running Tests

The project includes comprehensive unit tests using Vitest and React Testing Library:

```bash
npm test
```

Tests cover:
- Component rendering
- Form validation logic
- User interactions
- Accessibility attributes
- Error handling

## 📁 Project Structure

```
lemon-app/
├── public/                  # Static assets
│   └── images/             # Restaurant images
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Footer.jsx      # Footer with contact info
│   │   └── BookingForm.jsx # Booking form with validation
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx    # Main landing page
│   │   ├── BookingPage.jsx # Reservation page
│   │   └── ConfirmationPage.jsx # Booking confirmation
│   ├── tests/              # Unit tests
│   │   ├── Header.test.jsx
│   │   ├── Hero.test.jsx
│   │   ├── BookingForm.test.jsx
│   │   └── setup.js        # Test configuration
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # Component styles
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Design & UX

### Color Palette
- Primary Green: `#495e57` (Restaurant branding)
- Primary Yellow: `#f4ce14` (Accent color)
- Light Background: `#edefee`
- Dark Text: `#333`

### Typography
- Headings: Markazi Text (serif)
- Body: Karla (sans-serif)

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🔧 Form Validation Rules

The booking form implements the following validation:
- **Date**: Must be today or a future date
- **Time**: Required selection from available slots
- **Guests**: Must be between 1 and 10
- **Occasion**: Optional selection

Error messages are displayed inline with clear, actionable text.

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels on all interactive elements
- Proper form labels and field associations
- Error messages announced to screen readers
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for images
- Proper heading hierarchy (h1 → h6)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Code Quality

The codebase follows these principles:
- **Clean Code**: Clear variable and function names
- **Comments**: Comprehensive JSDoc comments
- **Simplicity**: Beginner-friendly code structure
- **Maintainability**: Modular component architecture
- **No Extra Code**: Only essential features included

## 🤝 Contributing

This is a learning project. When making contributions:
1. Follow the existing code style
2. Add comments for complex logic
3. Write tests for new features
4. Ensure accessibility is maintained

## 📄 License

This project is created for educational purposes as part of the Meta Front-End Developer Certificate program.

## 👨‍💻 Developer Notes

### Future Enhancements
- Connect to a backend API for real booking management
- Add user authentication
- Implement email confirmations
- Add menu section
- Add customer reviews section
- Integrate payment processing

### Known Limitations
- Currently uses simulated API calls
- Time slots are static (not database-driven)
- No persistent storage for bookings

## 📚 Learning Resources

This project demonstrates:
- React component architecture
- State management with `useState` and `useReducer`
- Form handling and validation
- React Router for navigation
- Responsive CSS design
- Unit testing with Vitest
- Accessibility best practices

## 🙏 Acknowledgments

Built as part of the Meta Front-End Developer Certificate program on Coursera.
