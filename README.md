# MSME Lending Decision System

A full-stack MSME loan evaluation system that checks loan eligibility using rule-based credit scoring.

## Features

- Loan approval/rejection system
- Credit score calculation
- PAN validation
- MongoDB data storage
- Timestamp tracking
- Responsive UI
- Cloud deployment

---

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Loan Decision Logic

The system evaluates applications using:

- Loan amount vs revenue
- EMI vs monthly revenue
- Tenure risk analysis

Applications are:
- APPROVED
- REJECTED

based on generated credit score.

---

## API Endpoint

POST `/api/application`

### Request Body

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

## Deployment Links

### Frontend
(Add your Vercel URL here)

### Backend
(Add your Render URL here)

### GitHub Repository
(Add your GitHub repo link here)

---

## Local Setup

### Clone Repository

```bash
git clone <repo-link>
```

### Backend Setup

```bash
cd Backend
npm install
npm start
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## Environment Variables

Create `.env` file inside Backend:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## Author

Kavya Singhal
