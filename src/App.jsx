import { useState, useEffect } from "react";
import Navbar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import Auth from "./components/Auth/Auth";
import { getUser, removeUser } from "./services/api";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check localStorage for existing user on mount
  useEffect(() => {
    const user = getUser();
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);
  
  // Shared transaction state
  const [transactions, setTransactions] = useState([]);

  const [summary, setSummary] = useState({
    totalBalance: 0,
    income: 0,
    expenses: 0,
    savings: 0,
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

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    removeUser();
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage("dashboard");
  };

  return (
    <>
      {!isAuthenticated ? (
        <Auth onLogin={handleLogin} />
      ) : (
        <>
          <Navbar currentPage={currentPage} onNavigate={handleNavigate} onLogout={handleLogout} />
          {currentPage === "dashboard" && (
            <Dashboard 
              transactions={transactions}
              summary={summary}
              onAddTransaction={handleAddTransaction}
              currentUser={currentUser}
            />
          )}
          {currentPage === "transactions" && (
            <Transactions 
              transactions={transactions}
              summary={summary}
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
      )}
    </>
  );
}

export default App;