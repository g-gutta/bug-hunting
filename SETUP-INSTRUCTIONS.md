# Google Sheets Setup Instructions

This guide will help you set up a Google Sheet to automatically collect leaderboard data from the Bug Hunters website.

## 📊 Step-by-Step Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Bug Hunters Leaderboard"
4. In the first row, add these headers:
   - A1: **Name**
   - B1: **Score**
   - C1: **Date**
   - D1: **Timestamp**
   - E1: **Browser**

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append new row with the data
    sheet.appendRow([
      data.name,
      data.score,
      data.date,
      data.timestamp,
      data.userAgent
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Add a GET endpoint to test
function doGet() {
  return ContentService.createTextOutput("Bug Hunters Leaderboard API is running!");
}
```

4. Click **Save** (💾 icon)
5. Name your project: "Bug Hunters API"

### Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description**: "Bug Hunters Leaderboard API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Important**: Review permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to Bug Hunters API (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

### Step 4: Update Your Website Code

1. Open the file `google-sheets.js` in your project
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied
4. Example:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```
5. Save the file
6. Commit and push to GitHub

## 🎉 Testing

1. Open your Bug Hunters website
2. Complete the bug hunt (find all 7 bugs)
3. Submit your name on the leaderboard
4. Check your Google Sheet - a new row should appear!

## 📋 Viewing Your Data

### In Google Sheets:
- Open your spreadsheet anytime to see all submissions
- Sort by score (column B) to see top performers
- Sort by date (column C) to see recent entries
- Use filters to analyze the data

### Download as Excel:
1. In Google Sheets, go to **File** → **Download**
2. Choose **Microsoft Excel (.xlsx)**
3. Open in Excel or any spreadsheet software

## 🔧 Troubleshooting

### Data not appearing?
1. Check browser console (F12) for errors
2. Verify the URL in `google-sheets.js` is correct
3. Make sure you clicked "Allow" during authorization
4. Re-deploy the script if needed

### Need to update the script?
1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click ✏️ edit icon
4. Change version to "New version"
5. Click **Deploy**
6. URL stays the same - no need to update website!

## 🔒 Privacy & Security

- The script only collects: name, score, date, and browser info
- All data goes to YOUR Google Sheet (you own the data)
- Only you can access the spreadsheet
- No personal information is collected

## 📊 Data Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| Name | Player's submitted name | "Alex" |
| Score | Number of bugs found | 7 |
| Date | Human-readable timestamp | "11/2/2025, 2:30:45 PM" |
| Timestamp | ISO format for sorting | "2025-11-02T14:30:45.123Z" |
| Browser | User's browser info | "Chrome 119 on Windows" |

## 🎨 Optional Enhancements

### Add Data Validation:
In Google Sheets, select column B (Score) and add data validation to ensure scores are between 0-7.

### Create Charts:
1. Select your data
2. Click **Insert** → **Chart**
3. Create bar charts, pie charts, or timelines

### Auto-Sort:
Add this to your Apps Script to auto-sort by score:
```javascript
// After sheet.appendRow([...])
var range = sheet.getDataRange();
range.sort([{column: 2, ascending: false}]); // Sort by score (column B)
```

## 📱 Mobile Access

Install the Google Sheets app on your phone to check submissions on the go!

---

**Need Help?** Check the [Google Apps Script documentation](https://developers.google.com/apps-script) or contact your team.
