# Land of Solitude Codex

A React Single Page Application (SPA) that showcases original dark-fantasy characters, factions, lore, weapons, and equipment from the Land of Solitude universe.

## Features
- React Router multi-page SPA
  - Home (`/`)
  - Characters (`/characters`)
  - Character Detail (`/characters/:id`)
  - Factions (`/factions`)
- Search characters by name or title
- Filter characters by faction
- Factions page links into filtered character lists using query parameters
- Character detail pages display full lore, weapons, and equipment
- Styled using React Bootstrap and custom CSS

## Tech Stack
- React (Functional Components)
- React Router
- React Hooks (`useState`, `useEffect`, `useMemo`)
- React Bootstrap
- Vite

## Data
Character data is stored in an internal JSON file:
`src/data/characters.json`

## How to Run Locally
```bash
npm install
npm run dev
