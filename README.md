# 🎬 Movie App (Next.js + TMDb API)

## Getting Started
1. Clone the repository

```bash
git clone https://github.com/iriadda/movie-app-next.git
````

2. Installed dependencies
```
mpn install
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Structure
```
src/
├── app/               # App Router pages (SSR/ISR)
├── components/        # Reusable UI components
├── services/          # API calls to TMDb
├── models/            # TypeScript types/interfaces
├── constants/         # API keys, base URLs
```

## Features

Movie search and filtering
Genre-based browsing
Movie details page with trailers and official links
Star rating system
Responsive layout

## Build for Production
```
npm run build
npm run start
```

## Author
This project is for educational purposes
© 2025 Iryna Serediuk