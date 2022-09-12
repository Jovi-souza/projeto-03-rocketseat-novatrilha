import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLigth, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighLigth variant="income">R$ 12.000,00</PriceHighLigth>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighLigth variant="outcome">- R$ 59,00</PriceHighLigth>
              <td>Alimentação</td>
              <td>18/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
