import React from 'react'
const featuredPosts = [
  {
    image: '../../assets/images/image-retro-pcs.jpg',
    id: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
  },
  {
    image: '../../assets/images/image-top-laptops.jpg',
    id: '02',
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
  },
  {
    image: '../../assets/images/image-gaming-growth.jpg',
    id: '03',
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
  },
];


const FeaturePost = () => {
  return (
    <div className='mt-[1rem] lg:flex mb-[2rem] justify-between sm:flex '>
      {
        featuredPosts.map((item, index) => (
          <div className='items-center ' key={item.id} style={{ display: 'flex', marginBottom: '16px' }}>
            <img src={item.image} alt={item.title} style={{ width: '120px', height: '120px', marginRight: '16px' }} />
            <div>
              <h1 className='font-bold text-3xl text-[#f15e50]'>{item.id}</h1>
              <h3
              className='font-bold hover:text-[#f15e50]'
             >{item.title}</h3>
              <p style={{ color:'var(--dark-grayish-blue)' }}>{item.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FeaturePost