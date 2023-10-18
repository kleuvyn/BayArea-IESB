import Image from 'next/image'

export default function Home() {
  return (
    <body>
   {/* <!-- Barra de menu --> */}
   <div className="menu">
    <a href="index.html">Cadastro de Cliente</a>
    <a href="produtos.html">Cadastro Produto</a>
    <a href="#">Estoque</a>
    <a href="#">Pedidos</a>
    <a href="#">Enviados</a>
    
</div>

{/* <!-- Cadastro de Cliente --> */}
<div className="cadastro">
    <h1>Cadastro de Produto</h1>
    <form id="cadastroCliente">
        <div className="campo">
            <label htmlFor="nome">Nome do Produto: </label>
            <input type="text" id="nome" name="nome" required/>
        </div>

        <div className="campo">
            <label htmlFor="email">Descrição do Produto: </label>
            <input type="email" id="email" name="email" required/>
        </div>

        <div className="campo">
            <label htmlFor="telefone">Categoria: </label>
            <input type="text" id="telefone" name="telefone"/>
        </div>

        <div className="campo">
            <label htmlFor="endereco">Preço:</label>
            <input type="text" id="endereco" name="endereco"/>
        </div>
        <button type="submit">Cadastrar</button>
    </form>
</div>

    
 {/* <!-- Rodapé --> */}
 <div className="rodape">
    <p>© IESB BayArea 2023</p>
</div>
</body>
  )
}
