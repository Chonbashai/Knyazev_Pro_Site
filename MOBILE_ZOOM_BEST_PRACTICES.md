# 📱 Mobile Zoom & Viewport Best Practices

Quick reference guide to prevent similar issues in the future.

## ✅ DO's

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover">
```

**Always include:**
- ✅ `width=device-width` - Match device width
- ✅ `initial-scale=1.0` - Start at 100%
- ✅ `minimum-scale=1.0` - Prevent zoom below 100%
- ✅ `maximum-scale=5.0` - Allow accessibility zoom
- ✅ `user-scalable=yes` - Enable zoom for accessibility
- ✅ `viewport-fit=cover` - Edge-to-edge on notched devices

### CSS Width Units
```css
/* ✅ GOOD - Use percentages */
.container {
  width: 100%;
  max-width: 1200px;
}

section {
  width: 100%;
  max-width: 100%;
}
```

### Background Colors
```css
/* ✅ GOOD - Set on both */
html, body {
  background: var(--bg);
}

html {
  background-color: var(--bg);
}
```

### Overflow Control
```css
/* ✅ GOOD - Prevent horizontal scroll */
html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

main, section, header, footer {
  max-width: 100%;
  overflow-x: hidden;
}
```

### Defensive Min-Width
```css
/* ✅ GOOD - Prevent shrinking below viewport */
html {
  min-width: 100%;
}

body {
  min-width: 100%;
}
```

## ❌ DON'Ts

### Viewport Width Units
```css
/* ❌ BAD - Includes scrollbar width */
section {
  max-width: 100vw;
}

.modal {
  width: 90vw;
}

/* ✅ GOOD - Use percentage instead */
section {
  max-width: 100%;
}

.modal {
  width: 90%;
  max-width: 90%;
}
```

### Disabling Zoom
```html
<!-- ❌ BAD - Breaks accessibility -->
<meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1.0">

<!-- ✅ GOOD - Allow zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
```

### Missing Backgrounds
```css
/* ❌ BAD - Only body has background */
body {
  background: #000;
}

/* ✅ GOOD - Both have background */
html, body {
  background: #000;
}
```

### Fixed Widths
```css
/* ❌ BAD - Can overflow on small screens */
.container {
  width: 1200px;
}

/* ✅ GOOD - Responsive width */
.container {
  width: 100%;
  max-width: 1200px;
}
```

## 🔍 Common Pitfalls

### 1. The Scrollbar Problem
**Issue:** `100vw` includes scrollbar width (~17px on Windows)

```css
/* ❌ Causes 17px overflow */
.full-width {
  width: 100vw;
}

/* ✅ No overflow */
.full-width {
  width: 100%;
}
```

**Why it matters on mobile:**
- Mobile browsers often hide scrollbar
- When zooming, overflow becomes visible
- Creates black gutter effect

### 2. The Background Gap
**Issue:** html element shows through during zoom

```css
/* ❌ Gap can show black/white */
body {
  background: #000;
}

/* ✅ No gap possible */
html, body {
  background: #000;
}
```

### 3. The Over-Zoom-Out Problem
**Issue:** Content can shrink below intended size

```html
<!-- ❌ Can zoom to 50%, 25%, etc. -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- ✅ Stops at 100% minimum -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
```

### 4. The Negative Margin Trap
**Issue:** Negative margins can cause overflow

```css
/* ❌ Can cause overflow */
.gallery {
  width: calc(100% + 48px);
  margin: 0 -24px;
}

/* ✅ Contained overflow */
.gallery {
  width: calc(100% + 48px);
  margin: 0 -24px;
  padding: 0 24px;
  box-sizing: border-box;
  overflow: hidden;
}
```

## 🧪 Quick Test Checklist

Before committing layout changes:

- [ ] Check for `100vw` usage → Replace with `100%`
- [ ] Verify `html` has background color
- [ ] Confirm `overflow-x: hidden` on containers
- [ ] Test zoom on Chrome DevTools mobile emulation
- [ ] Check for horizontal scrollbar at 320px width
- [ ] Verify viewport meta tag is complete

## 📐 Recommended Viewport Structure

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover">
  <meta name="theme-color" content="#000000">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      overflow-x: hidden;
      background: #000;
    }
  </style>
</head>
<body>
  <!-- Content -->
</body>
</html>
```

## 🎯 Testing Commands

```bash
# Check for 100vw usage
grep -n "100vw" assets/styles.css

# Check html background
grep -n "html.*background" assets/styles.css

# Check viewport tags
grep "viewport" *.html

# Verify no horizontal overflow indicators
grep -n "overflow-x" assets/styles.css
```

## 🔗 References

- [MDN: Using the viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [MDN: viewport units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths)
- [WCAG 2.1: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
- [WebKit: viewport-fit](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

## 💡 Pro Tips

1. **Always test zoom** - Use DevTools or real devices
2. **Use 100% not 100vw** - Avoids scrollbar issues
3. **Set backgrounds on html** - Prevents gaps
4. **Allow zoom for accessibility** - Never set maximum-scale=1.0
5. **Use viewport-fit=cover** - Standard for modern mobile
6. **Add defensive overflow-x: hidden** - Belt and suspenders approach

---

**Last Updated:** October 28, 2025  
**Related Fix:** Mobile Zoom Bug (v1.5)  
**See Also:** ZOOM_BUG_FIX.md
