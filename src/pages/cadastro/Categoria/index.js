import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria() {

    
    const valoresIniciais = {
        nome: 'Categoria',
        descricao: 'Descrição',
        cor: '#000'
    }
    
    const [values, setValues] = useState(valoresIniciais)
    
    // const [nomeDaCategoria, setNomeDaCategoria] = useState(values.nome)
    const [categorias, setCategorias] = useState([valoresIniciais])
    
    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(e) {
        setValue(
            e.target.getAttribute('name'), 
            e.target.value
        )
    }
    
    return (
        <PageDefault>

            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(e) => {
                e.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])
            }}>
                <>  
                    <FormField 
                        label="Nome da categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />

                    <FormField 
                        label="Descrição"
                        type="textarea"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                    />

                    {/* <label>
                        Descrição: 
                        <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label> */}

                    <FormField 
                        label="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />

                    {/* <label>
                        Cor: 
                        <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label> */}
                    
                </>

                <Button>
                    Cadastrar
                </Button>
                
            </form>

            <ul>
                {categorias.map(({ nome, descricao, cor }, indice) => {
                   return (
                   <li key={`${nome}${indice}`}>
                        {`${nome}, ${descricao}, ${cor}`}
                    </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria