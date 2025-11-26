# Stallion Comfort Systems Monorepo

This repository contains the source code for the Stallion Comfort Systems application, organized into a monorepo structure.

## Structure

- **frontend/**: The Next.js application (Main Website & Admin).
- **backend/**: The Express.js backend server (Legacy/API).
- **legacy-client/**: The legacy Vite React application.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

Install dependencies from the root directory:

```bash
npm install
```

### Running the Application

To run the **Frontend** (Next.js):

```bash
npm run dev
```

To run the **Backend** (Express):

```bash
npm run backend:dev
```

## Development

The project uses npm workspaces to manage dependencies.
