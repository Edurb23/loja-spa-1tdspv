import Link from 'next/link'

export default function Cabecalho() {
    return (
        <header className='bg-slate-800 text-white'>
            <h1 className='text-center text-3x1 font-extrabold'>PRODUTOS</h1>
            <hr className=' border-red-600' />
            <nav className='menu'>
                <ul>

                    <li >
                        <Link href="/produto/tenis">Tênis</Link>
                    </li>
                    <li>
                        <Link href="/produto/camisa">Camisa</Link>
                    </li>
                    <li>
                        <Link href="/produto/calcas">Calças</Link>
                    </li>
                    <li>
                        <Link href="/produto/fazenda/loja/laticinios">Fazenda</Link>
                    </li>
                    

                </ul>
            </nav>





        </header>
    )

}