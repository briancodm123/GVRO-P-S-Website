# GVRO Public Services Website

A modern Next.js website for Greenville Roleplay Operations Public Services, featuring dark mode support and comprehensive department information.

## Features

- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 📱 **Responsive Design** - Optimized for all device sizes
- 🏢 **Department Information** - Complete department structures and hierarchies
- 📋 **Applications System** - Direct links to department application forms
- 📖 **Public Services Handbook** - Interactive collapsible handbook sections
- ⚖️ **Penal Codes** - Comprehensive searchable penal code database
- 👥 **Staff Directory** - Leadership team information and chain of command
- 📞 **Contact System** - Contact form with FormSubmit integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Static export ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GVRO-P-S-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── applications/       # Applications page
│   ├── contact/           # Contact page
│   ├── departments/       # Departments page
│   ├── handbook/          # Public Services handbook
│   ├── rules/             # Penal codes page
│   ├── staff/             # Staff directory
│   ├── thankyou/          # Thank you page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation bar
│   └── ThemeProvider.tsx  # Dark mode provider
├── data/                  # Data files
│   └── penalCodes.ts      # Penal codes database
└── public/               # Static assets
```

## Pages

- **Home** (`/`) - Landing page with quick links
- **Departments** (`/departments`) - Department structures and ranks
- **Applications** (`/applications`) - Application forms for each department
- **Penal Codes** (`/rules`) - Complete penal code database
- **Handbook** (`/handbook`) - Public Services regulations and policies
- **Staff** (`/staff`) - Leadership team and chain of command
- **Contact** (`/contact`) - Contact form and information
- **Thank You** (`/thankyou`) - Form submission confirmation

## Dark Mode

The website features a comprehensive dark mode implementation:

- System preference detection
- Manual toggle in navigation
- Persistent theme storage
- Smooth transitions between themes

## Contact Integration

The contact form uses FormSubmit.co to send emails to:
- **Email**: gvropublicsafetyservices@gmail.com
- **Discord**: https://discord.gg/Xgw7JDQ2HY

## Customization

### Colors

The primary color scheme uses GVRO red (`#990000`). Update in `tailwind.config.js`:

```javascript
colors: {
  'gvro-red': '#990000',
  'gvro-red-dark': '#660000',
}
```

### Content Updates

- **Penal Codes**: Update `data/penalCodes.ts`
- **Handbook**: Modify `app/handbook/page.tsx`
- **Department Info**: Update `app/departments/page.tsx`
- **Staff Roles**: Modify `app/staff/page.tsx`

## Deployment

The website is configured for static export and can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `out` directory.

## License

This project is proprietary to Greenville Roleplay Operations. Unauthorized use in other servers will result in blacklisting.

## Support

For technical support or questions:
- Email: gvropublicsafetyservices@gmail.com
- Discord: https://discord.gg/Xgw7JDQ2HY
