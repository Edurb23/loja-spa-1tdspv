import Image from 'next/image'


export default function Home() {
  return (
    <>
    <h1>HOME</h1>

    <div>
     
         <figure>
      <Image src="/images/home.png"
      width={300}
      height={300}
      alt='Imagem de um camisa'
      />
     
    </figure>

         
    </div>
    

    </>
  )
}
