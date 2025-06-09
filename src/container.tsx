//props -> é utilizado para passar dados diferente para cada componente em sua criação

//states -> Estados, salvam estados de variáveis do react e quando esses estados mudam, 
//automaticamente o react endente que ele precisa atualizar a tela para mostrar os novos valores do componente
//super -> chama o construtor da classe pai, que é a classe React.Component
//setState -> é utilizado para atualizar o estado do componente,
//state -> é um objeto que contém os estados do componente,

//antes de ter funções no react
//class

interface containerProps{
    nome: string;
}
function Container(props: containerProps) {
    let texto = "Texto antes de mudar"
    function mudar() {
        texto="texto depois de mudar"
    }
    return(
        <>
        <h1>{props.nome}</h1>
        <p>{texto}</p>
        <button onClick={mudar}>Mudar</button>
        </>
    )
}
export default Container;