import React, { useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import "./CheckoutComponents.css";

export const CheckoutSteps = ({ currentStep, steps }) => {
  return (
    <div className="checkout-steps">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`step ${index === currentStep ? "step--active" : ""} ${
            index < currentStep ? "step--completed" : ""
          }`}
        >
          <div className="step-number">
            {index < currentStep ? "✓" : index + 1}
          </div>
          <div className="step-label">{step.label}</div>
          {index < steps.length - 1 && <div className="step-connector"></div>}
        </div>
      ))}
    </div>
  );
};

export const ShippingForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h3>Shipping Address</h3>

      <div className="form-row">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </div>

      <Input
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
      />

      <Input
        label="Street Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={!!errors.address}
        helperText={errors.address}
      />

      <div className="form-row">
        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
        />
        <Input
          label="State/Province"
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={!!errors.state}
          helperText={errors.state}
        />
      </div>

      <div className="form-row">
        <Input
          label="ZIP/Postal Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          error={!!errors.zipCode}
          helperText={errors.zipCode}
        />
        <div className="form-group">
          <label className="form-label">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-select"
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={loading}
      >
        {loading ? "Processing..." : "Continue to Payment"}
      </Button>
    </form>
  );
};

export const PaymentForm = ({ amount, onSubmit, loading = false }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    if (paymentMethod !== "card") return true;
    const newErrors = {};
    if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ paymentMethod, ...formData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3>Payment Method</h3>

      <div className="payment-methods">
        <label className="payment-method">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>💳 Credit/Debit Card</span>
        </label>
        <label className="payment-method">
          <input
            type="radio"
            name="paymentMethod"
            value="wallet"
            checked={paymentMethod === "wallet"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>💰 Digital Wallet</span>
        </label>
        <label className="payment-method">
          <input
            type="radio"
            name="paymentMethod"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>🏦 Bank Transfer</span>
        </label>
      </div>

      {paymentMethod === "card" && (
        <div className="card-form">
          <Input
            label="Cardholder Name"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            error={!!errors.cardName}
            helperText={errors.cardName}
          />

          <Input
            label="Card Number"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
          />

          <div className="form-row">
            <Input
              label="Expiry Date"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              error={!!errors.expiryDate}
              helperText={errors.expiryDate}
            />
            <Input
              label="CVV"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              error={!!errors.cvv}
              helperText={errors.cvv}
            />
          </div>
        </div>
      )}

      <div className="payment-summary">
        <p>
          Amount to pay: <strong>${amount.toFixed(2)}</strong>
        </p>
      </div>

      <Button
        type="submit"
        variant="success"
        size="lg"
        fullWidth
        disabled={loading}
      >
        {loading ? "Processing Payment..." : `Pay $${amount.toFixed(2)}`}
      </Button>
    </form>
  );
};
