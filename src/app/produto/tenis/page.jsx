import Link from 'next/link'
import Image from 'next/image'
export default function Tenis(){
    return(
        <div>
            <h1>TÊNIS</h1>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corporis incidunt vitae labore ea, quaerat fuga modi voluptas rerum architecto tempore illo, laborum vero consectetur iste dolore asperiores distinctio. Libero!
                </p>
                <p><Link href="/">Voltar</Link></p>
            </div>
            <figure>
      <Image src="/images/shoe.png"
      width={500}
      height={500}
      alt='Imagem de um tenis'
      />
      <figcaption>Tenis</figcaption>
    </figure>
        </div>
        
    )
}