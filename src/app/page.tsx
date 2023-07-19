import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const test = 'gogosing'
  const link = 'http://google.com/'

  return (
    <div>
      <h3 className='title'>간드앗!</h3>
      <p className='title-sub'>우디를 ? { test }</p>
      <p style={{ color: 'red', fontSize: '16px' }}>스타일 테스트</p>
      <a href={ link }>링크</a>
    </div>
  )
}
