# MERN Contact Form

This is a simple beginner-friendly MERN-style contact form project with:

- `frontend`: React + Vite
- `backend`: Node.js + Express

## Project Structure

```text
form testing/
  frontend/
    src/
      components/
        ContactForm.jsx
      App.jsx
      main.jsx
      index.css
    index.html
    package.json
    vite.config.js
  backend/
    controllers/
      contactController.js
    routes/
      contactRoutes.js
    .env.example
    package.json
    server.js
```

## Setup Instructions

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 3. Add environment variables

Copy `backend/.env.example` to `backend/.env`.

If you do not want to send emails yet, keep the mail settings empty or skip them.

### 4. Run the backend server

```bash
cd backend
npm run dev
```

The backend runs on `http://localhost:5000`.

### 5. Run the frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

The frontend runs on `http://localhost:5173`.

## How It Works

1. The user fills in the form in React.
2. React stores the values with `useState`.
3. On submit, the frontend sends a `POST` request to `/api/contact`.
4. Vite forwards `/api` requests to the Express backend.
5. The backend logs the form data and returns:

```json
{
  "success": true,
  "message": "Message received"
}
```

## Optional Nodemailer Feature

If you add real SMTP values to `backend/.env`, the backend will also send an email with the contact form message.

## Send Messages To Your Email

Create a file named `backend/.env` and add your email settings:

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=your-email@gmail.com
MAIL_FROM=your-email@gmail.com
```

Notes:

- `MAIL_TO` is the inbox where you want to receive contact form messages.
- If you use Gmail, use an App Password instead of your normal Gmail password.
- The sender's email from the form is added as `replyTo`, so you can reply directly from your inbox.
