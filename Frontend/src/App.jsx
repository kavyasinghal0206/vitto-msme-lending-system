import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    ownerName: "",
    pan: "",
    businessType: "",
    monthlyRevenue: "",
    loanAmount: "",
    tenureMonths: "",
    purpose: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://vitto-msme-backend.onrender.com/",
        formData
      );

      setResult(response.data);

    } catch (error) {

  console.log(error);

  const errors = error.response?.data?.errors;

  if (errors) {

    const firstError = Object.values(errors)[0];

    alert(firstError.message);

  } else {

    alert(
      error.response?.data?.message || "Something went wrong"
    );
  }
}
  };

 return (
  <div className="container">

    <h1 className="title">
      MSME Lending Decision System
    </h1>

    <form onSubmit={handleSubmit}>

      <input
        className="input"
        type="text"
        name="ownerName"
        placeholder="Owner Name"
        onChange={handleChange}
      />

     <input
  className="input"
  type="text"
  name="pan"
  placeholder="PAN Number"
  value={formData.pan}
  onChange={(e) =>
    setFormData({
      ...formData,
      pan: e.target.value.toUpperCase(),
    })
  }
/>

      <input
        className="input"
        type="text"
        name="businessType"
        placeholder="Business Type"
        onChange={handleChange}
      />

      <input
        className="input"
        type="number"
        name="monthlyRevenue"
        placeholder="Monthly Revenue"
        onChange={handleChange}
      />

      <input
        className="input"
        type="number"
        name="loanAmount"
        placeholder="Loan Amount"
        onChange={handleChange}
      />

      <input
        className="input"
        type="number"
        name="tenureMonths"
        placeholder="Tenure Months"
        onChange={handleChange}
      />

      <input
        className="input"
        type="text"
        name="purpose"
        placeholder="Purpose"
        onChange={handleChange}
      />

      <button className="button" type="submit">
        Check Loan Decision
      </button>

    </form>

    {result && (
      <div className="result">

        <h2>
          Status:
          <span
            className={
              result.status === "APPROVED"
                ? "approved"
                : "rejected"
            }
          >
            {" "} {result.status}
          </span>
        </h2>

        <h3>
          Credit Score: {result.creditScore}
        </h3>

        <div className="reason">
          <h4>Reasons:</h4>

          <ul>
            {result.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>

      </div>
    )}

  </div>
);
}

export default App;