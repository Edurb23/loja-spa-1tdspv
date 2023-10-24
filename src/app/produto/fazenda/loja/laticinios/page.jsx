import React from 'react'
import Image from "next/image";

export default async function TodosLaticinios() {

        const response = await fetch("http://localhost:3000/api/laticinios");
        const queijos = await response.json();


  return (
    <div>
        <h1>Laticionios</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Preco</th>
                    <th>Categoria</th>
                    <th>Descricao</th>
                </tr>
            </thead>
            <tbody>
                {queijos.map((queijos) => (
                    <tr key={queijos.id}>
                        <td>{queijos.id}</td>
                        <td><Image src={queijos.imagem} width={100} height={100} alt={queijos.descricao} /></td>
                        <td>{queijos.nome}</td>
                        <td>{queijos.preco}</td>
                        <td>{queijos.categoria}</td>
                        <td>{queijos.descricao}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="6">Ttotal de Laticínios:{queijos.length}</td>
                </tr>
            </tfoot>
        </table>

    </div>
  )
}
