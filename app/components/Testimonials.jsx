import {useRef} from 'react';
import {TestimonialCard} from '~/components';
import Slider from 'react-slick';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

export function Testimonials({testimonials}) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: true,
    initialSlide: 1,
  };

  return (
    <section>
      <Slider ref={sliderRef} {...sliderSettings}>
        {testimonials &&
          testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
      </Slider>
      <div className="flex justify-center gap-2 mt-12">
        <button onClick={previous} className="slider-btn">
          <AiOutlineLeft />
        </button>
        <button type="slider-btn" onClick={next} className="slider-btn">
          <AiOutlineRight />
        </button>
      </div>
    </section>
  );
}
