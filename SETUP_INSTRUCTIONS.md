# 🚀 Final Setup Instructions

Your portfolio website is now ready! Follow these final steps to get it running:

## 1. Environment Variables Setup

Create a `.env.local` file in the `portfolio-website` directory:

\`\`\`bash
cd portfolio-website
\`\`\`

Create the file and add your API keys:

\`\`\`env
# Resend API Key for email functionality
RESEND_API_KEY=your_resend_api_key_here

# GitHub Token (optional but recommended for repo stats)
GITHUB_TOKEN=your_github_token_here
\`\`\`

### Getting Your API Keys:

**Resend API Key:**
1. Go to https://resend.com
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into `.env.local`

**GitHub Token (Optional):**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Website"
4. Select only the `public_repo` scope
5. Generate and copy the token
6. Paste it into `.env.local`

## 2. Add Your Resume PDF

1. Export your LaTeX resume to PDF (use Overleaf or local LaTeX compiler)
2. Save it as `resume.pdf`
3. Place it in `portfolio-website/public/resume.pdf`
4. Delete `public/resume-placeholder.txt`

## 3. Run the Development Server

\`\`\`bash
# Make sure you're in the portfolio-website directory
cd portfolio-website

# Start the dev server
npm run dev
\`\`\`

Open your browser and visit: **http://localhost:3000**

## 4. Test All Features

✅ **Navigation** - Click through all nav links
✅ **Projects** - Verify GitHub stars/forks load (if you added GITHUB_TOKEN)
✅ **Contact Form** - Test sending a message (requires RESEND_API_KEY)
✅ **Blog Posts** - Click on blog posts to view them
✅ **Resume** - Download and preview should work
✅ **Chatbot Bubble** - Click the floating bot icon
✅ **Mobile** - Test responsive design (resize browser or use dev tools)

## 5. Customize Your Content

All your personal data is in the `data/` folder:

- **Experience**: `data/experience.ts` ✅ Already populated from your resume
- **Projects**: `data/projects.ts` ✅ Already populated with your GitHub repos
- **Skills**: `data/skills.ts` ✅ Already populated
- **Social Links**: `data/social.ts` ✅ Already set with your URLs

You can edit these files to update content anytime!

## 6. Deploy to Vercel

When ready to deploy:

1. Push your code to GitHub (make sure `.env.local` is NOT committed)
2. Visit https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`
   - `GITHUB_TOKEN`
6. Click "Deploy"

Your site will be live in minutes! 🎉

## 🐛 Troubleshooting

**Port already in use?**
\`\`\`bash
# Kill process on port 3000
# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Then run npm run dev again
\`\`\`

**CSS warnings in editor?**
- The Tailwind @apply warnings are normal and won't affect the app
- Add this to VS Code settings to suppress them (optional):
  \`\`\`json
  "css.lint.unknownAtRules": "ignore"
  \`\`\`

**GitHub stars not showing?**
- Add GITHUB_TOKEN to `.env.local`
- Restart the dev server
- Check browser console for API errors

**Contact form not working?**
- Verify RESEND_API_KEY is correct in `.env.local`
- Check Resend dashboard for API logs
- Make sure you're using a verified domain or Resend's test domain

## 📝 Next Steps

1. ✨ Customize colors in `tailwind.config.ts`
2. 📸 Add project screenshots to `public/images/`
3. ✍️ Write more blog posts in `app/blog/[slug]/page.tsx`
4. 🎨 Add your own photos/illustrations
5. 🔍 Update SEO metadata in `app/layout.tsx`

## 🎉 You're All Set!

Your premium portfolio website is ready to showcase your work. If you have any questions:

- Check the main `README.md` for detailed documentation
- Review the code comments for implementation details
- Explore the `data/` folder to customize content

**Happy showcasing! 🚀**

