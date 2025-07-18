![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# ⚡ Medium-Practice – Full Stack App (React + Hono + Prisma + Cloudflare Workers)

Welcome to the **Medium-Practice** full-stack project built with modern, lightweight technologies.

## 🔧 Tech Stack

- 🖼 **Frontend**: React + TypeScript
- 🔥 **Backend**: Hono on Cloudflare Workers
- 🧠 **ORM**: Prisma (with Accelerate)
- 🛢 **Database**: PostgreSQL
- 📦 **Shared Module**: Common npm package (`packages/common`)
- ☁️ **Deployment**: Cloudflare Workers + Vercel/Netlify
- 📦 **Package Manager**: npm

> 📁 GitHub Repo: [github.com/VisibleNasir/Medium-Practice](https://github.com/VisibleNasir/Medium-Practice)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/VisibleNasir/Medium-Practice.git
cd Medium-Practice

Set Up Environment Variables
Create a .env file at the root with your actual PostgreSQL connection string:
# .env
DATABASE_URL="postgresql://user:password@host:port/dbname"
Then in apps/backend/wrangler.toml, define the Prisma Accelerate URL:
[vars]
DATABASE_URL = "prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_ACCELERATE_KEY"

Common Package
cd packages/common
npm install
npm run build

cd /frontend
npm install
npm install /common

cd ../backend
npm install
npm install /common

Prisma Setup
cd /backend
npx prisma generate
npx prisma migrate dev --name init

cd /frontend
npm run dev


cd /backend
npm run dev

---

## 👤 Author

**Nasir Nadaf**

- Twitter: [@nasir](https://x.com/nasir10301)
- GitHub: [@VisibleNasir](https://github.com/VisibleNasir)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
