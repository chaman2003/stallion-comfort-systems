# Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository linked
- MongoDB Atlas cluster created with IP whitelist set to allow Vercel

## Deployment Steps

### 1. Set Environment Variables on Vercel

Go to your project settings on Vercel and add these environment variables:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=stallion
NEXTAUTH_SECRET=<generate-a-strong-random-secret>
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
```

### 2. Generate NEXTAUTH_SECRET

Run this command locally to generate a secure secret:
```bash
openssl rand -base64 32
```

### 3. MongoDB Configuration

**Important: Allow Vercel IP addresses in MongoDB Atlas**

1. Go to MongoDB Atlas Dashboard
2. Navigate to Network Access
3. Add Vercel IP addresses or use CIDR: 0.0.0.0/0 (less secure but simpler for development)
4. Or use MongoDB Atlas IP Access List to allow your Vercel deployment

### 4. Deploy

Push to your GitHub repository's main branch:
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

Vercel will automatically detect changes and deploy.

## Verification

### Test API Endpoints
- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`
- Admin Login: `POST /api/auth/admin-login`
- Get Quotes: `GET /api/quotes?userId=<USER_ID>`
- Create Quote: `POST /api/quotes`

### Test Database Connection
- Create a test user via registration
- Login with the test user
- Check MongoDB Atlas for the created user document

## Troubleshooting

### MongoDB Connection Error
- Verify MONGODB_URI is correct in Vercel environment variables
- Check MongoDB Atlas IP whitelist includes Vercel servers
- Ensure database name matches (currently: `stallion`)

### Authentication Issues
- Verify NEXTAUTH_SECRET is set and matches deployment
- Clear browser localStorage and try again
- Check browser console for errors

### Build Failures
- Check Vercel build logs for detailed error messages
- Ensure all TypeScript types are correct
- Verify all required environment variables are set

## Production Considerations

1. **Database Security**
   - Use strong MongoDB passwords
   - Restrict IP access in MongoDB Atlas
   - Consider using VPN or private endpoints

2. **Environment Variables**
   - Never commit `.env.local` files
   - Use Vercel dashboard to manage secrets
   - Rotate NEXTAUTH_SECRET periodically

3. **Monitoring**
   - Enable MongoDB Atlas monitoring
   - Set up Vercel analytics
   - Monitor API endpoint performance

4. **Backups**
   - Enable MongoDB automatic backups
   - Test backup restoration regularly
   - Keep local backups

## Admin Credentials

For admin login:
- Username: `admin`
- Password: `123`

*(Consider changing these in production)*

## Features Deployed

- ✅ User Authentication (Register/Login)
- ✅ Admin Authentication
- ✅ Quote Management System (CRUD operations)
- ✅ Modern Profile Page with Quote History
- ✅ MongoDB Integration
- ✅ Bcrypt Password Hashing
- ✅ Responsive UI with shadcn/ui and Tailwind CSS

## Support

For issues or questions:
1. Check Vercel deployment logs
2. Review MongoDB Atlas logs
3. Check application console errors
4. Refer to Next.js documentation: https://nextjs.org/docs
