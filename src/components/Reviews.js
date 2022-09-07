import React from 'react'
import './Reviews.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <section id="reviews">
      <h5>Review from clients</h5>
      <h2>Reviews</h2>

        <Swiper className="container reviews__container"
         modules={[Pagination]} spaceBetween={40} slidesPerView={1} autoplay={{delay: 500, disableOnInteraction: false, }} pagination={{clickable: true,}} scrollbar={{ draggable: true }}>
          <SwiperSlide className="reviews">
            <div className="client__avatar">
              <img src="/images/fav.jpg" alt="client" />
            </div>
            <h5 className="client__name">Client One</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio commodi accusantium, rem laboriosam iste dicta aliquid recusandae. Et voluptate quibusdam culpa vel reprehenderit adipisci quae repellat facilis distinctio rem?
              </small>
          </SwiperSlide>

          <SwiperSlide className="reviews">
            <div className="client__avatar">
              <img src="/images/fav.jpg" alt="client" />
            </div>
            <h5 className="client__name">Client Two</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae dolore culpa rerum eum, beatae ipsa doloremque doloribus earum voluptas dicta hic a provident cum ipsam adipisci minus vero atque.
              </small>
          </SwiperSlide>

          <SwiperSlide className="reviews">
            <div className="client__avatar">
              <img src="/images/fav.jpg" alt="client" />
            </div>
            <h5 className="client__name">Client Three</h5>
              <small className='client__review'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit debitis temporibus totam, ex quaerat, blanditiis minima voluptas vel perspiciatis doloremque eius voluptates placeat quas, quidem fuga similique dolorum repellendus rem?
              </small>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Reviews