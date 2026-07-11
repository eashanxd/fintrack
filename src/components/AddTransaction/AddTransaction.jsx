import { useState } from "react";
import "./AddTransaction.css";

function AddTransaction({ onAddTransaction, onCancel }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: "",
    category: "",
    description: "",
    date: new Date().toISOString().split('T')[0],
    paymentMethod: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const categories = {
    expense: [
      "Food & Dining",
      "Transportation",
      "Shopping",
      "Entertainment",
      "Bills & Utilities",
      "Healthcare",
      "Education",
      "Other",
    ],
    income: [
      "Salary",
      "Freelance",
      "Investments",
      "Gifts",
      "Refunds",
      "Other",
    ],
  };

  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "Bank Transfer",
    "Cash",
    "PayPal",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please enter a description";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onAddTransaction({
        ...formData,
        amount: parseFloat(formData.amount),
        id: Date.now(),
      });
      
      // Reset form
      setFormData({
        type: "expense",
        amount: "",
        category: "",
        description: "",
        date: new Date().toISOString().split('T')[0],
        paymentMethod: "",
        notes: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="add-transaction-page">
      <div className="add-transaction-container">
        {/* Page Header */}
        <div className="page-header">
          <div className="page-header-content">
            <h1 className="page-title">Add Transaction</h1>
            <p className="page-subtitle">
              Record a new income or expense transaction to track your finances
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="form-card">
          <form className="transaction-form" onSubmit={handleSubmit}>
            {/* Transaction Type */}
            <div className="form-section">
              <h3 className="form-section-title">Transaction Type</h3>
              <div className="type-toggle">
                <button
                  type="button"
                  className={`type-btn ${formData.type === "expense" ? "type-btn-active" : ""}`}
                  onClick={() => handleChange({ target: { name: "type", value: "expense" } })}
                >
                  <span className="type-btn-icon">📤</span>
                  Expense
                </button>
                <button
                  type="button"
                  className={`type-btn ${formData.type === "income" ? "type-btn-active" : ""}`}
                  onClick={() => handleChange({ target: { name: "type", value: "income" } })}
                >
                  <span className="type-btn-icon">📥</span>
                  Income
                </button>
              </div>
            </div>

            {/* Amount */}
            <div className="form-section">
              <h3 className="form-section-title">Amount</h3>
              <div className="input-wrapper">
                <span className="input-prefix">$</span>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className={`form-input ${errors.amount ? "form-input-error" : ""}`}
                  step="0.01"
                  min="0"
                />
              </div>
              {errors.amount && <span className="form-error">{errors.amount}</span>}
            </div>

            {/* Category */}
            <div className="form-section">
              <h3 className="form-section-title">Category</h3>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`form-select ${errors.category ? "form-input-error" : ""}`}
              >
                <option value="">Select category</option>
                {categories[formData.type].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && <span className="form-error">{errors.category}</span>}
            </div>

            {/* Description */}
            <div className="form-section">
              <h3 className="form-section-title">Description</h3>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter a description for this transaction"
                className={`form-input ${errors.description ? "form-input-error" : ""}`}
              />
              {errors.description && <span className="form-error">{errors.description}</span>}
            </div>

            {/* Date and Payment Method */}
            <div className="form-row">
              <div className="form-section form-section-half">
                <h3 className="form-section-title">Date</h3>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`form-input ${errors.date ? "form-input-error" : ""}`}
                />
                {errors.date && <span className="form-error">{errors.date}</span>}
              </div>

              <div className="form-section form-section-half">
                <h3 className="form-section-title">Payment Method</h3>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className={`form-select ${errors.paymentMethod ? "form-input-error" : ""}`}
                >
                  <option value="">Select method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
                {errors.paymentMethod && <span className="form-error">{errors.paymentMethod}</span>}
              </div>
            </div>

            {/* Notes */}
            <div className="form-section">
              <h3 className="form-section-title">Notes <span className="optional">(Optional)</span></h3>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add any additional notes or details..."
                className="form-textarea"
                rows={3}
              />
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={onCancel}>
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Save Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
