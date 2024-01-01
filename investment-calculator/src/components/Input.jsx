import "./input.css";

export default function Input({ inputData, handleInputChange }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment: </label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
            value={inputData.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment: </label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
            value={inputData.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected reurn: </label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
            value={inputData.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration: </label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
            value={inputData.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
