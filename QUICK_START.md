# Quick Start Instructions

## Your Portfolio is Ready! 🎉

The development server is currently running at: **http://localhost:5173**

## Immediate Next Steps

### 1. View Your Portfolio
Open your browser and go to: http://localhost:5173

You should see:
- ✅ Landing page with animated elements
- ✅ Dark/Light mode toggle in the navigation
- ✅ Smooth scrolling between sections
- ✅ All sections: Home, About, Tech Stack, Projects, Contact

### 2. Test the Features
- Click the **theme toggle** button (sun/moon icon) in the navigation
- Scroll through all sections to see the animations
- Hover over project cards to see 3D effects
- Try the navigation links

### 3. Customize Your Content

#### Priority 1 - Essential Changes:
1. **Profile Image** - Replace the placeholder in `src/components/Landing.jsx` (line ~94)
2. **Social Links** - Update GitHub, LinkedIn, Twitter URLs in:
   - `src/components/Landing.jsx`
   - `src/components/Footer.jsx`
3. **Projects** - Replace sample projects with your real ones in `src/components/Projects.jsx`
4. **Contact Email** - Update in `src/components/Contact.jsx` (line 132)

#### Priority 2 - EmailJS Setup:
1. Go to https://www.emailjs.com and sign up
2. Create a service and template
3. Copy your credentials to `src/components/Contact.jsx` (lines 42-44)

#### Priority 3 - Add Your CV:
1. Place your CV PDF in: `public/cv/Lefika_Andrew_Setuke_CV.pdf`

### 4. Make It Your Own
- Update the **About Me** text with your personal story
- Adjust **Tech Stack** percentages to match your skills
- Customize **colors** in `tailwind.config.js` if desired
- Add your **own projects** with real GitHub and demo links

## Files to Edit

```
src/
├── components/
│   ├── Landing.jsx      ← Your intro & image
│   ├── About.jsx        ← About you section
│   ├── TechStack.jsx    ← Your skills & percentages
│   ├── Projects.jsx     ← Your projects (IMPORTANT!)
│   ├── Contact.jsx      ← Email & EmailJS setup
│   ├── Navbar.jsx       ← Social links
│   └── Footer.jsx       ← Social links
```

## Common Customizations

### Change Main Title
Edit `src/components/Landing.jsx` around line 45:
```jsx
<h1>Lefika Andrew Setuke</h1>  // Your name
<h2>Cloud Security Enthusiast</h2>  // Your title
```

### Update Projects
Edit `src/components/Projects.jsx` starting at line 11:
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', ...],
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
    image: 'gradient-1'
  },
  // Add more projects...
];
```

### Adjust Skill Levels
Edit `src/components/TechStack.jsx` starting at line 27:
```javascript
{ name: 'React.js', level: 90, icon: <FaReact /> }, // Change 90 to your level
```

## Deploy When Ready

### Quick Deploy to Vercel:
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial portfolio"
git push

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Click Deploy
# 5. Done! 🚀
```

## Need Help?

- 📖 Full setup guide: `SETUP_GUIDE.md`
- 📋 Project details: `README.md`
- 🎨 Tailwind config: `tailwind.config.js`

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

**Your portfolio has all the features you requested:**
✅ Landing page with floating image & title
✅ About Me section
✅ Tech Stack with percentage indicators
✅ Projects with GitHub & live links
✅ Contact form
✅ Download CV option
✅ Dark/Light mode (navy blue/black & light blue/white)
✅ 3D effects and animations
✅ Fully responsive

**Now make it yours!** 🎨
