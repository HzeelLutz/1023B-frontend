function App() {

  return ( //pq isso é um componente? pq retorna JSX, que é HTML com JS, e pode ser usado como um componente em outros lugares. Praq serve um componemnt? Serve para dividir a aplicação em partes menores, mais fáceis de entender e manter, injetar código.
    //só pode ter uma div de retorn. ex.: não pode ter outro h1

    <>
      <h1>FrontEnd I</h1>
      <h1>;)</h1>
    </>
    
    //ou vc incapsula dentro de outra tag ou você usa uma tag chamada fragment (<></>), que é uma tag vazia, que não renderiza nada no HTML final, mas permite que você retorne mais de um elemento. Exemplo:
  )
}

export default App // export default é usado para exportar o componente App, assim ele pode ser importado em outros arquivos, como o main.tsx, que é o ponto de entrada da aplicação.
