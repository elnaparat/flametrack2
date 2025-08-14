# FireGuard AI - Drone Fire Detection Website

A modern, responsive website for your AI-powered fire detection drone startup. Features smooth animations, beautiful design, and a professional black/green color scheme.

## 🚀 Features

### Design & Animation

- **Modern UI/UX**: Clean, professional design with black and green color scheme
- **Smooth Animations**: CSS animations, scroll effects, and interactive elements
- **Responsive Design**: Fully responsive across all devices
- **Animated Drone**: Custom CSS animation of a drone with spinning propellers
- **Scroll Animations**: Elements fade in and slide in as you scroll
- **Interactive Elements**: Hover effects, ripple effects, and smooth transitions

### Sections Included

1. **Hero Section**: Eye-catching introduction with animated drone
2. **Operating Principle**: How your AI fire detection works
3. **Key Features**: Detailed feature breakdown with specifications
4. **Pricing Plans**: Three-tier pricing structure
5. **Team Members**: Professional team showcase
6. **Contact & Application Form**: Complete contact information and application form

### Technical Features

- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Form Handling**: Contact form with validation and success notifications
- **Performance Optimized**: Lazy loading, debounced scroll events
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
fire/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Download/Clone**: All files are ready to use
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (Optional): For best performance, use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization Guide

### Colors

The website uses CSS custom properties (variables) for easy color customization. Edit these in `styles.css`:

```css
:root {
  --primary-green: #00ff88; /* Main green color */
  --secondary-green: #00cc6a; /* Secondary green */
  --dark-green: #008f4d; /* Dark green */
  --black: #000000; /* Main black */
  --dark-gray: #111111; /* Dark gray */
  --medium-gray: #222222; /* Medium gray */
  --light-gray: #333333; /* Light gray */
  --white: #ffffff; /* White */
  --text-gray: #cccccc; /* Text gray */
}
```

### Content Customization

#### Company Information

- **Company Name**: Change "FireGuard AI" throughout the files
- **Contact Details**: Update phone, email, and address in the contact section
- **Team Members**: Replace placeholder team information with your actual team

#### Pricing

Edit the pricing plans in `index.html`:

```html
<div class="pricing-card">
  <div class="pricing-header">
    <h3>Your Plan Name</h3>
    <div class="price">
      <span class="currency">$</span>
      <span class="amount">Your Price</span>
      <span class="period">/month</span>
    </div>
  </div>
  <!-- Update features list -->
</div>
```

#### Features & Specifications

Update the technical specifications in the features section:

- Detection accuracy
- Operational range
- Flight time
- Weather resistance
- Coverage area

### Adding Real Images

1. Create an `images/` folder
2. Add your images (drone photos, team photos, etc.)
3. Update the HTML to use real images instead of placeholders:

```html
<!-- Replace placeholder with real image -->
<img src="images/your-image.jpg" alt="Description" class="member-photo" />
```

### Form Integration

The contact form is currently set up for demonstration. To make it functional:

1. **Backend Integration**: Connect to your preferred backend (PHP, Node.js, etc.)
2. **Email Service**: Integrate with services like SendGrid, Mailgun, or AWS SES
3. **Database**: Store applications in a database for follow-up

Example PHP integration:

```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $plan = $_POST['plan'];
    $message = $_POST['message'];

    // Send email
    $to = "your-email@company.com";
    $subject = "New FireGuard AI Application";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nPlan: $plan\nMessage: $message";

    mail($to, $subject, $body);

    // Redirect with success message
    header("Location: index.html?success=1");
}
?>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Performance Features

- **Lazy Loading**: Images load only when needed
- **Debounced Scroll Events**: Optimized scroll performance
- **CSS Animations**: Hardware-accelerated animations
- **Minimal JavaScript**: Efficient code with modern ES6+ features

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Support & Customization

### Common Customizations

1. **Change Logo**: Replace the fire icon with your company logo
2. **Update Colors**: Modify the CSS variables for different color schemes
3. **Add Sections**: Copy existing section structure for new content
4. **Modify Animations**: Adjust timing and effects in CSS

### Adding New Sections

1. Copy an existing section structure
2. Update the content and styling
3. Add navigation link
4. Update JavaScript if needed

## 🎯 SEO Optimization

The website includes:

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🔒 Security Considerations

- Form validation on both client and server side
- Sanitize user inputs
- Use HTTPS in production
- Implement CSRF protection for forms

## 📈 Analytics Integration

Add Google Analytics or other tracking:

```html
<!-- Add to <head> section -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR-GA-ID");
</script>
```

## 🚀 Deployment

### Static Hosting

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to S3 bucket

### Domain Setup

1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. Point DNS to your hosting provider
3. Enable HTTPS/SSL certificate

## 📞 Contact

For support or customization requests:

- Email: your-email@company.com
- Phone: +1 (555) 123-4567

---

**FireGuard AI** - Protecting lives and property with cutting-edge AI fire detection technology. 🚁🔥





