import {useRef} from 'react';
import Slider from 'react-slick';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

export function Blogs({children}) {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const sliderSettings = {
    className: 'center',
    centerMode: true,
    dots: false,
    infinite: true,
    fade: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    initialSlide: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    centerPadding: '60px',
  };

  return (
    <>
      <div className="hidden mx-auto md:block overflow-hidden">
        <Slider ref={sliderRef} {...sliderSettings}>
          {children}
        </Slider>
      </div>
      <div className="hidden md:flex justify-center mt-12">
        <button onClick={previous} className="slider-btn bg-none">
          <AiOutlineLeft />
        </button>
        <button type="slider-btn" onClick={next} className="slider-btn">
          <AiOutlineRight />
        </button>
      </div>
      <div className="grid gap-5 mx-auto md:hidden">{children}</div>
    </>
  );
}
