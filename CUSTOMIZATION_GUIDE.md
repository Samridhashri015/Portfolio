# Customization Guide

## How to Personalize Your Portfolio

This guide will help you customize every section of your portfolio to match your personal information and projects.

## 1. Basic Information

### Update Personal Info in Navbar & Hero

**File:** `frontend/src/App.js`, `frontend/src/components/Navbar.js`, `frontend/src/components/Hero.js`

```javascript
// In Hero.js
<h1>Your Full Name</h1>
<p className="text-2xl md:text-3xl text-blue-500 font-semibold">Your Job Title</p>
<p>Your introduction text...</p>
```

### Update Across All Components

It's recommended to use the config file for consistency:

**File:** `frontend/src/config.js`

```javascript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your-email@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'Your City, Country'
};
```

## 2. About Section

**File:** `frontend/src/components/About.js`

### Update About Text

```javascript
<p className="mb-6 leading-relaxed">
  I am a [Your field] with [your experience]. 
  My passion is [what you're passionate about].
</p>
```

### Update Statistics

Find and modify the stats section:

```javascript
<div className="grid grid-cols-2 gap-6">
  <div className={...}>
    <h3 className="text-3xl font-bold text-blue-500 mb-2">5+</h3>
    <p>Programming Languages</p>
  </div>
  {/* Change the numbers and labels as needed */}
</div>
```

## 3. Skills Section

### Update Skill Categories

**File:** `frontend/src/components/Skills.js`

Option 1: Direct edit in component

```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    // Add or remove skills as needed
  },
  // Add more categories...
];
```

Option 2: Use config file (recommended)

**File:** `frontend/src/config.js`

```javascript
export const skills = {
  frontend: {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
  },
  // Add more categories...
};
```

Then import in component:

```javascript
import { skills } from '../config';

const skillCategories = [
  skills.frontend,
  skills.backend,
  // ...
];
```

## 4. Projects Section

### Add Your Projects

**File:** `frontend/src/components/Projects.js`

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief project description...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    highlights: ['Feature 1', 'Feature 2', 'Feature 3'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com'
  },
  // Add more projects...
];
```

### Project Structure Example

```javascript
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A full-featured e-commerce website with shopping cart and payment integration.',
  technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
  highlights: [
    'User authentication with JWT',
    'Shopping cart functionality',
    'Stripe payment integration',
    'Admin dashboard'
  ],
  github: 'https://github.com/samridha/ecommerce',
  demo: 'https://ecommerce-sample.vercel.app'
}
```

### Adding Project Screenshots (Future Enhancement)

1. Create folder: `frontend/src/assets/projects/`
2. Add screenshot images
3. Import in component:

```javascript
import projectImg from '../assets/projects/ecommerce.jpg';

// In JSX:
<img src={projectImg} alt="Project" className="w-full h-48 object-cover" />
```

## 5. Resume Section

### Update Education Information

**File:** `frontend/src/components/Resume.js`

```javascript
<h4 className="text-lg font-semibold">B.Tech Computer Science</h4>
<p>Your College/University Name</p>
<p>Expected Graduation: 2025</p>
<p>CGPA: 8.5/10</p>
```

### Update Experience

```javascript
<h4 className="text-lg font-semibold">Your Job Title</h4>
<p>Company/Startup Name</p>
<p>Jun 2024 - Aug 2024</p>
<ul>
  <li>• Your achievement/responsibility</li>
  <li>• Your achievement/responsibility</li>
</ul>
```

### Update Certifications

```javascript
<p>• Your Certification - Platform (Year)</p>
<p>• Your Certification - Platform (Year)</p>
```

### Add Your Resume PDF

1. Save your resume as `resume.pdf`
2. Place in `frontend/public/` folder
3. Download link will work automatically

## 6. Contact Section

### Update Contact Information

**File:** `frontend/src/components/Contact.js`

```javascript
{/* Email */}
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

{/* LinkedIn */}
<a href="https://linkedin.com/in/your-profile">
  linkedin.com/in/your-profile
</a>

{/* GitHub */}
<a href="https://github.com/your-username">
  github.com/your-username
</a>
```

### Configure Email Notifications

**File:** `backend/.env`

```
EMAIL_TO=your-email@example.com
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## 7. Footer Section

### Update Social Links

**File:** `frontend/src/components/Footer.js`

```javascript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username',
    icon: 'ⓖ'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile',
    icon: 'in'
  },
  // Add more links...
];
```

