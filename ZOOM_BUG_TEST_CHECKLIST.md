# 📱 Mobile Zoom Bug - Testing Checklist

## Test Environment Setup

### Devices to Test
- [ ] iPhone SE (320px - 375px width)
- [ ] iPhone 12/13/14 (390px width)
- [ ] iPhone 12/13/14 Pro Max (428px width)
- [ ] Google Pixel (412px width)
- [ ] Samsung Galaxy S21 (360px width)
- [ ] iPad (768px width)

### Browsers to Test
- [ ] iOS Safari (latest)
- [ ] iOS Safari (iOS 15+)
- [ ] Android Chrome (latest)
- [ ] Android Firefox (optional)

### Testing Tools
- [ ] Real iOS device
- [ ] Real Android device
- [ ] Chrome DevTools Device Emulation
- [ ] Safari Responsive Design Mode

---

## Test Cases

### Test 1: Initial Page Load
**All Pages: index.html, portfolio.html, price.html, founder.html, contact.html**

- [ ] Page loads without horizontal scrollbar
- [ ] Content fills entire viewport width
- [ ] Background color is consistent (no black areas)
- [ ] No white/black gutters on sides
- [ ] Hero section (index.html) displays correctly

**Expected Result:** ✅ Clean, full-width layout with no visible overflow

---

### Test 2: Pinch Zoom Out (Critical Test)
**Device:** iOS Safari on iPhone

1. [ ] Open index.html in iOS Safari
2. [ ] Pinch to zoom OUT beyond 100%
3. [ ] Observe layout behavior
4. [ ] Check for black gutter on right side
5. [ ] Verify content doesn't shift to left half only

**Expected Result:** ✅ Zoom is prevented from going below 100% (minimum-scale=1.0)
- If you can zoom out, content should remain centered
- No black area appears on right side
- Background covers entire viewport

**Before Fix:** ❌ Content shifts to left, black gutter appears on right
**After Fix:** ✅ Cannot zoom below 100%, or layout stays centered

---

### Test 3: Pinch Zoom In
**Device:** iOS Safari on iPhone

1. [ ] Open index.html in iOS Safari
2. [ ] Pinch to zoom IN to 200%
3. [ ] Pan around the zoomed content
4. [ ] Check all edges for black gutters
5. [ ] Zoom in to 300%
6. [ ] Verify background is visible everywhere

**Expected Result:** ✅ 
- Can zoom up to 500% (maximum-scale=5.0)
- Background color consistent at all zoom levels
- No unexpected white/black areas
- Content scrolls smoothly

---

### Test 4: Rotation Test
**Device:** Any mobile device

1. [ ] Open site in portrait orientation
2. [ ] Check layout (no horizontal scroll)
3. [ ] Rotate to landscape orientation
4. [ ] Check layout (no horizontal scroll)
5. [ ] Pinch zoom in landscape
6. [ ] Rotate back to portrait while zoomed

**Expected Result:** ✅
- No horizontal scrollbar in either orientation
- Layout adjusts smoothly
- Background covers viewport in both orientations

---

### Test 5: Scroll Test
**Device:** Any mobile device

1. [ ] Load index.html
2. [ ] Scroll down through all sections
3. [ ] Watch for horizontal scrollbar appearing
4. [ ] Check each section's background
5. [ ] Scroll back to top

**Expected Result:** ✅
- No horizontal scrollbar at any scroll position
- Backgrounds remain consistent
- All content stays within viewport width

---

### Test 6: Chrome DevTools Emulation
**Tool:** Chrome DevTools Device Mode

1. [ ] Open Chrome DevTools (F12)
2. [ ] Enable Device Mode (Ctrl+Shift+M)
3. [ ] Select "iPhone 12 Pro"
4. [ ] Set zoom to 50% (simulates zoom out)
5. [ ] Check for layout issues
6. [ ] Set zoom to 200%
7. [ ] Check for black gutters

**Expected Result:** ✅
- Layout stays centered at all zoom levels
- No horizontal overflow
- Backgrounds fill viewport

---

### Test 7: Safe Area Test (Notched Devices)
**Device:** iPhone X or newer (with notch)

1. [ ] Open index.html
2. [ ] Check top notch area
3. [ ] Check bottom indicator area
4. [ ] Verify content respects safe areas
5. [ ] Background extends edge-to-edge

**Expected Result:** ✅
- Content respects safe areas (text not under notch)
- Background extends fully (viewport-fit=cover working)
- No letterboxing effect

---

### Test 8: All Pages Consistency
**Pages to test:** All 5 HTML files

- [ ] index.html - Check hero video section
- [ ] portfolio.html - Check case-list grid
- [ ] price.html - Check price cards
- [ ] founder.html - Check centered layout
- [ ] contact.html - Check contact sections

