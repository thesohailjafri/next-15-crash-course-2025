# NEXT.JS 15 Crash Course

> Link to YT video: [Next.js 15 Crash Course](https://www.youtube.com/watch?v=###)

This is a crash course on Next.js 15, covering the latest features and best practices for building modern web applications. The course includes hands-on examples and practical tips to help you get started quickly.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Crash Course Content](#crash-course-content)

## Introduction

Next.js is a powerful React framework that enables developers to build server-rendered applications with ease. It provides a robust set of features, including static site generation, server-side rendering, and API routes, making it an excellent choice for modern web development.

Most of the new age websites and webapps are built using React. Next.js is a framework built on top of React that provides additional features and optimizations for building web applications. It is designed to make it easy to build fast, scalable, and SEO-friendly applications with minimal configuration.

## Installation

To get started with Next.js, you need to have Node.js and npm installed on your machine. You can check if you have them installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

If you don't have them installed, you can download and install them from the official Node.js website: [Node.js](https://nodejs.org/).

Once you have Node.js and npm installed, you can create a new Next.js project using the following command:

```bash
npx create-next-app@latest my-next-app
```

> We are using next.js 15 in this course, so we are using the `@latest` flag to ensure we are using the latest version of Next.js. If you want to use a specific version, you can replace `@latest` with the desired version number.

This will create a new directory called `my-next-app` with all the necessary files and dependencies for a Next.js project. You can replace `my-next-app` with any name you prefer.

Once the installation is complete, navigate to the project directory:

```bash
cd my-next-app
```

Now, you can start the development server by running the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`. You can open this URL in your web browser to see your Next.js application in action.

## Project Structure

Next.js has a specific project structure that helps organize your code and assets. Here is a brief overview of the main directories and files in a Next.js project:

```
my-next-app/
├── public/                   # Static assets (images, etc.)
├── src/
│   ├── app/                  # Main application directory (Next.js App Router)
│   │   ├── about/
│   │   │   └── page.tsx      # About page (demo of useRouter)
│   │   ├── api/
│   │   │   └── users/
│   │   │       └── route.ts  # API route handler for /api/users
│   │   ├── products/         # Products page
│   │   ├── [id]/             # Dynamic route for individual items
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── users/
│   │   │   └── page.tsx      # Users page
│   │   ├── favicon.ico       # App favicon
│   │   ├── globals.css       # Global CSS styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Root page (e.g., Home)
│   ├── components/           # Reusable UI components
│   │   ├── ClientCounter.tsx
│   │   ├── Navbar.tsx
│   │   └── ServerMessage.tsx
│   ├── types/                # Type definitions
│   │   └── index.d.ts
│   ├── .env                  # Environment variables
├── .gitignore                # Git ignore rules
├── eslint.config.mjs         # ESLint configuration
├── next-env.d.ts             # Next.js environment typing
└── next.config.ts            # Next.js configuration
```

### Directory Structure

- `public/`: This directory contains static assets such as images, fonts, and other files that can be served directly to the client.
- `src/`: This is the main application directory where most of your code will reside.
  - `app/`: This directory contains the main application files, including pages, API routes, and layouts.
  - `components/`: This directory contains reusable UI components that can be used throughout your application.
  - `types/`: This directory contains type definitions for TypeScript projects.
- `.gitignore`: This file specifies files and directories that should be ignored by Git.
- `eslint.config.mjs`: This file contains the ESLint configuration for your project.
- `next-env.d.ts`: This file contains type definitions for Next.js environment variables.
- `next.config.ts`: This file contains the Next.js configuration for your project.
- `.env`: This file contains environment variables for your project. You can create this file to store sensitive information such as API keys and database connection strings. It is recommended to add this file to your `.gitignore` to prevent it from being committed to version control.
- `package.json`: This file contains the project metadata and dependencies. It is automatically generated when you create a new Next.js project using `create-next-app`.
- `package-lock.json`: This file contains the exact version of each dependency installed in your project. It is automatically generated when you install or update dependencies using npm.
- `tsconfig.json`: This file contains the TypeScript configuration for your project. It is automatically generated when you create a new Next.js project using `create-next-app` with TypeScript support.

## Crash Course Content

1. [Routing](#routing)
   - [Static Routes](#)
   - [Dynamic Routes](#)
   - [Layout Routes](#)
   - [Nested Routes](#)
   - [API Routes](#)
2. [Navigating Between Pages](#)
   - [Link Component](#)
   - [useRouter Hook](#)
3. [Server Vs Client Components](#)
   - [Creating Server Components](#)
   - [Creating Client Components](#)
4. [Server Actions](#)
   - [Creating Server Actions](#)
   - [Testing Server Actions](#)
   - [Server Actions with Revalidation](#)
5. [Data Fetching](#)
   - [Static Site Generation (SSG)](#)
   - [Server-Side Rendering (SSR)](#)
   - [Client-Side Rendering (CSR)](#)
   - [Incremental Static Regeneration (ISR)](#)
   - [Static Generation with Client-Side Rendering (SG+CSR)](#)
