'use client'

import { age, name } from './data.ts'

export default function List() {

  const price = 40000
  const wonFormat = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  })

  return (
    <div>
      <h3 className='title'>라우팅!</h3>
      <p className='title-sub'>마 등록해라!</p>
      <ProductItem wonFormat={ wonFormat } price={ price }/>
      <p>그냥 출력 - { age }: { name }</p>
    </div>
  )
}

const ProductItem = (props: { wonFormat: any; price: any }) => {

  const { wonFormat, price } = props

  return (
    <div className="product">
      <h4>{ wonFormat.format(price) } 상품 1 </h4>
      <p>상품명: 가즈아!!!</p>
      <p>수량: 1개</p>
    </div>
  )
}