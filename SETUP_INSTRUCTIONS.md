# Google Analytics & AdSense Setup Instructions

## Google Analytics Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new property for your website
4. Get your Measurement ID (starts with "G-")

### Step 2: Update the Tracking Code
Replace `GA_MEASUREMENT_ID` in the HTML file with your actual Measurement ID:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_MEASUREMENT_ID');
</script>
```

### Step 3: Verify Tracking
1. Deploy your website
2. Visit your site
3. Check Google Analytics dashboard to see real-time visitors

## Google AdSense Setup

### Step 1: Apply for AdSense
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up with your Google account
3. Submit your website for approval
4. Wait for approval (can take several days)

### Step 2: Get Your Ad Client ID
Once approved, you'll receive an Ad Client ID that looks like: `ca-pub-xxxxxxxxxxxxxxxx`

### Step 3: Update the AdSense Code
Replace `YOUR_AD_CLIENT_ID` in the HTML file with your actual Ad Client ID:

```html
<!-- Google AdSense -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_AD_CLIENT_ID"
 crossorigin="anonymous"></script>
```

### Step 4: Add Ad Units (Optional)
After getting approved, you can add ad units to your site:

1. Go to AdSense dashboard
2. Create ad units
3. Place the ad code in strategic locations on your site

## What You Can Track

### Google Analytics Tracks:
- **Visitors**: Number of people visiting your site
- **Page Views**: Which pages are most popular
- **Traffic Sources**: Where visitors come from (Google, social media, etc.)
- **User Behavior**: Time on site, bounce rate, etc.
- **Geographic Data**: Where your visitors are located
- **Device Information**: Mobile vs desktop usage

### Google AdSense Provides:
- **Revenue**: Earnings from ads displayed
- **Ad Performance**: Click-through rates, impressions
- **Ad Placement**: Which ad positions perform best
- **User Engagement**: How ads affect user behavior

## Important Notes

1. **Approval Process**: AdSense approval can take time and requires quality content
2. **Compliance**: Ensure your site follows AdSense policies
3. **Privacy**: Add a privacy policy page for GDPR compliance
4. **Testing**: Verify tracking is working in Google Analytics real-time reports
5. **Performance**: Monitor site speed after adding tracking codes

## Additional Tracking Features

You can also track:
- **Form submissions** (contact forms)
- **Button clicks** (service applications)
- **Scroll depth**
- **Video engagement** (if you add videos)

For advanced tracking, consider setting up Google Tag Manager to manage all your tracking codes in one place.
