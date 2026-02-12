# BWMA – Building Web and Mobile Apps

A progressive web development course project covering modern web technologies — from vanilla HTML/CSS/JS through Angular, Vue, PWAs, and Web Components.

## Project Structure

| Directory | Description | Port |
|---|---|---|
| `vanilla/` | HTML, CSS (SCSS), and TypeScript fundamentals | 8000 |
| `web/` | Basic web app with TypeScript | — |
| `api/` | Express.js REST API backend | 8081 |
| `vue/` | Vue 3 + Vite SPA | 5173 |
| `angular/my-app/` | Angular 21 app with Material Design, PWA, and Web Components | 4200 |
| `webcomponents/` | Standalone Web Components with Shadow DOM | — |
| `exercises/` | Exercise sheets (PDFs) for all 12 exercises |  — |

## Tech Stack

- **Frontend:** Angular 21, Vue 3, TypeScript, SCSS, Angular Material
- **Backend:** Express.js 5, Node.js
- **Testing:** Karma/Jasmine (unit), Playwright (E2E)
- **Build tools:** Angular CLI, Vite, Sass, http-server

## Getting Started

### Vanilla

```sh
cd vanilla
npm install
npm run dev    # Compiles SCSS + TypeScript and starts http-server on :8000
```

### API

```sh
cd api
npm install
npm start      # Starts Express server on :8081
```

### Angular

```sh
cd angular/my-app
npm install
npm start      # ng serve on :4200
```

### Vue

```sh
cd vue
npm install
npm run dev    # Vite dev server on :5173
```

## Testing

```sh
# Angular unit tests
cd angular/my-app
npm test

# Angular E2E tests (Playwright)
npm run test:e2e
```