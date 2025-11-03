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
    loadLeaderboard();
    updateStats();
    
    // Keep the submit form visible for now (for testing)
    // document.getElementById('submit-score-form').style.display = 'none';
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
    const bugsFoundDisplay = document.getElementById('bugs-found');
    const totalBugsDisplay = document.getElementById('total-bugs');

    // Set total bugs
    totalBugs = bugItems.length;
    totalBugsDisplay.textContent = totalBugs;
    bugsFoundDisplay.textContent = 0;

    // Add click handlers to bug items
    bugItems.forEach(bugItem => {
        bugItem.addEventListener('click', function() {
            if (!this.classList.contains('found')) {
                this.classList.add('found');
                bugsFound++;
                bugsFoundDisplay.textContent = bugsFound;

                // Play success animation
                this.style.animation = 'foundBug 0.5s ease';

                // Check if all bugs are found
                if (bugsFound === totalBugs) {
                    setTimeout(() => {
                        showSuccessModal();
                        updateTotalBugsFoundStat();
                    }, 500);
                }
            }
        });
    });
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('active');
    
    // Show the submit score form
    setTimeout(() => {
        const submitForm = document.getElementById('submit-score-form');
        submitForm.style.display = 'block';
        
        // Smooth scroll to the form
        submitForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Focus on the name input
        setTimeout(() => {
            document.getElementById('player-name-bug-hunt').focus();
        }, 500);
    }, 300);
}

// ===================================
// Leaderboard
// ===================================
function submitToLeaderboard() {
    const nameInput = document.getElementById('player-name-bug-hunt');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Please enter your name!');
        return;
    }
    
    // Get total score (bugs found)
    const totalScore = bugsFound;
    
    if (totalScore === 0) {
        alert('Find some bugs first!');
        return;
    }
    
    // Get existing leaderboard from localStorage
    let leaderboard = JSON.parse(localStorage.getItem('bugHuntersLeaderboard')) || [];
    
    // Add new entry
    const entry = {
        name: name,
        score: totalScore,
        date: new Date().toISOString()
    };
    
    leaderboard.push(entry);
    
    // Sort by score (descending)
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Keep only top 10
    leaderboard = leaderboard.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('bugHuntersLeaderboard', JSON.stringify(leaderboard));
    
    // Send to Google Sheets
    sendToGoogleSheets(entry);
    
    // Clear input
    nameInput.value = '';
    
    // Hide the submit form
    document.getElementById('submit-score-form').style.display = 'none';
    
    // Reload leaderboard display
    loadLeaderboard();
    
    // Show success message and scroll to leaderboard
    alert(`🎉 ${name}, you're on the leaderboard with ${totalScore} points!`);
    
    // Scroll to leaderboard section
    setTimeout(() => {
        scrollToSection('leaderboard');
    }, 500);
}

function loadLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-entries');
    const leaderboard = JSON.parse(localStorage.getItem('bugHuntersLeaderboard')) || [];
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<li style="text-align: center; color: var(--text-secondary);">No entries yet. Be the first!</li>';
        return;
    }
    
    leaderboardList.innerHTML = leaderboard.map(entry => `
        <li>
            <span class="leaderboard-name">${escapeHtml(entry.name)}</span>
            <span class="leaderboard-score">${entry.score} pts</span>
        </li>
    `).join('');
}

function updateStats() {
    // Stats are updated through other functions
}

function updateTotalBugsFoundStat() {
    document.getElementById('total-bugs-found-stat').textContent = bugsFound;
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
// Keyboard Shortcuts
// ===================================
document.addEventListener('keydown', (e) => {
    // Press Escape to close modals
    if (e.key === 'Escape') {
        const successModal = document.getElementById('success-modal');
        
        if (successModal.classList.contains('active')) {
            closeModal();
        }
    }
});

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
