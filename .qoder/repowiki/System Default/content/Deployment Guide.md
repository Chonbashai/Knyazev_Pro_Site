# Deployment Guide

<cite>
**Referenced Files in This Document**
- [README.md](file://README.md)
- [index.html](file://index.html)
- [contact.html](file://contact.html)
- [portfolio.html](file://portfolio.html)
- [price.html](file://price.html)
- [founder.html](file://founder.html)
- [assets/styles.css](file://assets/styles.css)
- [assets/main.js](file://assets/main.js)
- [assets/fonts/Montserrat-VariableFont_wght.ttf](file://assets/fonts/Montserrat-VariableFont_wght.ttf)
- [assets/fonts/Montserrat-Italic-VariableFont_wght.ttf](file://assets/fonts/Montserrat-Italic-VariableFont_wght.ttf)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Deployment Platforms](#deployment-platforms)
4. [Traditional Hosting Instructions](#traditional-hosting-instructions)
5. [Configuration Requirements](#configuration-requirements)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Domain Configuration and SSL](#domain-configuration-and-ssl)
8. [Local Testing Setup](#local-testing-setup)
9. [Troubleshooting](#troubleshooting)

## Introduction

The Knyazev Pro Landing project is a modern, static corporate video production website designed for easy deployment across various hosting platforms. Built with HTML5, CSS3, and vanilla JavaScript, this landing page requires minimal configuration and can be deployed quickly to production environments.

This deployment guide covers the complete process from preparation to verification, ensuring your website goes live smoothly with optimal performance and functionality.

## Project Overview

The Landing project consists of five main HTML pages with a lightweight asset structure:

### Project Structure
- **HTML Pages**: 5 core pages (index.html, portfolio.html, price.html, founder.html, contact.html)
- **CSS**: Single optimized stylesheet (5.3 KB)
- **JavaScript**: Vanilla JS implementation (8.9 KB) with no external dependencies
- **Fonts**: Variable Montserrat font family (1 file + static weights)
- **Images**: Optimized for web delivery
- **Videos**: Embedded RuTube videos with lazy loading

### Technical Specifications
- **File Size**: Total ~25 MB (including video embeds)
- **Dependencies**: None (pure static files)
- **Browser Support**: Modern browsers with fallbacks for older versions
- **Mobile Optimization**: Full responsive design with iOS/macOS optimizations

**Section sources**
- [README.md](file://README.md#L1-L50)
- [index.html](file://index.html#L1-L30)

## Deployment Platforms

### Recommended Static Site Hosters

#### Netlify
Netlify offers the fastest deployment process with automatic CI/CD capabilities:

```bash
# Drag-and-drop deployment
# Or CLI deployment
netlify deploy --prod
```

**Features:**
- Automatic HTTPS with free SSL
- Global CDN distribution
- Free tier with unlimited sites
- Git integration for automated deployments

#### Vercel
Vercel provides excellent performance and analytics:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

**Features:**
- Edge network for ultra-low latency
- Built-in analytics and monitoring
- Automatic scaling
- Free tier with generous limits

#### GitHub Pages
Perfect for open-source projects or public websites:

**Steps:**
1. Push your repository to GitHub
2. Go to repository Settings → Pages
3. Select branch (main/master) and folder (/root)
4. Enable GitHub Actions for automated builds

**Features:**
- Free hosting for public repositories
- Custom domains support
- Basic CDN caching

### Platform Comparison

| Platform | Speed | Ease | Cost | Features |
|----------|-------|------|------|----------|
| Netlify | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Free | CDN, SSL, Analytics |
| Vercel | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Free | Edge Network, Analytics |
| GitHub Pages | ⭐⭐⭐ | ⭐⭐⭐⭐ | Free | Git Integration |
| Traditional Hosting | ⭐⭐ | ⭐⭐⭐ | Paid | Control, Customization |

## Traditional Hosting Instructions

### FTP/SFTP Upload Process

#### Step 1: Prepare Your Files
Ensure all files are organized in the correct structure:

```
/
├── index.html
├── portfolio.html
├── price.html
├── founder.html
├── contact.html
└── assets/
    ├── styles.css
    ├── main.js
    └── fonts/
        ├── Montserrat-VariableFont_wght.ttf
        ├── Montserrat-Italic-VariableFont_wght.ttf
        └── static/
            ├── Montserrat-*.ttf (all weight variations)
```

#### Step 2: Set File Permissions
Configure proper permissions for optimal security and functionality:

| File Type | Permission | Purpose |
|-----------|------------|---------|
| HTML Files | 644 | Readable by everyone, writable by owner |
| CSS/JS Files | 644 | Readable by everyone, writable by owner |
| Font Files | 644 | Readable by everyone, writable by owner |
| Images | 644 | Readable by everyone, writable by owner |
| Directories | 755 | Executable for traversal, readable/writable by owner |

#### Step 3: Upload Files
Use your preferred FTP/SFTP client to transfer files to the root directory of your hosting account.

**Recommended Clients:**
- FileZilla (free, cross-platform)
- WinSCP (Windows)
- Cyberduck (Mac)
- Transmit (Mac)

### Directory Structure Validation
After upload, verify the directory structure matches the expected layout. Access each page individually to ensure proper loading.

**Section sources**
- [README.md](file://README.md#L400-L420)

## Configuration Requirements

### MIME Types Configuration

Proper MIME type configuration ensures optimal browser behavior and security:

| File Extension | MIME Type | Purpose |
|----------------|-----------|---------|
| .html | text/html | HTML documents |
| .css | text/css | Stylesheets |
| .js | application/javascript | JavaScript files |
| .ttf | font/ttf | TrueType fonts |
| .woff | font/woff | Web Open Font Format |
| .woff2 | font/woff2 | Modern WOFF format |
| .mp4 | video/mp4 | Video files |
| .webp | image/webp | Modern image format |

### Server Configuration Examples

#### Apache (.htaccess)
```apache
# MIME types for video and fonts
AddType video/mp4 .mp4
AddType font/ttf .ttf
AddType font/woff .woff
AddType font/woff2 .woff2

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>

# Cache control
<FilesMatch "\.(html|htm)$">
    Header set Cache-Control "max-age=3600, public"
</FilesMatch>
```

#### Nginx Configuration
```nginx
# MIME types
types {
    text/html html htm shtml;
    text/css css;
    application/javascript js;
    font/ttf ttf;
    font/woff woff;
    font/woff2 woff2;
    video/mp4 mp4;
}

# Gzip compression
gzip on;
gzip_types
    text/plain
    application/xml
    text/css
    application/javascript
    text/html
    application/json;

# Cache headers
location ~* \.(css|js|ttf|woff|woff2|mp4)$ {
    expires 1y;
    add_header Cache-Control "public";
}
```

### Content Security Policy (Optional)
For enhanced security, implement CSP headers:

```http
Content-Security-Policy: 
    default-src 'self'; 
    script-src 'self' https://www.googletagmanager.com; 
    frame-src 'self' https://rutube.ru; 
    img-src 'self' data: https://rutube.ru; 
    style-src 'self' 'unsafe-inline';
```

**Section sources**
- [assets/styles.css](file://assets/styles.css#L1-L20)
- [assets/main.js](file://assets/main.js#L1-L50)

## Post-Deployment Verification

### Browser Console Testing

After deployment, thoroughly test the website in multiple browsers:

#### Essential Checks
1. **No JavaScript Errors**: Verify console shows no errors
2. **Video Embeds**: Confirm RuTube videos load correctly
3. **Analytics Tracking**: Check dataLayer initialization
4. **Responsive Design**: Test on various screen sizes
5. **Form Functionality**: Submit test forms to ensure proper operation

#### Console Commands to Verify
```javascript
// Check for errors
console.clear();
console.log('✅ No errors');

// Verify video embeds
const videos = document.querySelectorAll('iframe[src*="rutube"]');
console.log(`Found ${videos.length} video embeds`);

// Check analytics
if (window.dataLayer) {
    console.log('✅ GA4 dataLayer initialized');
} else {
    console.warn('⚠️ GA4 not configured');
}
```

### Form Testing Protocol

#### Mini-Brief Form
Test the interactive form that captures leads:

1. **Field Validation**: Ensure required fields trigger validation
2. **Submission**: Verify form submits without errors
3. **CRM Integration**: Check console for successful API calls
4. **Confirmation**: Confirm user receives success message

#### Contact Form (if implemented)
Test traditional contact form submission:

1. **Email Delivery**: Verify emails reach intended recipients
2. **Spam Protection**: Test honeypot fields (if implemented)
3. **CAPTCHA**: Validate reCAPTCHA integration (if used)

### Performance Verification

#### Core Web Vitals Monitoring
Use browser developer tools to measure key performance metrics:

| Metric | Target | Expected Range | Tools |
|--------|--------|----------------|-------|
| First Contentful Paint (FCP) | < 1.5s | 1.0-1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | 1.5-2.5s | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | 0.05-0.1 | Field Data |
| Time to Interactive (TTI) | < 3.5s | 2.5-3.5s | Lighthouse |

#### Load Time Optimization
Monitor initial page load times:

1. **First Load**: Measure time to fully render index.html
2. **Navigation**: Test subsequent page transitions
3. **Video Loading**: Verify lazy loading works correctly
4. **Assets**: Confirm CSS and JS load efficiently

### Cross-Browser Compatibility

#### Supported Browsers
Test functionality across major browsers:

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | 90+ | ✅ Working | Full support |
| Firefox | 88+ | ✅ Working | Full support |
| Safari | 14+ | ✅ Working | iOS/macOS optimized |
| Edge | 90+ | ✅ Working | Chromium-based |
| Mobile Safari | 14+ | ✅ Working | iOS optimizations |

**Section sources**
- [README.md](file://README.md#L350-L400)

## Domain Configuration and SSL

### SSL Certificate Setup

#### Automatic SSL (Recommended)
Most modern hosting platforms provide automatic SSL certificates:

1. **Netlify**: Automatic HTTPS with free SSL
2. **Vercel**: Built-in SSL certificate
3. **GitHub Pages**: Free SSL via GitHub's infrastructure

#### Manual SSL Configuration
For traditional hosting providers:

```bash
# Using Let's Encrypt (certbot)
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com
```

### Domain Configuration Steps

#### DNS Configuration
Set up proper DNS records for optimal routing:

| Record Type | Value | Purpose |
|-------------|-------|---------|
| A Record | [Server IP] | Direct domain to server |
| CNAME | [Hosting Provider] | Alias to hosting provider |
| ALIAS | [Provider Endpoint] | Provider-specific alias |
| MX Records | [Mail Server] | Email routing |

#### Subdomain Setup
Configure subdomains for different environments:

- `www.yourdomain.com` → Production site
- `staging.yourdomain.com` → Staging environment
- `blog.yourdomain.com` → Blog or content site

### CDN Integration

#### Cloudflare Setup
Enhance performance and security with Cloudflare:

1. **DNS Management**: Point domain to Cloudflare nameservers
2. **SSL/TLS**: Enable Flexible SSL encryption
3. **Caching**: Configure cache policies for static assets
4. **Firewall**: Set up security rules and rate limiting

#### Performance Optimization
Enable Cloudflare features for improved performance:

- **Railgun**: Compresses HTTP traffic
- **Auto Minify**: Automatically minifies CSS/JS
- **Brotli Compression**: Advanced compression algorithm
- **Polish**: Automatically optimizes images

### Redirect Configuration

#### WWW vs Non-WWW
Choose one canonical domain and redirect others:

```apache
# Apache redirect (www to non-www)
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.yourdomain\.com [NC]
RewriteRule ^(.*)$ https://yourdomain.com/$1 [L,R=301]
```

```nginx
# Nginx redirect (non-www to www)
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://www.yourdomain.com$request_uri;
}
```

## Local Testing Setup

### Quick Start Commands

Before deploying to production, thoroughly test locally using one of these methods:

#### Method 1: Python HTTP Server
```bash
# Python 3 (most systems have this pre-installed)
python -m http.server 8000
```

#### Method 2: Node.js Serve
```bash
# Requires Node.js installed
npx serve .
```

#### Method 3: PHP Built-in Server
```bash
# PHP (common on Linux/Mac)
php -S localhost:8000
```

### Local Environment Validation

#### Browser Compatibility Testing
Test across multiple browsers and devices:

1. **Desktop Browsers**: Chrome, Firefox, Safari, Edge
2. **Mobile Browsers**: iOS Safari, Android Chrome
3. **Development Tools**: Use browser developer tools for debugging

#### Performance Testing
Measure local performance metrics:

```bash
# Using Lighthouse CLI
npx lighthouse http://localhost:8000 --view
```

### Development Workflow

#### File Watching
Set up automatic reloading during development:

```bash
# Using live-server for automatic reloads
npm install -g live-server
live-server --port=8080 --no-cache
```

#### Build Process (if applicable)
For projects with build steps:

```bash
# Example build script
npm run build
# or
gulp build
```

**Section sources**
- [README.md](file://README.md#L150-L200)

## Troubleshooting

### Common Deployment Issues

#### 1. Video Embed Not Loading
**Symptoms**: Videos appear as blank spaces or fail to load
**Causes**: CORS restrictions, incorrect embed URLs
**Solutions**:
- Verify RuTube embed URLs are correct
- Check browser console for CORS errors
- Ensure proper referrer policy configuration

#### 2. Fonts Not Displaying
**Symptoms**: Text appears in default font instead of Montserrat
**Causes**: Incorrect font paths, MIME type issues
**Solutions**:
- Verify font file paths in CSS
- Check server MIME type configuration
- Clear browser cache

#### 3. Forms Not Submitting
**Symptoms**: Form submissions fail silently
**Causes**: JavaScript errors, missing event handlers
**Solutions**:
- Check browser console for JavaScript errors
- Verify form element IDs match JavaScript selectors
- Test with disabled JavaScript to isolate issues

### Performance Issues

#### Slow Page Loads
**Diagnostic Steps**:
1. Use browser DevTools to identify bottlenecks
2. Check network tab for slow-loading resources
3. Verify proper caching headers
4. Test with different internet speeds

**Optimization Solutions**:
- Enable Gzip/Brotli compression
- Implement CDN for static assets
- Optimize image sizes
- Minify CSS/JavaScript

#### Mobile Performance
**Common Issues**:
- Touch events not responding
- Video playback problems
- Layout shifts on scroll

**Solutions**:
- Test on actual mobile devices
- Verify viewport meta tag configuration
- Implement proper touch event handling
- Optimize video loading strategy

### Browser-Specific Problems

#### Internet Explorer Compatibility
While the project targets modern browsers, basic IE support can be achieved:

```css
/* Basic IE compatibility */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE-specific styles */
    .modern-feature {
        display: block;
    }
}
```

#### Safari iOS Issues
Address iOS-specific optimizations:

1. **Viewport Issues**: Verify meta viewport configuration
2. **Video Playback**: Ensure proper autoplay policies
3. **Touch Events**: Test gesture recognition
4. **Memory Management**: Monitor memory usage on older devices

### Debugging Tools and Resources

#### Essential Browser Tools
1. **Developer Console**: JavaScript error checking
2. **Network Tab**: Resource loading analysis
3. **Performance Tab**: Load time profiling
4. **Application Tab**: Storage and caching inspection

#### Third-Party Tools
- **Lighthouse**: Comprehensive performance audit
- **GTmetrix**: Performance analysis and recommendations
- **WebPageTest**: Detailed load time analysis
- **BrowserStack**: Cross-browser testing

**Section sources**
- [README.md](file://README.md#L380-L420)

## Conclusion

The Knyazev Pro Landing project is designed for straightforward deployment across multiple platforms. Its static nature and minimal dependencies make it suitable for rapid deployment while maintaining professional functionality.

Key success factors for deployment:
- **Proper MIME type configuration** for optimal browser behavior
- **Comprehensive testing** across target browsers and devices
- **Performance monitoring** to ensure fast loading times
- **Security considerations** including SSL and proper file permissions

With careful attention to these deployment guidelines, your corporate video production landing page will be ready to convert visitors into valuable business leads effectively.