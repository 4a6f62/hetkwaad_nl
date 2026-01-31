# Het Kwaad.nl - Hacker Aesthetic Edition

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3-green.svg)](https://jekyllrb.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Welcome to **Het Kwaad.nl** - The ultimate destination for all things dark and sinister, now with a powerful hacker aesthetic!

## 🎮 About

Hetkwaad.nl is run by a programmer turned pentester turned YouTuber who delves into the world of horror games with a passion. From the latest game releases to in-depth analysis of classic titles, this site offers a unique perspective on the genre that will keep you on the edge of your seat.

## 🖥️ Hacker Vibes Theme

The site now features a **Matrix-inspired hacker aesthetic** designed to create an immersive terminal-like experience:

### Theme Features

- **🌑 Dark Mode**: Black/very dark background (`#0a0a0a` / `#000000`) for optimal viewing
- **💚 Neon Green Accent**: Vibrant neon green (`#39FF14`) for text, links, and highlights
- **🔤 Monospace Fonts**: System uses `Fira Mono`, `Consolas`, `Menlo`, and `Monaco` for that authentic terminal feel
- **⌨️ Typing Animations**: Main headings feature smooth typing effects using Typed.js
- **🎬 Glitch Effects**: Subtle glitch animations on headers for that authentic hacker aesthetic
- **🌧️ Matrix Code Rain**: Animated background with falling Matrix-style characters (subtle and non-intrusive)
- **🖲️ Terminal UI Elements**: Buttons and forms styled to resemble classic terminal interfaces
- **✨ Glow Effects**: Neon glow effects on interactive elements and key text
- **📺 Scanline Effect**: Subtle CRT monitor scanline overlay for authenticity

### Files & Structure

The hacker theme is implemented through the following files:

- **`assets/css/hacker-theme.css`** - Main theme stylesheet with all visual effects
- **`assets/js/matrix-rain.js`** - Matrix code rain background animation
- **`_layouts/default.html`** - Default layout with terminal header and hacker styling
- **`_layouts/hacked_index.html`** - Special "hacked" landing page layout
- **`_layouts/yt_post.html`** - YouTube post layout with terminal styling

### 🎨 Customization

You can customize the hacker theme to suit your preferences:

#### Adjusting Colors

Edit `/assets/css/hacker-theme.css` and modify the CSS variables at the top:

```css
:root {
    --neon-green: #39FF14;      /* Main accent color */
    --dark-bg: #0a0a0a;          /* Secondary background */
    --darker-bg: #000000;        /* Main background */
    --green-glow: rgba(57, 255, 20, 0.5);  /* Glow effect */
}
```

#### Matrix Rain Settings

Control the Matrix rain background effect via JavaScript:

```javascript
// In your browser console or custom script:

// Change opacity (0.0 to 1.0)
MatrixRain.setOpacity(0.3);

// Change color
MatrixRain.setColor('#00FF00');

// Change speed (lower = faster)
MatrixRain.setSpeed(25);

// Disable completely
MatrixRain.disable();

// Re-enable
MatrixRain.enable();
```

#### Reducing or Disabling Effects

If you find the effects too intense:

1. **Reduce Effects**: Add the `reduced-effects` class to the body tag in your layout:
   ```html
   <body class="reduced-effects">
   ```

2. **Disable All Effects**: Add the `no-effects` class:
   ```html
   <body class="no-effects">
   ```

3. **Disable Matrix Rain Only**: Add this to your page:
   ```html
   <script>
     document.addEventListener('DOMContentLoaded', function() {
       MatrixRain.disable();
     });
   </script>
   ```

#### Accessibility

The theme respects user preferences:

- **Reduced Motion**: Automatically reduces animations if user has `prefers-reduced-motion` enabled in their OS
- **High Contrast**: The neon green on black provides excellent contrast ratio (>7:1)
- **Screen Readers**: All content remains accessible with proper semantic HTML

### 🛠️ Technical Details

#### Dependencies (via CDN)

- **[Typed.js](https://github.com/mattboldt/typed.js/)** (v2.0.16) - For typing animations
- **[Google Fonts - Fira Mono](https://fonts.google.com/specimen/Fira+Mono)** - Primary monospace font

All dependencies are loaded via CDN, requiring no local installation.

#### Browser Compatibility

The theme works on all modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

Graceful degradation ensures the site remains functional on older browsers, minus some visual effects.

## 🚀 Getting Started

### Prerequisites

- Ruby 2.7 or higher
- Bundler
- Jekyll 4.x

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/4a6f62/hetkwaad_nl.git
   cd hetkwaad_nl
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

### Building for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site` directory.

## 📝 Creating Content

### Blog Posts

Create a new post in the `_posts` directory following the naming convention:

```
YYYY-MM-DD-title-of-post.md
```

Example post with frontmatter:

```yaml
---
title: "My Horror Game Review"
date: 2024-01-15
youtube_link: https://www.youtube.com/watch?v=VIDEO_ID
---

Your content here...
```

### YouTube Videos

For YouTube video posts, use the `yt_post` layout (which inherits the hacker theme):

```yaml
---
layout: yt_post
title: "Video Title"
date: 2024-01-15
youtube_link: https://www.youtube.com/watch?v=VIDEO_ID
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen></iframe>
```

## 🎯 Features

- **Responsive Design**: Mobile-friendly layouts
- **SEO Optimized**: Proper meta tags and structured data
- **RSS Feed**: Automatic feed generation
- **Fast Loading**: Optimized assets and CDN usage
- **Zero Dependencies**: No npm or complex build process needed

## 📱 Social Media

- **Twitter**: [@4a6f62](https://twitter.com/4a6f62)
- **GitHub**: [@4a6f62](https://github.com/4a6f62)
- **YouTube**: Check the site for latest videos!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/4a6f62/hetkwaad_nl/issues).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Theme inspired by Matrix and classic hacker terminals
- Typed.js by Matt Boldt
- Fira Mono font by Mozilla

---

**> ACCESS GRANTED**  
**> WELCOME TO THE MATRIX**  
**> ENJOY YOUR STAY IN THE DARKNESS...**

🟢 █████████████████████████ 100% HACKED
