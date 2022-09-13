import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: string;
  category: string;
  createdAT: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadtransiction() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  } // modo asyncrona de fazer uma chamada para uma API

  useEffect(() => {
    loadtransiction();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/transactions")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []); // eu devo utiliizar o useEffect pq ele é a forma de disparar uma função em determinado momento

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <PriceHighLigth variant={transaction.type}>
                    R${transaction.price}
                  </PriceHighLigth>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAT}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
