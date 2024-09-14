import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Car hub by Jović',
  description: 'Car hub made with Next.js and TypeScript',
  keywords:
    'HTML, CSS, SCSS, Sass, JavaScript, programming, ReactJS, NextJS, Next.js, React, Vue.js, MongoDB, Mongoose, SWR, Miroslav Jovic, Miroslav Jović, Frontend Developer, Web Development, Portfolio, Blog, Dashboard, Frontend Design, User Interface (UI), User Experience (UX), Responsive Design, Web Applications, Single Page Applications (SPA), Component-Based Development, Version Control (Git), API Integration, Progressive Web Apps (PWA), Performance Optimization, Frontend Frameworks, Frontend Libraries, Frontend Tools, Web Development Tools, Cross-Browser Compatibility, Mobile-First Development, Accessibility (A11y), SEO Optimization, Performance Monitoring, Debugging Techniques, Code Refactoring, Agile Development, Scrum Methodology, Git, GitHub, TailwindCSS, ViteJS, ThreeJS, Framer Motion, React Icons, ReactStrap, MaterialUI, Styled-components, Bootstrap, TypeScript, Firebase, Hygraph (GraphQL), Bcryptjs, Postman, Strapi, NextAuth, Figma, Photoshop, Premiere pro, Modern JavaScript Frameworks, UI/UX Design Principles, CSS Frameworks, CSS Preprocessors, Frontend Build Tools, Frontend Testing, Browser Developer Tools, Responsive Web Design, Animation Effects, Code Optimization Techniques, Web Performance Metrics, Continuous Integration (CI), Deployment Strategies, Frontend Architecture, State Management,  Functional Programming in JavaScript, Asynchronous JavaScript (Promises, Async/Await), Frontend Security Best Practices, Web Accessibility Standards, Browser Compatibility Testing, Frontend Performance Optimization Techniques, Code Versioning, WebSockets, Server-Side Rendering (SSR), Static Site Generation (SSG), Progressive Enhancement, Internationalization (i18n) and Localization',
  icons: {
    icon: [
      {
        url: '/favico logo 96 Miroslav Jovic Frontend Developer.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: {
      url: '/favico logo 96 Miroslav Jovic Frontend Developer.ico',
      type: 'image/x-icon',
    },
    apple: {
      url: '/favico logo 96 Miroslav Jovic Frontend Developer.ico',
      type: 'image/x-icon',
    },
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favico logo 96 Miroslav Jovic Frontend Developer.ico',
      type: 'image/x-icon',
    },
  },
  creator: 'Miroslav Jović',
  category: 'technology',
  publisher: 'Miroslav Jović',
  applicationName: 'Miroslav Jović',
  authors: [{ name: 'Miroslav Jović' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
