import Image from "next/image"
import terraForm from '/public/terraFFFForm.png'

export default function List() {

  const product = ['Bastion Host', 'Micro Frontend', 'Nuxt']
  const cost = [20, 30, 20]
  console.log('cost: ' + cost)

  product.map((element, idx) => {
    console.log(element)
  })
  
  return (
    <div>
      <h3 className='title'>뭐 임마! 라우팅 첨 봐 ?</h3>
      {
        product.map((element, idx) => {
          return (
            <div key={ idx }>
              <Image src={ terraForm } alt={""}/>
              {/* <Image src="https://s3.amazonaws.com/s3-bucket-test/test.png" alt={""} width={} height={}/> */}
              <h4>{ idx }: { element }</h4>
            </div>
          )
        })
      }
    </div>
  )
}
  