# ZENPULSAR Commodities Intelligence

A modern Next.js application for ZENPULSAR's commodities intelligence platform, featuring AI-powered trading signals, geopolitical risk analysis, and multi-agent systems.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15+ with App Router, TypeScript, and Tailwind CSS v4
- **Component Library**: shadcn/ui components with Radix UI primitives
- **MDX Support**: Rich content management with Markdown and JSX
- **Form Integration**: Slack App API integration for reliable lead capture
- **Email Notifications**: Automatic confirmation emails via Resend
- **Performance Optimized**: Image optimization, font optimization, and lazy loading
- **SEO Ready**: Comprehensive metadata and Open Graph support
- **Responsive Design**: Mobile-first design with smooth animations
- **Cloudflare Ready**: Optimized for Cloudflare deployment with @opennextjs/cloudflare

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Content**: MDX with remark-gfm
- **Email**: React Email + Resend
- **Deployment**: Cloudflare with OpenNext
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rusty-zenpulsar/zenpulsar-landing.git
   cd zenpulsar-landing
   ```

2. **Install dependencies** (using Node.js 20)
   ```bash
   export PATH="$HOME/.nvm/versions/node/v20.17.0/bin:$PATH"
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .dev.vars.example .dev.vars
   ```
   
   Update `.dev.vars` with your actual values:
   ```env
   # Slack App Integration
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_CHANNEL_ID=C1234567890
   SLACK_CLIENT_ID=your-client-id
   SLACK_CLIENT_SECRET=your-client-secret
   SLACK_SIGNING_SECRET=your-signing-secret
   SLACK_VERIFICATION_TOKEN=your-verification-token
   
  # Other services
  RESEND_API_KEY=your_resend_api_key
  DEMO_REQUEST_EMAIL_TO=info@zenpulsar.com
  DEMO_REQUEST_EMAIL_FROM=no-reply@zenpulsar.com
  NEXT_PUBLIC_SITE_URL=https://zenpulsar.com
  ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (demo, access)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (header, footer)
│   ├── sections/         # Page sections (hero, offerings, etc.)
│   ├── forms/            # Form components
│   └── common/           # Shared components
├── content/              # MDX content files
├── lib/                  # Utility functions
│   ├── utils.ts         # General utilities
│   ├── slack.ts         # Slack integration
│   ├── types.ts         # TypeScript types
│   └── constants.ts     # App constants
├── hooks/               # Custom React hooks
└── emails/              # Email templates
```

## 🎨 Brand Guidelines

### Logo Usage

ZENPULSAR logo comes in three variations:
- **Primary**: Main logo for standard use on light backgrounds
- **Negative**: White logo for dark backgrounds 
- **Positive**: High contrast version for maximum visibility

**Logo Guidelines:**
- Maintain safe area around logo (minimum 1x logo height)
- Don't change logo colors or proportions
- Don't distort or rotate the logo
- Use appropriate version for background contrast

### Typography

- **Primary Typeface**: Texta Alt - Used for all printed and digital artwork
- **Secondary Typeface**: Century Gothic - For Microsoft Office Suite compatibility
- **Web Fonts**: Optimized with next/font for performance

### Color Palette

The ZENPULSAR brand uses a distinctive color system:

```css
/* Primary Colors */
--zp-fuchsia: rgb(201, 38, 212)     /* #C926D4 */
--zp-electric-blue: rgb(41, 38, 207) /* #2926CF */
--zp-white: rgb(255, 255, 255)      /* #FFFFFF */
--zp-black: rgb(0, 0, 0)            /* #000000 */

