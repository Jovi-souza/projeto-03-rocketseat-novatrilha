import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

/*
  * por que um componente renderiza?
  *- hooks changed (mudou estado, contexto, reducer )
  *- props changed (mudou propriedades )
  *- parent rendered (componente pai renderizou )

  Qual o fluxo de renderizaçãp?
  1. o react recria o HTML da interface daquele component
  2. compara a versão do HTML recriada com a versão anterior
  3. SE mudou alguma coisa, ele reescreve o HTML na tela

  Memo: 
  0. Hooks changed, Props Changed (deep comarison)
  0.1: comparar a versão anterior dos hooks e props
  0.3: se mudou algo, ele vai permitir a nova renderização
*/

const searchFormSchema = zod.object({
  query: zod.string(),
})
type searchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransaction
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleSearchTransaction(data: searchFormInputs) {
    await fetchTransaction(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
