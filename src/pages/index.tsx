import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {

  const clientes = [
    new Cliente('Jamal', 23, '1'),
    new Cliente('Thalia', 24, '2'),
    new Cliente('Natalia', 28, '3'),
    new Cliente('Marcos', 16, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 bg-blue-600
      text-white
    `}>

      <Layout titulo="Cadastro de Clientes">
        <div className="flex justify-end">
          <Botao classname="mb-4">Novo Cliente</Botao>
        </div>
{        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        /> }
        <Formulario cliente={clientes[2]}></Formulario> 
      </Layout>
    </div>
  )
}
