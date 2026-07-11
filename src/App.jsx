import { useState } from "react";
import Navbar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  
  // Shared transaction state
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Netflix Subscription",
      category: "Entertainment",
      amount: -15.99,
      date: "Today",
      icon: "🎬",
    },
    {
      id: 2,
      name: "Salary Deposit",
      category: "Income",
      amount: 4500.00,
      date: "Yesterday",
      icon: "💰",
    },
    {
      id: 3,
      name: "Amazon Purchase",
      category: "Shopping",
      amount: -89.50,
      date: "Yesterday",
      icon: "🛒",
    },
    {
      id: 4,
      name: "Uber Ride",
      category: "Transportation",
      amount: -24.30,
      date: "2 days ago",
      icon: "🚗",
    },
    {
      id: 5,
      name: "Starbucks",
      category: "Food & Dining",
      amount: -8.45,
      date: "3 days ago",
      icon: "☕",
    },
  ]);

  const [summary, setSummary] = useState({
    totalBalance: 48574.21,
    income: 8250.00,
    expenses: 3420.50,
    savings: 4829.50,
  });

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleAddTransaction = (newTransaction) => {
    const iconMap = {
      "Food & Dining": "🍔",
      "Transportation": "🚗",
      "Shopping": "🛒",
      "Entertainment": "🎬",
      "Bills & Utilities": "💡",
      "Healthcare": "🏥",
      "Salary": "💰",
      "Freelance": "💼",
      "Investments": "📈",
      "Gifts": "🎁",
      "Refunds": "💸",
      "Education": "📚",
      "Other": "📦",
    };

    const formattedAmount = newTransaction.type === "expense" 
      ? -Math.abs(newTransaction.amount)
      : Math.abs(newTransaction.amount);

    const transactionWithIcon = {
      id: newTransaction.id,
      name: newTransaction.description,
      category: newTransaction.category,
      amount: formattedAmount,
      date: "Today",
      icon: iconMap[newTransaction.category] || "📦",
    };

    setTransactions((prev) => [transactionWithIcon, ...prev]);

    // Update summary
    setSummary((prev) => {
      const newSummary = { ...prev };
      
      if (newTransaction.type === "income") {
        newSummary.income += newTransaction.amount;
        newSummary.totalBalance += newTransaction.amount;
        newSummary.savings += newTransaction.amount * 0.3;
      } else {
        newSummary.expenses += newTransaction.amount;
        newSummary.totalBalance -= newTransaction.amount;
        newSummary.savings -= newTransaction.amount * 0.3;
      }

      return newSummary;
    });
  };

  const handleDeleteTransaction = (transactionId) => {
    const transactionToDelete = transactions.find((t) => t.id === transactionId);
    
    if (!transactionToDelete) return;

    // Remove transaction
    setTransactions((prev) => prev.filter((t) => t.id !== transactionId));

    // Update summary (reverse the effect)
    setSummary((prev) => {
      const newSummary = { ...prev };
      const amount = Math.abs(transactionToDelete.amount);
      
      if (transactionToDelete.amount > 0) {
        // It was income, reverse it
        newSummary.income -= amount;
        newSummary.totalBalance -= amount;
        newSummary.savings -= amount * 0.3;
      } else {
        // It was expense, reverse it
        newSummary.expenses -= amount;
        newSummary.totalBalance += amount;
        newSummary.savings += amount * 0.3;
      }

      return newSummary;
    });
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === "dashboard" && (
        <Dashboard 
          transactions={transactions}
          summary={summary}
          onAddTransaction={handleAddTransaction}
        />
      )}
      {currentPage === "transactions" && (
        <Transactions 
          transactions={transactions}
          onAddTransaction={handleAddTransaction}
          onDeleteTransaction={handleDeleteTransaction}
        />
      )}
      {currentPage === "analytics" && (
        <Analytics 
          transactions={transactions}
          summary={summary}
        />
      )}
      {currentPage === "settings" && (
        <Settings />
      )}
    </>
  );
}

export default App;