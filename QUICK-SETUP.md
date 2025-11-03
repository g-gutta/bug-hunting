# Quick Setup Guide - Google Sheets Integration

## ⚡ 5-Minute Setup

### 1️⃣ Create Google Sheet
- Go to sheets.google.com
- Create new spreadsheet: "Bug Hunters Leaderboard"
- Add headers: Name | Score | Date | Timestamp | Browser

### 2️⃣ Add Apps Script
- Extensions → Apps Script
- Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.name, data.score, data.date, data.timestamp, data.userAgent]);
    return ContentService.createTextOutput(JSON.stringify({'status': 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({'status': 'error'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3️⃣ Deploy Script
- Deploy → New deployment → Web app
- Execute as: Me
- Who has access: Anyone
- Deploy → Copy URL

### 4️⃣ Update Website
- Open `google-sheets.js`
- Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your copied URL
- Save and push to GitHub

### 5️⃣ Test
- Visit your website
- Complete bug hunt
- Submit name
- Check Google Sheet - new row appears! ✅

---

## 📥 Download Excel File

**Option 1: Download from Google Sheets**
- File → Download → Microsoft Excel (.xlsx)

**Option 2: View in Browser**
- Your spreadsheet is always accessible at sheets.google.com

---

## 🔍 What Gets Collected

| Column | Example |
|--------|---------|
| Name | "Sarah" |
| Score | 7 |
| Date | "11/2/2025, 3:45 PM" |
| Timestamp | "2025-11-02T15:45:30.123Z" |
| Browser | "Chrome on Windows" |

---

## ❗ Troubleshooting

**No data appearing?**
1. Check browser console (F12) for errors
2. Verify URL in `google-sheets.js` is correct
3. Re-deploy script and copy new URL
4. Clear browser cache

**Permission denied?**
- Re-authorize: Deploy → Manage deployments → Edit → Allow access

---

## 💡 Tips

- Check sheet on mobile with Google Sheets app
- Sort by Score column to see top performers
- Use Google Sheets filters for analysis
- Share view-only link with your team

**Need detailed help?** See `SETUP-INSTRUCTIONS.md`
