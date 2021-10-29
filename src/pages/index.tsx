import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 bg-blue-600
      text-white
    `}>

      <Layout titulo="Cadastro de Clientes">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
