import { useState } from "react";
import "./Transactions.css";

function TransactionTable({ transactions, onDeleteTransaction }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "status-completed";
      case "Pending":
        return "status-pending";
      case "Failed":
        return "status-failed";
      default:
        return "";
    }
  };

  // Convert dashboard transactions to table format
  const tableTransactions = transactions.map((t) => ({
    id: t.id,
    date: new Date().toISOString().split('T')[0], // Use today's date for demo
    description: t.name,
    category: t.category,
    amount: t.amount,
    paymentMethod: "Credit Card", // Default for demo
    status: "Completed",
  }));

  const handleDeleteClick = (transaction) => {
    setDeleteConfirmation(transaction);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation) {
      onDeleteTransaction(deleteConfirmation.id);
      setDeleteConfirmation(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  if (tableTransactions.length === 0) {
    return (
      <div className="transaction-table-empty">
        <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <h3 className="empty-state-title">No transactions found</h3>
          <p className="empty-state-description">Add your first transaction to start tracking your finances.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="transaction-table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableTransactions.map((transaction) => (
              <tr key={transaction.id} className="table-row">
                <td className="table-date">{formatDate(transaction.date)}</td>
                <td className="table-description">
                  <span className="description-text">{transaction.description}</span>
                </td>
                <td className="table-category">
                  <span className="category-badge">{transaction.category}</span>
                </td>
                <td className={`table-amount ${transaction.amount > 0 ? "positive" : "negative"}`}>
                  {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="table-payment">{transaction.paymentMethod}</td>
                <td className="table-status">
                  <span className={`status-badge ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="table-actions">
                  <button 
                    className="action-btn delete-btn" 
                    aria-label="Delete transaction"
                    onClick={() => handleDeleteClick(transaction)}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 4H3.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 4V2.5C5.5 2.22386 5.72386 2 6 2H10C10.2761 2 10.5 2.22386 10.5 2.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 6.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className="delete-modal-backdrop" onClick={handleCancelDelete}>
          <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="delete-modal-header">
              <h3 className="delete-modal-title">Delete Transaction</h3>
            </div>
            <div className="delete-modal-body">
              <p className="delete-modal-message">
                Are you sure you want to delete "{deleteConfirmation.description}"? This action cannot be undone.
              </p>
            </div>
            <div className="delete-modal-footer">
              <button className="btn-secondary" onClick={handleCancelDelete}>
                Cancel
              </button>
              <button className="btn-danger" onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TransactionTable;
