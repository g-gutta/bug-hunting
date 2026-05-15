// ===================================
// Bug Hunters: Teen QA Challenge
// JavaScript for Interactive Features
// ===================================

// Global State
let bugsFound = 0;
let totalBugs = 7;

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeBugHunt();
    initializeBuggyFeatures();
    initializeCheckboxBugs();
});

// ===================================
// Smooth Scrolling
// ===================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===================================
// Bug Hunt Zone
// ===================================
function initializeBugHunt() {
    const bugItems = document.querySelectorAll('.bug-item');

    // Set total bugs (clickable items only - Resources link and missing image)
    totalBugs = 7; // Fixed: 2 clickable (resources, image) + 5 radio buttons (4 form + newsletter + calculator)
    
    console.log('Found', bugItems.length, 'clickable bug items');

    // Add click handlers to bug items
    bugItems.forEach(bugItem => {
        bugItem.addEventListener('click', function(e) {
            // For the resources link, don't prevent default (let it open new tab)
            // For other items like image, we can prevent default
            if (!this.id || this.id !== 'reviews-link') {
                e.preventDefault();
            }
            
            if (!this.classList.contains('found')) {
                this.classList.add('found');
                
                // Track which bug was found
                const bugNumber = this.dataset.bug;
                if (bugNumber && !bugsFoundDetails.includes(bugNumber)) {
                    bugsFoundDetails.push(bugNumber);
                    bugsFound++;
                    
                    console.log('Bug #' + bugNumber + ' found via click. Total bugs:', bugsFound);
                }

                // Play success animation
                this.style.animation = 'foundBug 0.5s ease';

                // Simple visual feedback without popup
                this.style.backgroundColor = 'rgba(0, 255, 136, 0.2)';
                this.style.border = '2px solid var(--neon-green)';
                this.style.padding = '10px';
                this.style.borderRadius = '8px';

                // Check if all bugs are found - removed success modal popup
                // Success modal popup removed per user request
            }
        });
    });
}

// Initialize radio button bug detection for form fields
// Track bugs immediately when radio buttons are selected
function initializeCheckboxBugs() {
    console.log('Radio buttons initialized. Bugs will be tracked on selection.');
    
    // Track when radio buttons are selected
    const allRadios = document.querySelectorAll('input[type="radio"][name^="bug-"]');
    allRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const bugName = this.name;
            const bugNumber = bugName.replace('bug-', '');
            const isYes = this.value === 'yes';
            
            console.log(`Bug ${bugName} selected: ${this.value}`);
            
            if (isYes) {
                // Track the bug if "Yes" is selected
                if (!bugsFoundDetails.includes(bugNumber)) {
                    bugsFoundDetails.push(bugNumber);
                    bugsFound++;
                    console.log(`Bug #${bugNumber} identified. Total bugs: ${bugsFound}`);
                }
            } else {
                // Remove the bug if "No" is selected
                const index = bugsFoundDetails.indexOf(bugNumber);
                if (index > -1) {
                    bugsFoundDetails.splice(index, 1);
                    bugsFound--;
                    console.log(`Bug #${bugNumber} removed. Total bugs: ${bugsFound}`);
                }
            }
            
            // Check if all bugs are found - removed success modal popup
            // Success modal popup removed per user request
        });
    });
}

// Bug popups removed - all info shown in final summary
// Keeping function for compatibility but it does nothing
function showBugFoundMessage(bugNumber) {
    // No longer showing individual popups - all details shown in final results
    return;
}

// ===================================
// Results Display
// ===================================

// Array to track which bugs were found
let bugsFoundDetails = [];

function showResults() {
    const nameInput = document.getElementById('student-name');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    
    // Display student information
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-score').textContent = `${bugsFound} / ${totalBugs}`;
    const percentage = Math.round((bugsFound / totalBugs) * 100);
    document.getElementById('display-completion').textContent = `${percentage}%`;
    
    // Display bugs found
    displayBugsFound();
    
    // Hide score summary and show results
    document.getElementById('score-summary').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    setTimeout(() => {
        scrollToSection('results');
    }, 300);
}

