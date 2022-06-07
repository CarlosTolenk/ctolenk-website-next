import Slider from 'react-slick'
import { PropsWithChildren } from 'react'

interface IPropsCarousel {
  children: PropsWithChildren<any>
}

const Carousel = ({ children }: IPropsCarousel) => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: false,
    speed: 500,
    columns: 2,
    slidesToShow: 2,
    fade: true,
  }

  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
