import React from 'react'
import Container from '../Container'
import { dataa } from '@/lib/constant'

const Cards = ()=>{
    return(
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
{dataa.map((item)=>(

<div key={item.id} className=' p-6 rounded-lg shadow-lg'>
<div className='flex gap-2 items-center'>
    <div>{item.image}</div>
<h2 className='text-sm  font-bold text-white font-groove mb-2'>{item.title}</h2>

</div>
<p className='text-[rgba(211,211,214,1)] text-[12px] max-w-[250px] pt-4'>{item.description}</p>
</div>

))}
        </div>
    )
}

const SecondCards = () => {
  return (
   <section>
    <Container>
        <div className='flex justify-center mx-auto max-w-[900px] items-center'>
            
            <Cards  />
        </div>
    </Container>
   </section>
  )
}

export default SecondCards