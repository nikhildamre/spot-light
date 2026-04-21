# 🎯 Spotlight - AI-Powered Webinar Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)

> **Transform your webinar experience with AI-powered voice assistants, real-time audience engagement, and enterprise-grade streaming technology.**

Spotlight is a cutting-edge webinar platform that combines artificial intelligence, real-time streaming, and advanced analytics to create engaging live experiences that convert viewers into customers.

## ✨ Features

### 🤖 AI-Powered Capabilities
- **AI Voice Assistants** - GPT-4 powered voice agents for real-time audience interaction
- **Intelligent Q&A** - Automated question handling and response generation
- **Smart Analytics** - AI-driven insights and audience behavior analysis
- **Content Optimization** - AI suggestions for improving webinar performance

### 🎥 Advanced Streaming
- **4K Ultra HD Streaming** - Crystal clear video quality with minimal latency
- **Breakout Rooms** - Interactive small group sessions with AI moderation
- **Screen Sharing** - High-quality desktop and application sharing
- **Recording & Playback** - Automatic recording with AI-generated highlights

### 👥 Audience Engagement
- **Real-time Chat** - Interactive messaging with AI moderation
- **Live Polls & Surveys** - Instant audience feedback and engagement
- **Reaction System** - Emoji reactions and live sentiment analysis
- **Attendance Tracking** - Detailed participant analytics and reporting

### 🔒 Enterprise Security
- **SOC 2 Compliance** - Enterprise-grade security standards
- **HIPAA Compliant** - Healthcare industry compliance
- **End-to-End Encryption** - Secure data transmission and storage
- **Role-based Access** - Granular permission management

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database
- **Clerk** account for authentication
- **VAPI** account for AI voice features
- **GetStream** account for video streaming

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhildamre/spot-light.git
   cd spot-light
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment variables**
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/spotlight"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   # VAPI AI Voice
   VAPI_API_KEY=your_vapi_api_key
   VAPI_PRIVATE_KEY=your_vapi_private_key
   
   # GetStream Video
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET_KEY=your_stream_secret_key
   
   # Stripe (Optional)
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

5. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
spotlight/
├── src/
│   ├── actions/           # Server actions for data operations
│   │   ├── aiAgent.ts     # AI agent management
│   │   ├── auth.ts        # Authentication logic
│   │   ├── stream.ts      # Video streaming operations
│   │   ├── vapi.ts        # VAPI AI integration
│   │   └── webinar.ts     # Webinar management
│   ├── app/               # Next.js app directory
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (protectedRoutes)/  # Protected dashboard pages
│   │   ├── (publicRoutes)/     # Public marketing pages
│   │   └── api/           # API routes
│   ├── components/        # Reusable React components
│   │   ├── ui/            # UI component library
│   │   └── ReusableComponent/  # Custom components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── providers/         # Context providers
│   └── store/             # State management
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI component library
- **Framer Motion** - Animation library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Relational database
- **Clerk** - Authentication and user management

### AI & Streaming
- **VAPI** - AI voice assistant integration
- **GetStream** - Video streaming and chat
- **OpenAI GPT-4** - AI-powered features
- **WebRTC** - Real-time communication

### Deployment
- **Vercel** - Hosting and deployment
- **Vercel Postgres** - Managed database
- **Vercel Edge Functions** - Serverless compute

## 🎯 Key Features Deep Dive

### AI Voice Assistants
Spotlight integrates with VAPI to provide intelligent voice assistants that can:
- Answer audience questions in real-time
- Provide product information and demos
- Qualify leads automatically
- Handle customer support inquiries
- Generate meeting summaries

### Advanced Analytics
Get detailed insights into your webinar performance:
- **Audience Engagement** - Track participation and interaction levels
- **Conversion Metrics** - Monitor lead generation and sales
- **AI Insights** - Automated recommendations for improvement
- **Real-time Dashboard** - Live monitoring during webinars

### Breakout Rooms
Create interactive small group experiences:
- **AI Moderation** - Automated room management
- **Dynamic Assignment** - Smart participant grouping
- **Seamless Transitions** - Smooth room switching
- **Individual Analytics** - Per-room performance tracking

## 🔧 Configuration

### Database Setup
1. Create a PostgreSQL database
2. Update the `DATABASE_URL` in your `.env.local`
3. Run migrations: `npx prisma db push`

### Authentication Setup
1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Add your Clerk keys to `.env.local`
3. Configure sign-in/sign-up URLs

### AI Voice Setup
1. Sign up for VAPI at [vapi.ai](https://vapi.ai)
2. Create an AI assistant
3. Add VAPI credentials to `.env.local`

### Video Streaming Setup
1. Create a GetStream account at [getstream.io](https://getstream.io)
2. Get your API keys
3. Configure stream settings in `.env.local`

## 📚 API Documentation

### Webinar Management
```typescript
// Create a new webinar
POST /api/webinar/create
{
  "title": "My Webinar",
  "description": "Webinar description",
  "scheduledFor": "2024-01-01T10:00:00Z",
  "aiAgentId": "agent_123"
}

// Get webinar details
GET /api/webinar/[id]

// Update webinar
PUT /api/webinar/[id]

// Delete webinar
DELETE /api/webinar/[id]
```

### AI Agent Management
```typescript
// Create AI agent
POST /api/ai-agents
{
  "name": "Sales Assistant",
  "voice": "alloy",
  "instructions": "You are a helpful sales assistant..."
}

// Get agent details
GET /api/ai-agents/[id]
```

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository**
   ```bash
   vercel --prod
   ```

2. **Set environment variables**
   Add all required environment variables in the Vercel dashboard

3. **Configure database**
   Set up Vercel Postgres or connect your external database

4. **Deploy**
   ```bash
   git push origin main
   ```

### Environment Variables for Production
```env
# Production Database
DATABASE_URL="postgresql://..."

# Clerk Production Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# VAPI Production Keys
VAPI_API_KEY=your_production_vapi_key
VAPI_PRIVATE_KEY=your_production_private_key

# GetStream Production Keys
NEXT_PUBLIC_STREAM_API_KEY=your_production_stream_key
STREAM_SECRET_KEY=your_production_stream_secret
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.spotlight.ai](https://docs.spotlight.ai)
- **Community**: [Discord Server](https://discord.gg/spotlight)
- **Email**: support@spotlight.ai
- **Issues**: [GitHub Issues](https://github.com/nikhildamre/spot-light/issues)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Clerk** - For authentication services
- **VAPI** - For AI voice technology
- **GetStream** - For video streaming infrastructure
- **Tailwind CSS** - For the utility-first CSS framework

---

<div align="center">
  <p>Made with ❤️ in Mumbai, India</p>
  <p>
    <a href="https://spotlight.ai">Website</a> •
    <a href="https://docs.spotlight.ai">Documentation</a> •
    <a href="https://twitter.com/spotlightai">Twitter</a> •
    <a href="https://linkedin.com/company/spotlight-ai">LinkedIn</a>
  </p>
</div>