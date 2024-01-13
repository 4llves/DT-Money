import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import {  SummaryCard, SummaryContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>
            Enradas
            <ArrowCircleUp size={32} color="#00b37e"/>
          </span>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>
            Saídas
            <ArrowCircleDown size={32} color="#f75a68"/>
          </span>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>
            Total
            <CurrencyDollar size={32} color="#fff"/>
          </span>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}