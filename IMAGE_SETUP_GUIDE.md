# 🖼️ Complete Image Setup Guide

## 📋 Required Images (4 total)

You need to add exactly 4 images to your website:

### 1. Website Logo
**File:** `logo.png`
**Location:** `/public/images/logo.png`
**Format:** PNG with transparent background
**Size:** 200x80px (or proportional)
**Max File Size:** 100KB
**Usage:** Appears in header next to business name

### 2. Lead Consultant Photo
**File:** `lead-consultant.jpg`
**Location:** `/public/images/lead-consultant.jpg`
**Format:** JPG (or PNG)
**Size:** 400x400px minimum (square crop works best)
**Max File Size:** 300KB
**Usage:** Hero section professional photo

### 3. First Testimonial Photo
**File:** `testimonial-1.jpg`
**Location:** `/public/images/testimonial-1.jpg`
**Format:** JPG (or PNG)
**Size:** 150x150px minimum (square crop)
**Max File Size:** 100KB
**Usage:** Sarah Chen testimonial

### 4. Second Testimonial Photo
**File:** `testimonial-2.jpg`
**Location:** `/public/images/testimonial-2.jpg`
**Format:** JPG (or PNG)
**Size:** 150x150px minimum (square crop)
**Max File Size:** 100KB
**Usage:** Michael Rodriguez testimonial

---

## 🗂️ Folder Structure

Your images should go here:
```
public/
└── images/
    ├── logo.png
    ├── lead-consultant.jpg
    ├── testimonial-1.jpg
    └── testimonial-2.jpg
```

---

## 🔗 Code Connections

The code is already connected to these image paths:

### Header Logo (`src/components/Header.jsx`)
```jsx
<img 
  src="/images/logo.png" 
  alt="The Refinery Business Consult Logo" 
  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
/>
```

### Lead Consultant (`src/components/Hero.jsx`)
```jsx
<img 
  src="/images/lead-consultant.jpg" 
  alt="Lead Consultant" 
  className="w-full h-full object-cover"
/>
```

### Testimonials (`src/components/Testimonials.jsx`)
```jsx
// First testimonial
<img 
  src="/images/testimonial-1.jpg" 
  alt="Sarah Chen - CEO at TechVentures Inc."
  className="w-full h-full object-cover"
/>

// Second testimonial
<img 
  src="/images/testimonial-2.jpg" 
  alt="Michael Rodriguez - Managing Director at Global Logistics Co."
  className="w-full h-full object-cover"
/>
```

---

## 📸 Image Preparation Tips

### For Logo:
- Use transparent background (PNG)
- Keep it simple and recognizable
- Test on both light and dark backgrounds
- Ensure it looks good at small sizes

### For Lead Consultant Photo:
- Professional headshot or business casual
- Good lighting, clear background
- Square crop works best
- High resolution but compressed

### For Testimonial Photos:
- Professional headshots of clients
- Consistent style and lighting
- Square crop recommended
- Same background if possible for consistency

---

## 🛠️ Image Optimization Tools

### Free Tools:
- **TinyPNG.com** - Compress PNG/JPG without quality loss
- **Squoosh.app** - Google's image optimizer
- **Canva.com** - Resize and crop images
- **Photopea.com** - Free Photoshop alternative

### Recommended Settings:
- **JPG Quality:** 85-90%
- **PNG Compression:** Lossless
- **Resolution:** 72 DPI (web standard)
- **Color Profile:** sRGB

---

## 🚀 Installation Steps

1. **Create the images folder** (already done)
2. **Add your 4 images** with exact filenames:
   - `logo.png`
   - `lead-consultant.jpg`
   - `testimonial-1.jpg`
   - `testimonial-2.jpg`

3. **Place them in:** `public/images/`

4. **Restart development server:**
```bash
npm run dev
```

5. **Test all images load correctly**

---

## 🔍 Testing Checklist

- [ ] Logo appears in header with business name
- [ ] Lead consultant photo shows in hero section
- [ ] Both testimonial photos display correctly
- [ ] Images look good on mobile devices
- [ ] Images load quickly (under 2 seconds)
- [ ] No broken image icons appear

---

## ⚠️ Common Issues & Solutions

### Images Not Showing
**Problem:** 404 errors or broken image icons
**Solution:** 
- Check filenames are exact (including extensions)
- Ensure images are in `public/images/` folder
- Restart development server

### Images Too Large
**Problem:** Slow page loading
**Solution:** 
- Compress images using TinyPNG.com
- Reduce file sizes under recommended limits

### Images Distorted
**Problem:** Images look stretched or pixelated
**Solution:** 
- Use proper aspect ratios
- Ensure high resolution source images
- Check `object-cover` CSS class is working

### Logo Background Issues
**Problem:** Logo has white box around it
**Solution:** 
- Use PNG with transparent background
- Remove background in image editor

---

## 📱 Mobile Optimization

All images are already optimized for mobile with responsive sizing:

- **Logo:** Scales from 32px to 48px
- **Lead Consultant:** Responsive container
- **Testimonials:** Circular avatars that scale properly

---

## 🎯 Quick Setup

1. Add your 4 images to `public/images/`
2. Use exact filenames specified
3. Restart `npm run dev`
4. Check all images display correctly

That's it! Your website will display all images correctly once you add them to the specified location.
