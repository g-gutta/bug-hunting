# Bug Hunters: Teen QA Challenge 🐞

An interactive bug hunting website where kids learn QA testing by finding real bugs embedded in a mock GameStore website. Find all 7 bugs and master software testing skills!

## 🎯 About

Bug Hunters is an educational web experience that teaches kids about software testing through hands-on bug discovery. Players hunt for 7 real bugs hidden in an interactive mock website, learning about common software defects, security issues, and best practices in web development.

## ✨ Features

### 🎮 Interactive Bug Hunting Experience

1. **Hero Section** - Cyberpunk-themed welcome with animated gradients
2. **GameStore Mock Website** - Realistic e-commerce site with 7 embedded bugs
3. **Real-time Bug Detection** - Bugs tracked immediately when clicked or radio buttons selected
4. **Radio Button Identification** - Mark bugs using "Is a bug?" Yes/No radio buttons
5. **Results Display** - Comprehensive bug report with found/not-found status
6. **Form Validation** - Empty fields highlighted in red for data quality

### 🐛 7 Real Bugs to Find

1. **Broken Link** (🧩) - Navigation link returns 404 error
2. **Missing Image** (⏳) - Broken image path in hero section
3. **Mismatched Label** (💬) - Label and placeholder don't match
4. **Password Security** (🔐) - Password shown in plain text
5. **Phone Validation** (📞) - Accepts letters and any length
6. **Calculator Error** (�) - Adds instead of multiplies
7. **Email Validation** (�) - Newsletter field accepts invalid email addresses

### 🎨 Design Highlights

- **Cyberpunk/Neon Theme** with vibrant gradients (purple, blue, green, pink)
- **Beautiful Animations** and smooth hover effects
- **Fully Responsive** - works on desktop, tablet, and mobile
- **Modern Typography** using Poppins font from Google Fonts
- **Interactive Feedback** with glowing effects and popups

## 🚀 Getting Started

### Local Development

1. Clone this repository
2. Open `index.html` in your web browser
3. No build tools or dependencies required!

### GitHub Pages Deployment

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy bug hunting website"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select `main` branch as source
   - Click Save

3. Your site will be live at:
   `https://g-gutta.github.io/bug-hunting/`

### 💾 Data Storage

**Local browser storage with localStorage:**
- Bug tracking saved during session
- No external database or backend required
- Pure client-side JavaScript implementation
- Results displayed on-demand when student submits name

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with radio buttons and data attributes
- **CSS3** - Custom properties, gradients, animations, grid, flexbox
- **Vanilla JavaScript (ES6+)** - Event-driven bug tracking with no frameworks
- **localStorage API** - Session-based bug tracking
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
bug-hunting/
├── index.html               # Main HTML - GameStore mock website
├── styles.css               # All styling and animations (1700+ lines)
├── script.js                # Bug detection and tracking logic (570+ lines)
├── README.md                # This file
├── SETUP-INSTRUCTIONS.md    # Setup guide
└── QUICK-SETUP.md           # Quick reference guide
```

## 🎮 How to Play

1. **Explore the Website** - Look around the GameStore mock website
2. **Click Suspicious Elements** - Click on the broken Reviews link and missing image
3. **Use Radio Buttons** - Answer "Is a bug?" questions throughout the form, calculator, and newsletter sections
4. **Real-time Tracking** - Bugs are tracked immediately when you click or select Yes/No
5. **Fill the Form** - Complete all form fields (empty fields turn red if not filled)
6. **View Results** - Scroll to "Your Results" section, enter your name, and see comprehensive bug report
7. **Learn from Each Bug** - Review detailed explanations and QA lessons for all 7 bugs

## 🐛 Bug Categories

### Clickable Bugs (2)
- **Broken Link** - Reviews navigation link (opens 404 page)
- **Missing Image** - Hero section image with broken path

### Radio Button Bugs (5)
- **Email Validation** - Newsletter field accepts invalid emails
- **Mismatched Label** - Registration form label/placeholder inconsistency
- **Password Security** - Password shown in plain text (type="text")
- **Phone Validation** - Phone field accepts letters and any length
- **Calculator Error** - Price calculator adds instead of multiplying

### Detection Methods
- **Click Detection** - Click buggy elements for immediate tracking
- **Radio Button Selection** - Select "Yes" when asked "Is a bug?"
- **Real-time Tracking** - All bugs tracked instantly, no form submission needed
- **Form Validation** - Empty fields highlighted in red on submit

## 🎓 Learning Outcomes

Kids will learn to:
- **Bug Identification** - Recognize common defects in web applications
- **Security Awareness** - Understand critical vulnerabilities (plain text passwords)
- **Form Validation** - Learn why proper input validation prevents bad data
- **Navigation Testing** - Verify all links lead to correct destinations
- **UI/UX Issues** - Spot inconsistencies like mismatched labels
- **Logic Errors** - Identify calculation bugs in business logic
- **Manual Testing Skills** - Develop systematic approach to QA testing
- **Attention to Detail** - Train observation skills for thorough testing
- **Critical Thinking** - Analyze what should vs. what does happen

## 🌟 Customization

### Adding More Bugs

**For Clickable Bugs:**
1. Add element in `index.html` with `class="bug-item" data-bug="9"`
2. Update `totalBugs = 7` to new number in `script.js`
3. Add bug details in `displayBugsFound()` and `showAllBugsPopup()` functions

**For Radio Button Bugs:**
1. Add radio buttons in `index.html`:
   ```html
   <label>Is a bug?</label>
   <input type="radio" name="bug-9" value="yes"> Yes
   <input type="radio" name="bug-9" value="no"> No
   ```
2. Update `totalBugs` and add bug details to results functions
3. The `initializeCheckboxBugs()` function automatically tracks all radio buttons

### Changing Theme Colors

Update CSS variables in `styles.css`:

```css
:root {
    --neon-blue: #00f7ff;
    --neon-green: #00ff88;
    --neon-purple: #b24bf3;
    --neon-pink: #ff006e;
    --bg-dark: #0a0a0f;
}
```

### Modifying the Mock Website

The GameStore sections in `index.html` can be customized:
- Navigation links
- Hero section content
- Form fields
- Calculator inputs
- Newsletter section

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## � Live Demo

Once deployed, visit: `https://g-gutta.github.io/bug-hunting/`

## 👥 Author

**Gowtham Gutta**
- GitHub: [@g-gutta](https://github.com/g-gutta)
- Repository: [bug-hunting](https://github.com/g-gutta/bug-hunting)

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own challenges or improvements!

---

**Happy Bug Hunting! 🔍🐛**
