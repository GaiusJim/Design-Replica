# cPanel Configuration Guide

## How to Set Up Your Node.js App on cPanel

### Step 1: Create the App in cPanel
1. Log into cPanel
2. Go to **Node.js Manager** (or **Node.js App Manager**)
3. Click **Create Application**
4. Configure:
   - **Application Mode**: production
   - **Node.js Version**: 20.x
   - **Application Root**: `/home/username/public_html/gaiusjimedits`
   - **Application URL**: Your domain (example.com)
   - **Application Startup File**: `dist/index.cjs`

### Step 2: Environment Variables
In cPanel Node.js Manager, add these variables:
- `NODE_ENV`: production
- `PORT`: 3000 (cPanel manages port forwarding)
- `DATABASE_URL`: your PostgreSQL connection string

### Step 3: Deploy Your Code
The `.cpanel.yml` file will:
1. Install dependencies with `npm install`
2. Build the app with `npm run build`
3. Place everything in `/public_html/gaiusjimedits`

### Step 4: Start the App
Click the **Start App** button in cPanel's Node.js Manager.

### Troubleshooting

**If you see "Index of /" error:**
- Make sure the Node.js app is started in cPanel
- Verify the Application Startup File is set to `dist/index.cjs`
- Check that the Application Root path is correct

**If the app won't start:**
- Check logs in cPanel's Node.js Manager
- Verify `DATABASE_URL` environment variable is set correctly
- Ensure PostgreSQL is running and accessible
