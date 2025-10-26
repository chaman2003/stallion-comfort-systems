# Quick Vercel Deployment Guide

## 1. Connect GitHub to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository: `stallion-comfort-systems`
4. Click "Import"

## 2. Add Environment Variables

In the "Environment Variables" section, add:

```
Name: MONGODB_URI
Value: mongodb+srv://username:password@cluster.mongodb.net/?appName=stallion

Name: NEXTAUTH_SECRET
Value: (run this locally: openssl rand -base64 32)

Name: NEXTAUTH_URL
Value: https://your-project.vercel.app
```

## 3. Deploy

Click "Deploy" and wait for the build to complete (usually 3-5 minutes).

## 4. MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a cluster (M0 free tier is fine)
3. Create a database user
4. Click "Connect" and copy the connection string
5. Replace `<username>`, `<password>` with your credentials
6. Add to Vercel as MONGODB_URI

### Allow Vercel IP Access

1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. For simplicity: Add `0.0.0.0/0` (allows all IPs)
4. For security: Use Vercel's static IPs (contact Vercel support)

## 5. Test Your Deployment

Once deployed, visit:
- Home page: `https://your-project.vercel.app/`
- Register: `https://your-project.vercel.app/register`
- Login: `https://your-project.vercel.app/login`
- Profile: `https://your-project.vercel.app/profile`
- Admin: `https://your-project.vercel.app/admin`

## Features Ready for Production

✅ User Authentication (Register/Login)
✅ Admin Dashboard
✅ Quote Management System
✅ Profile with Quote History
✅ Responsive Mobile UI
✅ MongoDB Database
✅ Secure Password Hashing

## Admin Test Account

- Username: `admin`
- Password: `123`

*⚠️ Change these in production!*

---

**Need help?** Check `VERCEL_DEPLOYMENT.md` for detailed troubleshooting.