/* Brand Gradient */
background: linear-gradient(135deg, #C926D4 0%, #2926CF 100%);
```

### Imagery Style

- **Primary Style**: Black and white or mild color photography
- **Subject Matter**: Architecture and people representing movement and data circulation
- **Visual Theme**: Clean, modern, data-driven aesthetics

### The Wave Element

A signature visual element representing data waves:
- **Usage**: Brand identifier across all materials
- **Styling**: Can be used in brand colors or gradients
- **Purpose**: Adds organic touch while maintaining professional appearance
- **Implementation**: Available as SVG component in `/src/components/common/wave.tsx`

```tsx
import { Wave } from '@/components/common/wave';

// Usage examples
<Wave variant="gradient" size="lg" />
<Wave variant="fuchsia" size="md" />
<Wave variant="white" size="sm" />
```

### Brand Constants

All brand guidelines are codified in `/src/lib/brand.ts`:
- Color definitions and CSS variables
- Typography specifications
- Logo usage guidelines
- Imagery guidelines
- Utility functions for brand assets

## 🔧 Configuration

### Slack Integration

The project now uses Slack App API instead of webhooks for better functionality and reliability.

1. **Create a Slack App** at [api.slack.com](https://api.slack.com/apps)
2. **Configure OAuth & Permissions**:
   - Add required bot token scopes: `chat:write`, `channels:read`, `groups:read`
   - Install the app to your workspace to get the Bot User OAuth Token
3. **Get your credentials**:
   - **Bot Token**: Found in "OAuth & Permissions" (starts with `xoxb-`)
   - **Channel ID**: Right-click your target channel → "Copy link" → extract ID from URL
   - **Client ID & Secret**: Found in "Basic Information" → "App Credentials"
   - **Signing Secret**: Found in "Basic Information" → "App Credentials"
4. **Update `.dev.vars`** with your actual values
5. **Invite the bot** to your target channel: `/invite @your-bot-name`

### Cloudflare Workers Deployment

The project is configured for Cloudflare Workers deployment:

```bash
# Build for Cloudflare Workers (creates .open-next/worker.js)
pnpm build

# Deploy to Cloudflare Workers
pnpm deploy

# Local development with Cloudflare Workers
pnpm preview

# Generate Cloudflare types
pnpm cf-typegen
```

**Important**: The build process creates the necessary `.open-next/worker.js` file that Cloudflare Workers needs for deployment.

### Customization

- **Colors**: Update Tailwind CSS variables in `src/app/globals.css`
- **Content**: Edit MDX files in `src/content/`
- **Components**: Modify components in `src/components/`
- **Site Config**: Update `src/lib/constants.ts`
- **Brand Assets**: Logo variants available in `/public/brand/`

## 📝 Content Management

Content is managed through MDX files, allowing you to write Markdown with embedded React components.

### Adding New Content

1. Create `.mdx` files in `src/content/`
2. Use frontmatter for metadata
3. Import and use in your components

Example:
```mdx
---
title: "New Feature"
description: "Description of the new feature"
---

# New Feature

This is **bold** text with a [link](https://example.com).

<CustomComponent prop="value" />
```

## 🚀 Deployment

### Cloudflare Workers (Recommended)

The project is optimized for Cloudflare Workers deployment:

1. **Configure your Cloudflare account and install Wrangler CLI**
2. **Login to Cloudflare**: `wrangler login`
3. **Update `wrangler.jsonc`** with your worker name and settings
4. **Build and Deploy**:
   ```bash
   pnpm deploy
   ```

The deployment process:
- Runs `next build` to create the Next.js production build
- Runs `opennextjs-cloudflare build` to create the Workers-compatible bundle
- Uses `wrangler deploy` to deploy to Cloudflare Workers

### Environment Variables

Make sure to set these in your production environment:

```env
# Slack App Integration
SLACK_BOT_TOKEN=xoxb-your-production-bot-token
SLACK_CHANNEL_ID=C1234567890
SLACK_CLIENT_ID=your-client-id
SLACK_CLIENT_SECRET=your-client-secret
SLACK_SIGNING_SECRET=your-signing-secret

# Other services
RESEND_API_KEY=your_resend_key
DEMO_REQUEST_EMAIL_TO=info@zenpulsar.com
DEMO_REQUEST_EMAIL_FROM=no-reply@zenpulsar.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

## 🧪 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes Cloudflare Workers build)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Build and deploy to Cloudflare Workers
- `pnpm preview` - Local development with Cloudflare Workers
- `pnpm cf-typegen` - Generate Cloudflare types

### Adding Components

Use shadcn/ui to add new components:

```bash
npx shadcn@latest add [component-name]
```

### Code Style

- ESLint configuration included
- Prettier for code formatting
- TypeScript strict mode enabled
- Consistent import ordering

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with automatic code splitting
- **Image Optimization**: Next.js Image component with WebP support
- **Font Loading**: Optimized with next/font

## 🔒 Security

- Environment variables for sensitive data
- CSRF protection on forms
- Sanitized user inputs
- Secure headers configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by ZENPULSAR.

## 📞 Support

For support, email info@zenpulsar.com or visit [zenpulsar.com](https://zenpulsar.com).

---

Built with ❤️ by the ZENPULSAR team
