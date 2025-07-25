// import { useEffect, useState } from "react";
// import "./Container.css";
// interface ProdutosState {
//   id: number;
//   nome: string;
//   preco: number;
//   categoria: string;
// }

// function Container(){
//   const [id,setId] = useState("");
//   const [nome,setNome] = useState("");''
//   const [preco,setPreco] = useState("");
//   const [erroMensagem,setErroMensagem] = useState("");
//   const [categoria,setCategoria] = useState("");
  

//   const [produtos,setProdutos] = useState<ProdutosState[]>([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         try{
//           const reposta = await fetch ("http://localhost:87000/produtos")
//           const result = await reposta.json();
//           setProdutos(result);
//         } catch(erro:any){
//           setErroMensagem("Erro ao realizar o fetch no backend");
//       }
//     }
//       fetchData() 
//       },[])  //[] lista de dependências, se estiver vazia 
//   //significará que sera executado quando carregar a página


//   function trataForm(event: React.FormEvent<HTMLFormElement>){
//     event.preventDefault();
//     const produtoNovo: ProdutosState = {
//       id: parseInt(id),
//       nome,
//       preco: parseFloat(preco),
//       categoria
//     };
//     setProdutos([...produtos, produtoNovo]); //copia dos produtos antigos e adiciona o novo produto
//   }
    
//   // Pegar os dados que a pessoa digitou no formulário
//     // e inserir isso no array de produtos 
//   function trataId(event: React.ChangeEvent<HTMLInputElement>){
//     setId(event.target.value);
//   }
//   function trataNome(event: React.ChangeEvent<HTMLInputElement>){
//     setNome(event.target.value);
//   }
//   function trataPreco(event: React.ChangeEvent<HTMLInputElement>){
//     setPreco(event.target.value);
//   }
//   function trataCategoria(event: React.ChangeEvent<HTMLInputElement>){
//     setCategoria(event.target.value);
//   }
//   return(
//     <>
//     {erroMensagem  &&
//     <div className="container-erro">
//       <p>{erroMensagem}</p>
//       </div>}

//       <div className="container">
     
       
//         <div className="container-cadastro">
//             <form onSubmit={trataForm}>
//                 <input type="text" name="id" id="id" placeholder="id" onChange={trataId} />
//                 <input type="text" name="nome" id="nome" placeholder="nome" onChange={trataNome} />
//                 <input type="text" name="preco" id="preco" placeholder="preco" onChange={trataPreco} />
//                 <input type="text" name="categoria" id="categoria" placeholder="categoria" onChange={trataCategoria} />
//                 <input type="submit" value="Cadastrar" />
//             </form>
//         </div>
//         <div className="container-listagem">
//             {produtos.map(produto=>{
//                 return(
//                     <div className="container-produto">
//                         <div className="produto-nome">
//                             {produto.nome}
//                         </div>
//                         <div className="produto-preco">
//                             {produto.preco}
//                         </div>
//                         <div className="produto-categoria">
//                             {produto.categoria}
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//       </div>
//     </>
//   )
// }
// export default Container;

import { useEffect, useState } from "react"
import './Container.css'
interface ProdutosState {
  id: number,
  nome: string,
  preco: number,
  categoria: string
}

function Container() {
  const [id,setId] = useState("")
  const [nome,setNome] = useState("")
  const [preco,setPreco] = useState("")
  const [erroMensagem,setErroMensagem] = useState("")
  const [categoria,setCategoria] = useState("")
  const [produtos, setProdutos] = useState<ProdutosState[]>([])
  useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const resposta = await fetch("http://localhost:8000/produtos")
          const result = await resposta.json()
          setProdutos(result)
        }catch(erro:any){
            setErroMensagem("Erro ao Realizar o fetch no backend")
        }
      }
      fetchData()
  },[]) //[] =>Lista de dependências
  //Quando a lista de dependências estiver vazia.
  //Significará que será executado quando carregar a página.

  function trataForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const produtoNovo:ProdutosState = {
      id:parseInt(id),
      nome,
      preco:parseFloat(preco),
      categoria
    }
    setProdutos([...produtos,produtoNovo])

  }
  function trataId(event:React.ChangeEvent<HTMLInputElement>){
    setId(event.target.value)
  }
  function trataNome(event:React.ChangeEvent<HTMLInputElement>){
    setNome(event.target.value)
  }
  function trataPreco(event:React.ChangeEvent<HTMLInputElement>){
    setPreco(event.target.value)
  }
  function trataCategoria(event:React.ChangeEvent<HTMLInputElement>){
    setCategoria(event.target.value)
  }
  return (
    <>
      {erroMensagem &&
        <div className="mensagem-erro">
            <p>{erroMensagem}</p>
        </div>
      }
      
      <div className="container">
        
        <div className="container-cadastro">
          <h1>Cadastro Produto</h1>
          <form onSubmit={trataForm}>
            <input type="text" name="id" id="id" placeholder="Id" onChange={trataId} />
            <input type="text" name="nome" id="nome" placeholder="Nome" onChange={trataNome} />
            <input type="text" name="preco" id="preco" placeholder="Preço" onChange={trataPreco} />
            <input type="text" name="categoria" id="categoria" placeholder="Categoria" onChange={trataCategoria} />
            <input type="submit" value="Cadastrar" />
          </form>
        </div>
        <div className="container-listagem">
          {produtos.map(produto => {
            return (
              <div className="container-produto">
                <div className="produto-nome">
                  {produto.nome}
                </div>
                <div className="produto-preco">
                  {produto.preco}
                </div>
                <div className="produto-categoria">
                  {produto.categoria}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Container