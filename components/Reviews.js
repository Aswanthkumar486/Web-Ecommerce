import React from 'react'

export default function Reviews({data}) {
  return (
   <>
   <h1 className='text-center text-4xl text-bolder'>{data.title}</h1>
    <section className='w-full  h-[50vh] flex justify-center mt-2'>

    
    <marquee   behavior="scroll"
          direction="left"
          scrollamount="6"
          className="w-full"
          >
<div className='flex gap-4 lg:max-w-10xl h-50 p-0'>
    {data.testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className="bg-gray-50 p-5 text-wrap lg:p-10 rounded-lg shadow lg:min-w-[400px]  min-w-[100vw] lg:mx-3 lg:m-5"
            >
              <p className="italic lg:me-5 pt-3  ">“{t.quote}”</p>
              <footer className="mt-4 font-semibold">- {t.author}</footer>
            </blockquote>
          ))}
</div>
</marquee>
    </section>
   </>
  )
}
