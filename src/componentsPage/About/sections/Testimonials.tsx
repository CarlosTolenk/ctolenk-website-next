import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="special-block-bg">
      <div className="section-head">
        <h4>
          <span>What My Freedom</span>
          Client Say
        </h4>
      </div>

      <div className="testimonials">
        <div className="testimonial-item">
          <div className="testimonial-content">
            <div className="testimonial-review">
              <p>
                Wow what great experience, I love it! Its exactly what Ive been
                looking for. Annas group was the best investment I ever made. I
                dont know if I would have ever made it without her guidance and
                support!
              </p>
            </div>
          </div>
          <div className="testimonial-footer">
            <div className="testimonial-avatar">
              <Image
                src={'https://via.placeholder.com/80x80'}
                alt={'Gary Johnson'}
                height={80}
                width={90}
              />
            </div>
            <div className="testimonial-owner-content">
              <p className="testimonial-owner">Johny Melion</p>
              <p className="testimonial-position">General Manager</p>
              <ul className="testimonial-rating">
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStarHalf} />
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-content">
            <div className="testimonial-review">
              <p>
                Wow what great experience, I love it! Its exactly what Ive been
                looking for. Annas group was the best investment I ever made. I
                dont know if I would have ever made it without her guidance and
                support!
              </p>
            </div>
          </div>
          <div className="testimonial-footer">
            <div className="testimonial-avatar">
              <Image
                src={'https://via.placeholder.com/80x80'}
                alt={'Gary Johnson'}
                height={80}
                width={90}
              />
            </div>
            <div className="testimonial-owner-content">
              <p className="testimonial-owner">Johny Melion</p>
              <p className="testimonial-position">General Manager</p>
              <ul className="testimonial-rating">
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStar} />
                  </i>
                </li>
                <li>
                  <i className="fa fa-star">
                    <FontAwesomeIcon size={'xs'} icon={faStarHalf} />
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