function displayBugsFound() {
    const bugsList = document.getElementById('all-bugs-info');
    
    const allBugDetails = {
        '1': { 
            emoji: '🧩', 
            title: 'Broken Link', 
            location: 'Navigation - Resources link',
            description: 'The "Resources" link in the navigation points to a non-existent page (404 error).',
            lesson: 'Always verify that all navigation links work correctly before launching a website. Test every link!'
        },
        '5': { 
            emoji: '⏳', 
            title: 'Missing Image', 
            location: 'Hero Section',
            description: 'An image has an incorrect file path, causing it to fail loading.',
            lesson: 'Always verify image paths are correct and include proper alt text for accessibility. Test all media assets.'
        },
        '4': { 
            emoji: '💬', 
            title: 'Mismatched Label/Placeholder', 
            location: 'Registration Form - First field',
            description: 'The label says "Email Address:" but the placeholder text says "Enter your name".',
            lesson: 'Consistency in form fields is essential for user clarity and accessibility. Labels and placeholders must match.'
        },
        '7': { 
            emoji: '🔐', 
            title: 'Password Security Bug', 
            location: 'Registration Form - Password field',
            description: 'The password field uses type="text" instead of type="password", showing passwords in plain text.',
            lesson: 'This is a critical security vulnerability! Password fields must always mask user input to protect sensitive data.'
        },
        '6': { 
            emoji: '📞', 
            title: 'Phone Number Validation Bug', 
            location: 'Registration Form - Phone field',
            description: 'The phone number field accepts letters, symbols, and any length instead of requiring exactly 10 digits.',
            lesson: 'Field-specific validation is important. Phone numbers should only accept numeric input with the correct length.'
        },
        '8': { 
            emoji: '💡', 
            title: 'Calculation Error', 
            location: 'Score Calculator',
            description: 'The calculator adds base score + multiplier instead of multiplying them (e.g., $50 + 2 = $52 instead of $100).',
            lesson: 'Logic errors in calculations can cause serious problems. Always test mathematical operations with various inputs.'
        },
        '2': { 
            emoji: '📧', 
            title: 'Email Validation Error', 
            location: 'Newsletter Section - Email field',
            description: 'The newsletter email field accepts invalid email addresses (missing @ symbol) or empty values.',
            lesson: 'Proper email validation is crucial for data security and user experience. Use regex patterns to validate email format.'
        }
    };
    
    // Display bugs in specific order with sequential numbering
    const bugOrder = ['1', '5', '4', '7', '6', '8', '2'];
    bugsList.innerHTML = bugOrder.map((bugNum, index) => {
        const bug = allBugDetails[bugNum];
        const wasFound = bugsFoundDetails.includes(bugNum);
        const displayNumber = index + 1; // Sequential numbering 1-7
        
        return `
            <div class="bug-detail-card ${wasFound ? 'found' : 'not-found'}">
                <div class="bug-detail-header">
                    <span class="bug-emoji-large">${bug.emoji}</span>
                    <div class="bug-header-info">
                        <div class="bug-number">Bug #${displayNumber}</div>
                        <h4 class="bug-detail-title">${bug.title}</h4>
                        <div class="bug-status">${wasFound ? '✓ Found' : '✗ Not Found'}</div>
                    </div>
                </div>
                <div class="bug-detail-body">
                    <div class="bug-detail-section">
                        <strong>📍 Location:</strong> ${bug.location}
                    </div>
                    <div class="bug-detail-section">
                        <strong>🔍 What's Wrong:</strong> ${bug.description}
                    </div>
                    <div class="bug-detail-section lesson">
                        <strong>💡 QA Lesson:</strong> ${bug.lesson}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===================================
// Utility Functions
// ===================================
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ===================================
// Optional: Add sparkle effect on clicks
// ===================================
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bug-item') && !e.target.classList.contains('found')) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'var(--neon-green)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleAnimation 0.6s ease-out forwards';
    sparkle.style.boxShadow = '0 0 20px var(--neon-green)';
    sparkle.style.zIndex = '9999';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(3) translateY(-30px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Buggy Features for Bug Hunt
// ===================================

function initializeBuggyFeatures() {
    setupBuggyForm();
    setupBrokenLinkDetection();
    setupPhoneValidation();
}

// Special handler for the broken Resources link
function setupBrokenLinkDetection() {
    const reviewsLink = document.getElementById('reviews-link');
    
    if (reviewsLink) {
        console.log('Resources link found, setting up bug detection');
        
        // Add a click handler to mark it as a bug immediately when clicked
        reviewsLink.addEventListener('click', function(e) {
            console.log('Resources link clicked!');
            
            // Let the link open in new tab first, then mark as found
            if (!this.classList.contains('found')) {
                // Small delay to let the new tab open
                setTimeout(() => {
                    console.log('Marking resources link as found');
                    
                    // Mark as found (no bug icon)
                    this.classList.add('bug-item');
                    this.classList.add('found');
                
                    // Update the bug counter
                    bugsFound++;
                    
                    // Track which bug was found
                    if (!bugsFoundDetails.includes('1')) {
                        bugsFoundDetails.push('1');
                    }
                    
                    // Simple visual feedback without popup
                    this.style.backgroundColor = 'rgba(0, 255, 136, 0.2)';
                    this.style.border = '2px solid var(--neon-green)';
                    this.style.padding = '10px 20px';
                    this.style.borderRadius = '5px';
                    
                    console.log('Bug #1 marked. Total bugs found:', bugsFound);
                }, 500); // 500ms delay to let the new tab open
            } else {
                console.log('Resources link already marked as found');
            }
        });
    } else {
        console.error('Resources link not found in DOM!');
    }
}

// Newsletter subscribe handler (working button - NOT a bug)
function handleNewsletterSubscribe() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter your email address!');
        return;
    }
    
    // This button works - it shows a success message
    alert('Thank you for subscribing! 🎯');
    emailInput.value = '';
}

// Bug #8: Calculator with wrong logic (adds instead of multiplies)
function calculateTotal() {
    const price = parseFloat(document.getElementById('game-price').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const taxRate = 0.1; // 10% tax
    
    // BUG: Should be price * quantity * (1 + taxRate), but we're adding instead of multiplying
    const subtotal = price + quantity; // Wrong! Should be price * quantity
    const total = subtotal * (1 + taxRate);
    
    document.getElementById('total-result').textContent = total.toFixed(2);
}

// Bug #6: Phone number field with improper validation
function setupPhoneValidation() {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        // BUG: No validation at all - allows letters, numbers, any characters, any length!
        // Should:
        // 1. Only allow numbers (no letters)
        // 2. Require exactly 10 digits
        // 3. Show error messages for invalid input
        // But we intentionally don't do any of this - making it a bug students need to find
        
        phoneInput.addEventListener('blur', function() {
            if (this.value) {
                // Don't validate - this is the bug! It accepts anything
                console.log('Phone validation bug: accepts "' + this.value + '" which may contain letters or wrong length');
            }
        });
    }
}

// Bug #2: Form allows submission with invalid data
// Bug #2, #6, #7: Form with validation issues - but bugs are found via radio buttons
function setupBuggyForm() {
    const form = document.getElementById('registration-form');
    
    // Add input listeners to remove red highlight when user types
    const formFields = [
        document.getElementById('username'),
        document.getElementById('email'),
        document.getElementById('password'),
        document.getElementById('phone')
    ];
    
    formFields.forEach(field => {
        field.addEventListener('input', function() {
            if (this.value.trim()) {
                // Remove red highlight when user fills the field
                this.style.removeProperty('border');
                this.style.removeProperty('background-color');
                this.style.removeProperty('box-shadow');
            }
        });
    });
    
    // Handle form submission - validate bugs
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Create Account button clicked - validating bugs...');
        
        // Check which radio buttons are selected
        validateFormBugs();
    });
}

function validateFormBugs() {
    // First, validate all form fields are filled
    const formFields = [
        document.getElementById('username'),
        document.getElementById('email'),
        document.getElementById('password'),
        document.getElementById('phone')
    ];
    
    let allFieldsFilled = true;
    
    formFields.forEach(field => {
        if (!field.value.trim()) {
            // Highlight empty field in red with important
            field.style.setProperty('border', '3px solid #ff006e', 'important');
            field.style.setProperty('background-color', 'rgba(255, 0, 110, 0.2)', 'important');
            field.style.setProperty('box-shadow', '0 0 15px rgba(255, 0, 110, 0.4)', 'important');
            allFieldsFilled = false;
        } else {
            // Remove red highlight if filled
            field.style.removeProperty('border');
            field.style.removeProperty('background-color');
            field.style.removeProperty('box-shadow');
        }
    });
    
    if (!allFieldsFilled) {
        alert('Please fill in all form fields!');
        return;
    }
    
    // Radio buttons are already tracked in initializeCheckboxBugs()
    // Just log the current status
    console.log('Form submitted. Total bugs found:', bugsFound);
    
    // Visual feedback - form submitted successfully
    alert('Form submitted! Your bug selections have been recorded.');
}
