# NEXT.JS 15 Crash Course

This is a crash course on Next.js 15, covering the latest features and best practices for building modern web applications. The course includes hands-on examples and practical tips to help you get started quickly.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Routing](#routing)
- - [Static Routes](#static-routes)
- - [Dynamic Routes](#dynamic-routes)
- - [Layout Routes](#layout-routes)
- - [Nested Routes](#nested-routes)
- - [API Routes](#api-routes)
- [Navigating Between Pages](#navigating-between-pages)
- - [Link Component](#link-component)
- - [useRouter Hook](#userouter-hook)
- [Server Vs Client Components](#server-vs-client-components)
- - [Creating Server Components](#creating-server-components)
- - [Creating Client Components](#creating-client-components)
- [Server Actions](#server-actions)
- - [Creating Server Actions](#creating-server-actions)
- - [Testing Server Actions](#testing-server-actions)
- - [Server Actions with Revalidation](#server-actions-with-revalidation)
- [Conclusion](#conclusion)
- [Resources](#resources)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

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
