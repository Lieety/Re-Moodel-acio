import NavBar from '../../components/NavBar'
import PriceCard from '@/components/priceCard'

export default function Pricing () {
  return (
    <>
      <NavBar id='planes' />
      <div classNameName='about-container '>
        <div className=' flex flex-col justify-center items-center gap-5'>
          <h1>Planes</h1>

          <div className='flex flex-row gap-4'>
            <PriceCard
              planName='Gratis'
              price={0}
              services={['30 alumnes', '1 asignatura', '1 institut/profe']}
              notServices={[
                'Comunicació amb families',
                'Seguiment de assistencia'
              ]}
            />
            <PriceCard
              planName='Standard'
              price={49.99}
              services={[1, 2, 3]}
              notServices={[5, 6, 7]}
            />
            <PriceCard
              planName='Pro'
              price={129.0}
              services={[1, 2, 3]}
              notServices={[5, 6, 7]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
