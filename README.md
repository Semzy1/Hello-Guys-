# Modern Login Page

A modern, feature-rich login/signup page with dark mode support, social media authentication, and interactive UI elements. Built with pure HTML, CSS, and JavaScript.

![Dark Mode Preview](dark-mode-preview.png)

## ✨ Features

### Core Features
- 🌓 Dark/Light mode with persistent theme preference
- 🔄 Smooth transitions between Sign In and Sign Up forms
- 🎨 Modern UI with dynamic gradient backgrounds
- 📱 Fully responsive design for all devices

### Authentication Options
- 📧 Email/Password authentication with validation
- 🔑 Social Media Integration:
  - Google login with branded UI
  - Facebook authentication flow
  - GitHub OAuth simulation
  - LinkedIn sign-in option
  - Loading states & success feedback
  - Error handling for all providers

### UI/UX Features
- 🎭 Theme toggle with smooth transitions
- 🎯 Interactive social media buttons with hover effects
- ✨ Micro-interactions and loading states
- 🔒 Form validation with user feedback
- 🎨 CSS animations and transitions

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Open `index.html` in your browser or use Live Server in VS Code

## 💡 Usage Guide

### Theme Switching
- Click the moon/sun icon in the top-right corner
- Theme preference is automatically saved
- Smooth transition between light/dark modes

### Authentication Methods

#### Email Sign Up
1. Click "Sign Up" button on the welcome screen
2. Fill in required fields:
   - Name (2+ characters)
   - Valid email address
   - Password (6+ characters)
3. Submit form to see validation in action

#### Email Sign In
1. Enter registered email
2. Provide password
3. Click "Sign In" to proceed
4. Use "Forgot Password?" for reset flow

#### Social Media Login
Click any social provider icon to see:
- Loading animation
- OAuth flow simulation
- Success/error states
- Branded success pages

### Form Validation
- Real-time email format validation
- Password strength requirements
- Name length verification
- Helpful error messages
- Loading states during submission

## 🔧 Technical Details

### Technologies
- HTML5 Semantic Elements
- CSS3 with Custom Properties
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Local Storage for Theme

### Key Components
- CSS Variables for theming
- Flexbox/Grid layouts
- CSS Transitions
- Event Delegation
- Async/Await Functions

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 Notes

- This is a frontend demo - authentication flows are simulated
- Social login buttons demonstrate UI/UX patterns
- Theme preference persists across sessions
- Responsive design works on all screen sizes

## 🔜 Planned Features

- System theme detection
- More color themes
- Enhanced animations
- Backend integration
- OAuth implementation
- Improved accessibility
- Unit tests