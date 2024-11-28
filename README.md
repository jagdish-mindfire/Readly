# Readly - Blogging Platform

Welcome to **Readly**, a modern blogging platform built with **Next.js**, **TypeScript**, and **Sanity** as the CMS. Readly allows users to discover and share amazing stories from around the world.

## 🚀 Features

- Dynamic blog listing with search functionality.
- Blog management using Sanity CMS.
- Mobile-friendly and responsive design.
- Fully customizable and extendable.

## 🛠️ Tech Stack

- **Next.js** - React Framework for server-side rendering and static site generation.
- **TypeScript** - For type-safe development.
- **Sanity CMS** - For managing blog content and pages.

## 🌐 Deployed Link

Check out the live version of Readly: [https://readly-blogs.netlify.app/](https://readly-blogs.netlify.app/)

---

## 🖥️ Local Development

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/jagdish-mindfire/Readly.git
cd Readly
npm install
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Create a .env File
Create a .env file in the root directory and add the following environment variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ztgvuvh0
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_TITLE=My personal website
NEXT_PUBLIC_SANITY_API_VERSION=2024-11-27
NEXT_PUBLIC_SANITY_BASEPATH=/admin
```
### 4. Run the Development Server
```
npm run dev
```
Open your browser and navigate to http://localhost:3000 to see the application.

##  Sanity Studio
Sanity Studio is integrated into this project. To access the studio:

- Navigate to /admin in your local or deployed version (e.g., http://localhost:3000/admin or https://readly-blogs.netlify.app/admin).
- Use the studio to add blogs and pages dynamically.
- You can update the base path for the studio by modifying NEXT_PUBLIC_SANITY_BASEPATH in the .env file.

## Contribution
We welcome contributions! You can:

Create an issue to report a bug or suggest a feature.
Fork the repository and submit a pull request with your improvements.
Steps to Contribute:
Fork the repository.
- Create a new branch for your feature/bugfix.
- Commit your changes and push them to your fork.
- Submit a pull request for review.