**For each page:**
1. [ ] Load page
2. [ ] Check initial viewport (no horizontal scroll)
3. [ ] Zoom in to 200%
4. [ ] Check for black gutters
5. [ ] Scroll through page
6. [ ] Verify all sections render correctly

**Expected Result:** ✅ Consistent behavior across all pages

---

### Test 9: Modal/Dialog Test
**Page:** index.html

1. [ ] Click "Заполнить мини‑бриф" button
2. [ ] Modal dialog opens
3. [ ] Check modal width on mobile
4. [ ] Verify modal doesn't exceed viewport
5. [ ] Close modal

**Expected Result:** ✅
- Modal max-width: 90% (fits on screen)
- No horizontal overflow
- Modal centered properly

---

### Test 10: Navigation Menu Test
**Device:** Mobile (< 768px width)

1. [ ] Load any page
2. [ ] Tap hamburger menu button
3. [ ] Menu slides in from right
4. [ ] Check menu background
5. [ ] Verify no horizontal scroll while menu open
6. [ ] Close menu

**Expected Result:** ✅
- Menu slides in smoothly
- No layout shift or overflow
- Background blur visible

---

## Regression Checks

### CSS Validation
- [ ] No 100vw instances in CSS
- [ ] background: var(--bg) on html and body
- [ ] max-width: 100% on html and body
- [ ] min-width: 100% on html and body (defensive rules)

### HTML Validation
- [ ] All 5 HTML files have updated viewport meta tag
- [ ] viewport-fit=cover present
- [ ] minimum-scale=1.0 present
- [ ] maximum-scale=5.0 present (accessibility)

### Visual Checks
- [ ] No layout shifts during normal use
- [ ] Buttons and CTAs properly sized
- [ ] Images don't overflow containers
- [ ] Text remains readable at all breakpoints

---

## Accessibility Checks

### Zoom Accessibility
- [ ] Can zoom in to 200% (WCAG requirement)
- [ ] Can zoom in to 500% (maximum-scale=5.0)
- [ ] Text remains readable when zoomed
- [ ] No content hidden or cut off when zoomed
- [ ] Horizontal scrolling only when zoomed beyond viewport

**Expected Result:** ✅ Site passes WCAG 2.1 Level AA zoom requirements

---

## Performance Checks

### Load Time
- [ ] No additional HTTP requests from fix
- [ ] CSS file size impact minimal (<100 bytes)
- [ ] No JavaScript changes
- [ ] Page loads in under 3 seconds

### Rendering Performance
- [ ] No layout thrashing during zoom
- [ ] Smooth scrolling maintained
- [ ] No jank during pinch gestures
- [ ] Video playback unaffected

---

## Browser Console Checks

### All Pages
1. [ ] Open browser console (F12)
2. [ ] Check for errors
3. [ ] Check for warnings
4. [ ] Verify no CSS parsing errors

**Expected Result:** ✅ No errors or warnings related to layout/overflow

---

## Edge Cases

### Test 11: Slow Network
1. [ ] Throttle network to "Slow 3G"
2. [ ] Load page
3. [ ] Check if layout shifts during load
4. [ ] Verify background appears immediately

**Expected Result:** ✅ No layout shift, background shows before content

### Test 12: Very Small Screen
**Device:** iPhone SE (320px width)

1. [ ] Load site on smallest supported device
2. [ ] Check for horizontal overflow
3. [ ] Verify all content is accessible
4. [ ] Test zoom behavior

**Expected Result:** ✅ Works correctly on 320px width

### Test 13: Very Large Zoom
**Device:** Any mobile

1. [ ] Zoom in to maximum (500%)
2. [ ] Pan around entire page
3. [ ] Check corners and edges
4. [ ] Verify background everywhere

**Expected Result:** ✅ Background visible at all zoom levels

---

## Sign-off

### QA Tester
- [ ] All critical tests passed
- [ ] All regression checks passed
- [ ] All accessibility checks passed
- [ ] Ready for production deployment

**Tester Name:** _________________  
**Date:** _________________  
**Device Used:** _________________  
**OS Version:** _________________  
**Browser Version:** _________________  

### Issues Found
If any issues found during testing, document below:

**Issue 1:**
- Description:
- Severity: [ ] Critical [ ] Major [ ] Minor
- Steps to reproduce:
- Expected vs Actual:

---

## Quick Reference - What Was Fixed

### Before Fix
❌ Pinch-zoom out → content shifts left, black gutter on right  
❌ Horizontal overflow due to 100vw usage  
❌ Black areas visible when zooming  
❌ Can zoom below 100%  

### After Fix
✅ Cannot zoom below 100% (minimum-scale=1.0)  
✅ No horizontal overflow (replaced 100vw with 100%)  
✅ Background covers entire viewport (html background set)  
✅ Layout stays centered at all zoom levels  
✅ viewport-fit=cover for notched devices  

---

**Last Updated:** October 28, 2025  
**Fix Version:** 1.5  
**Branch:** bugfix-mobile-zoom-black-gutter
