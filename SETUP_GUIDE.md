# Portfolio Setup Guide

## Overview
Your portfolio website has been successfully set up with all the requested features! Here's what you need to know to customize and deploy it.

## ✅ What's Been Implemented

### 1. **Landing Page**
- Floating animated profile image with 3D effects
- Title: "My name is Lefika Andrew Setuke, cloud security enthusiast"
- Subtitle highlighting your roles: Software Developer, Cloud Architect, Cybersecurity Professional
- Social media links (GitHub, LinkedIn, Twitter)
- Smooth scroll indicator
- "Get In Touch" button

### 2. **About Me Section**
- Personal introduction highlighting your expertise
- Experience showcase
- Skills overview with key competencies
- 3D card effects and animations

### 3. **Tech Stack Section**
- Three categories: Frontend, Backend, and Tools & Cloud
- Animated progress bars showing skill levels (percentage)
- Technologies included:
  - **Frontend**: React.js, Next.js, JavaScript, TypeScript, Tailwind CSS
  - **Backend**: Node.js, Express.js, Python, MongoDB, PostgreSQL
  - **Tools & Cloud**: Git, Docker, AWS, Redis, Kubernetes
- Stats cards showing achievements

### 4. **Projects Section**
- 6 sample project cards with 3D hover effects
- Each project includes:
  - Project title and description
  - Technology stack tags
  - GitHub repository link
  - Live demo link
- Gradient backgrounds for visual appeal

### 5. **Contact Section**
- Functional contact form with validation
- EmailJS integration for receiving messages
- Download CV button
- Contact information display
- Form fields: Name, Email, Message
- Success/error status messages

### 6. **Additional Features**
- Dark/Light mode toggle
  - Dark mode: Navy blue (#0a192f) and black
  - Light mode: Light blue (#f0f9ff) and white
- Smooth scroll navigation
- Responsive design for all device sizes
- 3D effects and animations throughout
- Custom scrollbar styling
- Footer with quick links and social media

## 🎨 Color Scheme

### Dark Mode (Default)
- Background: Navy Dark (#0a192f)
- Secondary: Navy Light (#112240)
- Accent: Cyan (#64ffda) and Blue (#57cbff)

### Light Mode
- Background: Light Blue (#f0f9ff)
- Secondary: Light Secondary (#e0f2fe)
- Accent: Sky Blue (#0ea5e9)

## 📝 Next Steps - Customization

### 1. Update Personal Information

#### Landing Page (`src/components/Landing.jsx`)
- Add your actual profile image:
  ```jsx
  // Replace line ~94 with:
  <img src="/your-image.jpg" alt="Lefika Andrew Setuke" className="w-full h-full object-cover" />
  ```
- Update social media links (lines 73-91)

#### About Me (`src/components/About.jsx`)
- Customize the introduction paragraphs (lines 35-55)
- Update the experience years (line 77)
- Modify skills list if needed (lines 84-97)

#### Tech Stack (`src/components/TechStack.jsx`)
- Adjust skill percentages to match your actual proficiency (lines 27-61)
- Add or remove technologies as needed

#### Projects (`src/components/Projects.jsx`)
- Replace sample projects with your actual projects (lines 11-66)
- Update GitHub links and live demo URLs
- Add real project descriptions

#### Contact (`src/components/Contact.jsx`)
- Update your email address (line 132)
- Set up EmailJS credentials (lines 42-44) - see below

### 2. Set Up EmailJS (Contact Form)

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content
4. Copy your credentials and update `src/components/Contact.jsx`:
   ```javascript
   const SERVICE_ID = 'your_service_id_here';
   const TEMPLATE_ID = 'your_template_id_here';
   const PUBLIC_KEY = 'your_public_key_here';
   ```

### 3. Add Your CV

1. Place your CV PDF in: `public/cv/Lefika_Andrew_Setuke_CV.pdf`
2. Or update the path in `src/components/Contact.jsx` (line 123)

### 4. Update Social Media Links

Update these in multiple files:
- `src/components/Landing.jsx` (lines 73-91)
- `src/components/Footer.jsx` (lines 47-71)

Replace placeholder URLs with your actual profiles:
- GitHub: `https://github.com/your-username`
- LinkedIn: `https://linkedin.com/in/your-username`
- Twitter: `https://twitter.com/your-username`

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Opens at: http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live

### Option 2: Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Update vite.config.js with base URL
# Then deploy:
npm run deploy
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Images load as you scroll
3. **Code Splitting**: Vite handles this automatically
4. **Minification**: Production build is automatically minified

## 🔧 Troubleshooting

### Issue: Tailwind classes not working
- Make sure you have `@tailwind` directives in `src/index.css`
- Restart the dev server

### Issue: EmailJS not sending
- Check your service ID, template ID, and public key
- Ensure the email template variables match the form fields
- Check the browser console for errors

### Issue: Build errors
- Run `npm run build` to see detailed error messages
- Check for missing imports or typos

## 📚 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS v3** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **EmailJS** - Contact form backend
- **React Router DOM** - Navigation

## 🎨 Customizing Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'navy-dark': '#0a192f',     // Change these
  'accent-cyan': '#64ffda',   // to your preferred colors
  // ... more colors
}
```

## 📄 File Structure

```
portfolio/
├── public/
│   ├── cv/                 # Place your CV here
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Landing.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 💡 Tips for Success

1. **Keep it updated**: Regularly add new projects
2. **Use real images**: Replace placeholders with professional photos
3. **Test thoroughly**: Check on different devices and browsers
4. **SEO optimization**: Add meta tags in `index.html`
5. **Analytics**: Consider adding Google Analytics
6. **Performance**: Keep an eye on Lighthouse scores

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Replace the placeholder content with your actual information, add your projects, set up EmailJS, and you'll have a professional portfolio to showcase your work!

Need help? Check the README.md for more details or the component files for inline comments.

Good luck! 🚀
