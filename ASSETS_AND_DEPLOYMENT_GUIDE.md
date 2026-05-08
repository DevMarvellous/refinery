# Assets and Deployment Guide

## 📁 Adding Images and Assets to Your Website

### 1. Where to Store Images

Place all your images in the `public/` folder:

```
public/
├── images/
│   ├── lead-consultant.jpg      # Your professional photo
│   ├── logo.png                 # Business logo
│   ├── hero-bg.jpg              # Background images
│   ├── testimonials/
│   │   ├── client1.jpg
│   │   ├── client2.jpg
│   └── icons/
│       ├── phone.svg
│       └── email.svg
```

### 2. How to Use Images in Components

#### Method 1: Direct Import (Recommended for React components)
```jsx
import leadConsultantImage from '../public/images/lead-consultant.jpg';

// In your component:
<img src={leadConsultantImage} alt="Lead Consultant" className="rounded-lg" />
```

#### Method 2: Public URL Path (Simple and reliable)
```jsx
// In your component:
<img src="/images/lead-consultant.jpg" alt="Lead Consultant" className="rounded-lg" />
```

### 3. Updating the Lead Consultant Image

**Step 1:** Add your photo to `public/images/lead-consultant.jpg`

**Step 2:** Update the Hero component (`src/components/Hero.jsx`):

Replace this placeholder section:
```jsx
{/* CEO Image Placeholder */}
<div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-sky-blue via-medium-blue to-royal-blue/40 rounded-lg flex items-center justify-center border-4 border-gold">
  <div className="text-center text-royal-blue px-4">
    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-gold/30 to-yellow-400/30 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gold/50 to-yellow-400/50 rounded-full"></div>
    </div>
    <p className="text-gold font-semibold text-sm sm:text-lg">Lead Consultant Image</p>
    <p className="text-xs sm:text-sm mt-1 sm:mt-2">Professional Photography</p>
  </div>
</div>
```

With:
```jsx
{/* Lead Consultant Image */}
<div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border-4 border-gold shadow-xl">
  <img 
    src="/images/lead-consultant.jpg" 
    alt="Lead Consultant" 
    className="w-full h-full object-cover"
  />
</div>
```

### 4. Image Optimization Tips

- **Format:** Use `.webp` for better compression, `.jpg` for photos, `.png` for graphics
- **Size:** Compress images to under 500KB each
- **Dimensions:** 
  - Hero images: 1200x800px minimum
  - Profile photos: 400x400px
  - Logos: 200x80px (transparent background)

### 5. Recommended Image Tools

- **Compression:** TinyPNG.com or Squoosh.app
- **Resizing:** Canva.com or Adobe Express
- **Format Conversion:** CloudConvert.com

---

## 🚀 Deployment Guide

### Step 1: Prepare for GitHub

1. **Initialize Git (if not already done):**
```bash
git init
git add .
git commit -m "Initial commit with pricing section and updated descriptions"
```

2. **Create .gitignore file** (already exists, but ensure it includes):
```
node_modules/
dist/
.env.local
.env.production
.DS_Store
*.log
```

### Step 2: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to github.com
   - Click "New repository"
   - Name: `refinery-business-consult`
   - Make it Public
   - Don't initialize with README (you already have files)

2. **Push your code:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/refinery-business-consult.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Sign up for Vercel:**
   - Go to vercel.com
   - Sign up with your GitHub account

2. **Import your project:**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will detect it's a React/Vite project

3. **Configure build settings:**
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Your site will be live at `your-project-name.vercel.app`

### Step 4: Custom Domain (Optional)

1. **In Vercel:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Free domain options:**
   - `.tk` (Freenom)
   - `.ml` (Freenom)
   - Or use Vercel's subdomain

### Step 5: Environment Variables (if needed)

For any API keys or sensitive data:
1. In Vercel dashboard → Project Settings → Environment Variables
2. Add your variables
3. Redeploy your project

---

## 🔧 Quick Deployment Commands

```bash
# Build locally to test
npm run build

# Preview build locally
npm run preview

# Deploy to Vercel (after setup)
vercel --prod
```

---

## 📱 Mobile Testing Before Deployment

1. **Test locally:**
```bash
npm run dev
```
2. **Open browser dev tools** (F12)
3. **Toggle device toolbar** (Ctrl+Shift+M or Cmd+Opt+M)
4. **Test different screen sizes:**
   - iPhone 12 Pro (390x844)
   - Samsung Galaxy S21 (360x780)
   - iPad (768x1024)
   - Desktop (1920x1080)

---

## 🎯 Post-Deployment Checklist

- [ ] All images load correctly
- [ ] Mobile responsiveness works
- [ ] All links function
- [ ] Contact forms work (if any)
- [ ] Page load speed is good (under 3 seconds)
- [ ] SEO meta tags are set
- [ ] SSL certificate is active (automatic with Vercel)

---

## 🆘 Common Issues & Solutions

### Images Not Loading
- **Problem:** 404 errors for images
- **Solution:** Ensure images are in `public/` folder, not `src/`

### Build Fails
- **Problem:** npm run build fails
- **Solution:** Check for missing imports or syntax errors

### Vercel Deployment Issues
- **Problem:** Deploy fails
- **Solution:** Check Vercel logs, ensure package.json is correct

### Mobile Layout Issues
- **Problem:** Layout breaks on mobile
- **Solution:** Use responsive classes (sm:, md:, lg:)

---

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify file paths are correct
3. Ensure all dependencies are installed
4. Test on different screen sizes

Your website is ready to launch! 🚀
