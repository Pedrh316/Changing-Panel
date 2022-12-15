import '../css/form.css';

export default function Componente3(props){
    return (
        <section>
            <form className="form">
                <h2>Formulário Componente 3</h2>
                <label>
                    Nome
                    <input type="text" placeholder="Digite um nome"/>
                </label>
                <label>
                    Email
                    <input type="email" placeholder="Email"/>
                </label>
                <button>Enviar</button>
            </form>
        </section>
    )
}