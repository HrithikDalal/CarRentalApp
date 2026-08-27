# CarRentalApp (BookCar)

> ⚠️ **Not actively maintained.** This is a portfolio/learning project from 2020–2023. It was fully modernized in August 2026 (dependencies current, 0 known vulnerabilities at that time), but it receives no ongoing maintenance or support.

React front end for **BookCar**, a car rental service — register, build a renter profile (driving licence/ID), browse the fleet, and book cars. Talks to the [CarRentalAPI](https://github.com/HrithikDalal/CarRentalAPI) REST backend.

![React](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-6-646cff) ![Router](https://img.shields.io/badge/React_Router-7-CA4245) ![Maintenance](https://img.shields.io/badge/maintained-no-red)

## Features

- JWT auth flow (register/login) with token persisted in localStorage and sent via `x-auth-token`
- Private routing — unauthenticated users are redirected to login
- Renter profile create/edit, profile browsing
- Redux state (auth, profile, alerts) with flash-style alert system
- SCSS-sourced styling (compiled CSS in `src/CSS/`, sources in `src/SCSS/`)

## Tech stack

| Layer | Choice |
| --- | --- |
| Build tool | Vite 6 |
| UI | React 18 |
| Routing | React Router 7 (declarative mode) |
| State | Redux Toolkit (`configureStore`) with classic action/reducer files |
| HTTP | axios 1.x, dev-proxied `/api` → `localhost:5000` |

## Project structure

```
├── index.html                  # Vite entry
├── vite.config.js              # dev proxy /api -> http://localhost:5000
└── src/
    ├── main.jsx                # React 18 createRoot bootstrap
    ├── App.jsx                 # router shell
    ├── store.js                # Redux Toolkit configureStore
    ├── actions/ reducers/      # auth, profile, alert
    ├── utils/setAuthToken.js   # axios default header helper
    └── components/
        ├── auth/               # Login, Register
        ├── dashboard/          # user dashboard
        ├── profile/            # view/edit profile, ProfileForm
        ├── allProfiles/        # browse profiles
        ├── layout/             # Navbar, Landing, Alert, Spinner, NotFound
        └── routing/            # AppRoutes, PrivateRoute
```

## Getting started

1. Start the [CarRentalAPI](https://github.com/HrithikDalal/CarRentalAPI) backend on port 5000 (needs MongoDB).
2. Run the client:

   ```bash
   npm install
   npm run dev        # http://localhost:3000
   ```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with HMR on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |

## History

- **2020** — built as a learning project (Create React App, React 16, react-router 5, plain redux).
- **2026-08** — modernized: CRA → Vite, React 16 → 18, React Router 5 → 7, redux/thunk → Redux Toolkit; all 219 `npm audit` vulnerabilities eliminated. Fixed a latent route-param bug (`/profile/:_id` vs `params.id`) that broke the profile detail page.