### Update Footer Text

```javascript
<p>Your bio and description...</p>
<p>Copyright © 2024 Your Name. All rights reserved.</p>
```

## 8. Theme & Styling

### Change Primary Color

**File:** `frontend/tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb', // Change this to your color
      accent: '#1d4ed8',
    }
  }
}
```

Color options:
- Blue: `#2563eb`
- Purple: `#7c3aed`
- Green: `#059669`
- Red: `#dc2626`
- Indigo: `#4f46e5`

### Update Font

**File:** `frontend/tailwind.config.js`

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    }
  }
}
```

Google Fonts suggestion:
- Inter
- Poppins
- Roboto
- Segoe UI

### Change Background Colors

**File:** `frontend/src/index.css`

```css
body {
  background-color: #ffffff;  /* Light mode */
  color: #1a1a1a;
}

body.dark {
  background-color: #0a0a0a;  /* Dark mode */
  color: #ffffff;
}
```

## 9. Meta Tags & SEO

### Update Page Title & Description

**File:** `frontend/public/index.html`

```html
<title>Your Name | Your Title | Portfolio</title>
<meta name="description" content="Your custom description here">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
```

## 10. Configuration File Organization

Recommended: Use `frontend/src/config.js` for all content

```javascript
// Example structure
export const personalInfo = { /* ... */ };
export const skills = { /* ... */ };
export const projects = [ /* ... */ ];
export const education = { /* ... */ };
export const experience = [ /* ... */ ];
export const certifications = [ /* ... */ ];

// Then import in components
import { personalInfo, skills } from '../config';
```

## Common Customizations Checklist

- [ ] Update name and title in all sections
- [ ] Update personal information (email, phone, location)
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Update About section text
- [ ] Update Skills (add/remove as needed)
- [ ] Add your actual projects (5 projects)
- [ ] Update Education information
- [ ] Update Experience/Internship details
- [ ] Update Certifications
- [ ] Add your resume (resume.pdf)
- [ ] Set up email configuration (.env)
- [ ] Test contact form
- [ ] Update theme colors if desired
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Test dark/light theme toggle

## Tips for Best Results

### Projects Section
- Include 3-5 of your best projects
- Provide real GitHub and demo links
- Use clear descriptions
- List relevant technologies
- Add key features as highlights

### Skills Section
- Group related skills together
- Be honest about proficiency levels
- Include both technical and soft skills
- Keep list relevant to your field

### About Section
- Keep it concise but informative
- Highlight your unique value proposition
- Mention your goals and interests
- Show personality

### Resume
- Format resume professionally
- Include relevant experience only
- Highlight achievements over duties
- Use action verbs

## Updating Component Content

### Pattern 1: Simple Text Update

Find the text:
```javascript
<p>Old text here</p>
```

Replace with:
```javascript
<p>Your new text here</p>
```

### Pattern 2: Array of Items

Find:
```javascript
const items = ['Item 1', 'Item 2', 'Item 3'];
```

Replace with:
```javascript
const items = ['Your Item 1', 'Your Item 2', 'Your Item 3'];
```

### Pattern 3: Object Properties

Find:
```javascript
{
  title: 'Old Title',
  description: 'Old description'
}
```

Replace with:
```javascript
{
  title: 'Your New Title',
  description: 'Your new description'
}
```

## Advanced Customizations

### Adding New Sections

1. Create new component: `frontend/src/components/NewSection.js`
2. Add to App.js:
```javascript
import NewSection from './components/NewSection';
// In JSX:
<NewSection darkMode={darkMode} />
```
3. Add navigation link in Navbar

### Adding New Themes

Modify `frontend/src/App.js` to support multiple themes

### Adding Animations

Use CSS transitions in components:
```javascript
className="transition-all duration-300 hover:scale-105"
```

## Testing Changes

After making changes:

1. Save file
2. React automatically reloads
3. Check browser console for errors
4. Test on mobile view
5. Test with dark/light mode toggle

## Performance Considerations

- Don't add too many large images
- Optimize images before using
- Keep component count reasonable
- Use React.memo for expensive components
- Lazy load heavy components

## Backing Up Changes

Before major changes:

```bash
# Create a backup
cp -r frontend frontend.backup

# Or use Git
git add .
git commit -m "Backup before customization"
```

For more information on components, see [ARCHITECTURE.md](./ARCHITECTURE.md)
