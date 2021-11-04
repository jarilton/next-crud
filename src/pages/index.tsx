import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";



export default function Home() {

    const { 
      cliente, 
      clientes, 
      salvarCliente,
      novoCliente, 
      selecionarCliente, 
      excluirCliente,
      tabelaVisivel,
      exibirTabela
    } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 bg-blue-600
      text-white
    `}>

      <Layout titulo="Cadastro de Clientes">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao classname="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
