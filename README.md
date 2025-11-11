# Portfolio Website - Lefika Andrew Setuke

A modern, responsive portfolio website showcasing my work as a Software Developer, Cloud Security Enthusiast, and Cybersecurity Professional.

## 🚀 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Toggle between dark (navy blue/black) and light (light blue/white) themes
- **3D Effects**: Modern 3D transforms and animations using Framer Motion
- **Sections**:
  - Landing Page with floating profile image
  - About Me section
  - Tech Stack with skill level indicators
  - Projects showcase with GitHub and live demo links
  - Contact form with EmailJS integration
  - Downloadable CV option
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Modern Tech Stack**: React, Vite, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (for contact form):
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and set up a service
   - Create an email template
   - Update the credentials in `src/components/Contact.jsx`:
     ```javascript
     const SERVICE_ID = 'your_service_id';
     const TEMPLATE_ID = 'your_template_id';
     const PUBLIC_KEY = 'your_public_key';
     ```

4. Add your CV:
   - Place your CV PDF file in `public/cv/` directory
   - Name it `Lefika_Andrew_Setuke_CV.pdf` or update the path in `Contact.jsx`

5. Update personal information:
   - Replace placeholder content in all components with your actual information
   - Update social media links in `Landing.jsx`, `Navbar.jsx`, and `Footer.jsx`
   - Add your profile image in `Landing.jsx`
   - Update project information in `Projects.jsx`

## 🚀 Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Customization

### Colors
Update colors in `tailwind.config.js`:
- Dark mode: navy-dark, navy-light, navy-lighter
- Light mode: light-bg, light-secondary, light-blue
- Accents: accent-cyan, accent-blue

### Content
- **Landing Page**: Update in `src/components/Landing.jsx`
- **About Me**: Update in `src/components/About.jsx`
- **Tech Stack**: Update skills array in `src/components/TechStack.jsx`
- **Projects**: Update projects array in `src/components/Projects.jsx`
- **Contact**: Update contact info in `src/components/Contact.jsx`

### Profile Image
Replace the placeholder in `Landing.jsx`:
```jsx
<div className="w-full h-full bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20">
  {/* Replace with: */}
  <img src="/path-to-your-image.jpg" alt="Profile" className="w-full h-full object-cover" />
</div>
```

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

Lefika Andrew Setuke
- Email: lefikaasetuke@gmail.com
- GitHub: [Your GitHub](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

