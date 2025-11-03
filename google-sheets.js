// ===================================
// Google Sheets Integration
// Sends leaderboard data to Google Sheets
// ===================================

// INSTRUCTIONS TO SET UP:
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste the Apps Script code from SETUP-INSTRUCTIONS.md
// 4. Deploy as web app and copy the URL
// 5. Replace YOUR_GOOGLE_APPS_SCRIPT_URL below with your URL

const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

function sendToGoogleSheets(entry) {
    // If URL is not configured, skip sending
    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        console.log('Google Sheets integration not configured yet');
        return;
    }
    
    // Prepare data to send
    const data = {
        name: entry.name,
        score: entry.score,
        date: new Date().toLocaleString(), // Human-readable format
        timestamp: entry.date, // ISO format for sorting
        userAgent: navigator.userAgent.substring(0, 100) // Browser info (truncated)
    };
    
    // Send data to Google Sheets via POST request
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        console.log('Score sent to Google Sheets successfully');
    })
    .catch((error) => {
        console.error('Error sending to Google Sheets:', error);
        // Don't show error to user, just log it
    });
}
