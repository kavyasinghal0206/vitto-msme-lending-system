# MSME Lending Decision System

A full-stack MSME loan evaluation system that checks loan eligibility using rule-based credit scoring.

---

# Features

- Loan approval/rejection system
- Credit score calculation
- PAN validation
- MongoDB Atlas database integration
- Timestamp tracking
- Responsive UI
- Full cloud deployment

---

# Tech Stack

## Frontend
- React.js
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# Loan Decision Logic

The system evaluates loan applications based on:

- Loan amount vs monthly revenue
- EMI vs monthly revenue
- Short tenure risk analysis

Applications are automatically:

- APPROVED
- REJECTED

based on generated credit score.

---

# API Endpoint

## POST `/api/application`

### Sample Request Body

```json
{
  "ownerName": "Kavya",
  "pan": "QGOPS0306P",
  "businessType": "Retail",
  "monthlyRevenue": 12000,
  "loanAmount": 100000,
  "tenureMonths": 12,
  "purpose": "Business Expansion"
}
```

---

# Deployment Links

## Frontend
https://vitto-msme-lending-system-frontend.vercel.app/

## Backend
https://vitto-msme-backend.onrender.com/

## GitHub Repository
https://github.com/kavyasinghal0206/vitto-msme-lending-system

---

# Project Structure

```bash
Vitto Lending System/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── Frontend/
│   ├── src/
│   └── public/
│
└── README.md
```

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/kavyasinghal0206/vitto-msme-lending-system.git
```

---

## Backend Setup

```bash
cd Backend
npm install
npm start
```

---

## Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside Backend:

```env
MONGO_URI=hehe#
```

---

# Database Features

- Application data storage
- Auto-generated timestamps
- Credit score tracking
- Loan decision storage

---

# Validation Features

- PAN number validation
- Uppercase PAN formatting
- Required field validation

---

# Cloud Deployment

## Frontend Deployment
- Hosted on Vercel

## Backend Deployment
- Hosted on Render

## Database
- Hosted on MongoDB Atlas

---

# Author

Kavya Singhal
