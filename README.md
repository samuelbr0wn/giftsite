# Gift List Website

A simple, elegant static website to display a list of gift items. Perfect for GitHub Pages deployment.

## 🚀 Quick Start

### Local Development
Simply open `index.html` in your web browser to view the site locally.

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to your repository Settings
3. Navigate to Pages (under Code and automation)
4. Under "Source", select "Deploy from a branch"
5. Select the `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be available at `https://yourusername.github.io/giftsite/`

## 📝 Customizing Items

To add, edit, or remove items from the list, modify the `items` array in `script.js`:

```javascript
const items = [
    {
        id: 1,
        name: "Item Name",
        description: "Item description",
        price: "$99",
        category: "Category"
    },
    // Add more items here...
];
```

## 🎨 Customization

- **Colors**: Edit the gradient and colors in `styles.css`
- **Layout**: Modify the grid in `.items-grid` to change the number of columns
- **Content**: Update the title and subtitle in `index.html`

## 📁 File Structure

```
giftsite/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript for dynamic item display
└── README.md       # This file
```

## 🌟 Features

- Responsive design (mobile-friendly)
- Modern gradient background
- Hover effects on item cards
- Easy to customize
- No build process required
- GitHub Pages ready

Enjoy! 🎁
