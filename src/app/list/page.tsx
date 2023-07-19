export default function List() {

  const price = 40000
  const won = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  })

  return (
    <div>
      <h3 className='title'>라우팅!</h3>
      <p className='title-sub'>마 등록해라!</p>
      <div className="product">
        <h4>{ won.format(price) } 상품 1 </h4>
      </div>
    </div>
  )
}
