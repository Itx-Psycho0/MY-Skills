# PostHub - Full Stack Social Post App

A full-stack application for creating and viewing posts with image uploads.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, ImageKit (image hosting)
- **Frontend:** React, Vite, React Router, Axios

## Project Structure

```
├── Backend/         # Express API server
│   ├── server.js    # Entry point
│   └── src/
│       ├── app.js              # Express app & routes
│       ├── db/db.js            # MongoDB connection
│       ├── models/             # Mongoose models
│       └── services/           # ImageKit upload service
├── Frontend/        # React + Vite client
│   └── src/
│       ├── App.jsx             # Router setup
│       └── pages/              # CreatePost, Feed
└── render.yaml      # Render deployment config
```

## Local Development

### Backend
```bash
cd Backend
cp .env.example .env     # Fill in your credentials
npm install
npm run dev
```

### Frontend
```bash
cd Frontend
cp .env.example .env     # Set VITE_API_URL=http://localhost:3000
npm install
npm run dev
```

## Environment Variables

### Backend (`Backend/.env`)
| Variable | Description |
|---|---|
| `PORT` | Server port (default: 3000) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private API key |
| `FRONTEND_URL` | Allowed CORS origin(s), comma-separated |
| `NODE_ENV` | `development` or `production` |

### Frontend (`Frontend/.env`)
| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

## Deployment (Render)

1. Push this repo to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. **New → Blueprint** → connect your repo → select this folder
4. Render reads `render.yaml` and creates both services
5. Add environment variables in each service's settings:
   - Backend: `MONGO_URI`, `IMAGEKIT_PRIVATE_KEY`, `FRONTEND_URL`
   - Frontend: `VITE_API_URL` (set to your backend URL)

### Manual Deploy (alternative)

**Backend:** Create a new **Web Service** on Render
- Root Directory: `Backend`
- Build Command: `npm install`
- Start Command: `npm start`

**Frontend:** Create a new **Static Site** on Render
- Root Directory: `Frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
