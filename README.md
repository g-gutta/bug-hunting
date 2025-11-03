# Bug Hunters: Teen QA Challenge 🐞

A modern, interactive one-page website designed to teach 14-15-year-olds about software testing and defect detection through gamification.

## 🎯 About

Bug Hunters is an educational web experience that makes QA testing fun and engaging for teens. Through interactive challenges, users learn to spot visual and functional bugs while understanding the strengths of both human testers and AI tools.

## ✨ Features

### 🧩 Interactive Sections

1. **Intro Section** - Welcome hero banner with animated neon lights and glitch effects
2. **Bug Hunt Zone** - Interactive buggy web page with 7 realistic defects to find
3. **Leaderboard** - Persistent scoring system with localStorage integration

### 🎨 Design Highlights

- **Dark Theme** with neon accents (blue, green, purple)
- **Smooth Animations** and hover effects
- **Fully Responsive** - works on desktop, tablet, and mobile
- **Modern Typography** using Poppins font
- **Glowing borders** and interactive feedback

## 🚀 Getting Started

### Local Development

1. Clone this repository
2. Open `index.html` in your web browser
3. No build tools or dependencies required!

### GitHub Pages Deployment

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the main branch as source
4. Your site will be live at `https://[username].github.io/[repo-name]/`

### 📊 Google Sheets Integration (Optional)

To collect all players' names and scores in a spreadsheet:

1. Follow the detailed instructions in `SETUP-INSTRUCTIONS.md`
2. Set up a Google Sheet and Apps Script (takes ~5 minutes)
3. Update the URL in `google-sheets.js`
4. All submissions will automatically be saved to your Google Sheet!

**Benefits:**
- View all submissions in real-time
- Download as Excel anytime
- Sort and analyze player data
- No backend server needed!

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, grid, flexbox
- **Vanilla JavaScript** - No frameworks or dependencies
- **localStorage** - Persistent leaderboard data

## 📁 Project Structure

```
bug-hunting/
├── index.html               # Main HTML file
├── styles.css               # All styling and animations
├── script.js                # Interactive functionality
├── google-sheets.js         # Google Sheets integration
├── SETUP-INSTRUCTIONS.md    # Google Sheets setup guide
├── assets/                  # Placeholder images folder
└── README.md                # This file
```

## 🎮 How to Play

1. **Start the Bug Hunt** - Click on defects in the buggy page (typos, alignment issues, broken links, etc.)
2. **Complete the Challenge** - Find all 7 bugs to complete the hunt
3. **Climb the Leaderboard** - Submit your score and compete with others

## 🐛 Types of Bugs Featured

- Spelling errors (typo in "Welcome")
- Poor color contrast (unreadable text)
- Alignment issues (misaligned elements)
- Missing images (broken placeholders)
- Tiny text (accessibility issues)
- Broken links (incorrect URLs)
- Low contrast footer text

## 🎓 Learning Outcomes

Teens will learn to:
- Identify common UI/UX defects
- Understand accessibility issues
- Appreciate the role of QA testing
- Develop attention to detail
- Practice visual inspection skills

## 🌟 Customization

### Adding More Bugs

Edit the `script.js` file and update the `totalBugs` variable and add more elements with the `bug-item` class and `data-bug` attributes in `index.html`.

### Changing Colors

Update CSS variables in `styles.css`:

```css
:root {
    --neon-blue: #00f7ff;
    --neon-green: #00ff88;
    --neon-purple: #b24bf3;
}
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👥 Credits

**Designed by the REALTOR.ca QA Team**

Inspiring the next generation of software testers.

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own challenges or improvements!

---

**Happy Bug Hunting! 🔍🐛**
