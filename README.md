# ZENPULSAR Commodities Intelligence

A modern Next.js application for ZENPULSAR's commodities intelligence platform, featuring AI-powered trading signals, geopolitical risk analysis, and multi-agent systems.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15+ with App Router, TypeScript, and Tailwind CSS v4
- **Component Library**: shadcn/ui components with Radix UI primitives
- **MDX Support**: Rich content management with Markdown and JSX
- **Form Integration**: Direct Slack webhook integration for lead capture
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
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
   SLACK_CHANNEL=#general
   RESEND_API_KEY=your_resend_api_key
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

## 🔧 Configuration

### Slack Integration

1. Create a Slack app at [api.slack.com](https://api.slack.com/apps)
2. Enable Incoming Webhooks
3. Create a webhook for your desired channel
4. Copy the webhook URL to your `.dev.vars`

### Cloudflare Deployment

The project is configured for Cloudflare deployment:

```bash
# Deploy to Cloudflare
pnpm deploy

# Preview deployment
pnpm preview

# Generate Cloudflare types
pnpm cf-typegen
```

### Customization

- **Colors**: Update Tailwind CSS variables in `src/app/globals.css`
- **Content**: Edit MDX files in `src/content/`
- **Components**: Modify components in `src/components/`
- **Site Config**: Update `src/lib/constants.ts`

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

### Cloudflare (Recommended)

The project is optimized for Cloudflare deployment:

1. Configure your Cloudflare account
2. Update `wrangler.jsonc` with your settings
3. Deploy:
   ```bash
   pnpm deploy
   ```

### Environment Variables

Make sure to set these in your production environment:

```env
SLACK_WEBHOOK_URL=your_production_webhook
SLACK_CHANNEL=#your-channel
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

## 🧪 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to Cloudflare
- `pnpm preview` - Preview Cloudflare deployment
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
