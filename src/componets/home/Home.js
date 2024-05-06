import React from 'react'
import Review from './Review'
import Reviews from './Reviews'
const Home = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Review Blog App</h2>
          <div className='underline'></div>
          {/* <Review/> */}
          <Reviews></Reviews>
        </div>
      </section>
    </main>
  
  )
}

export default Home