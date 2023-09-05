import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/pexels-vidit-goel-12429032.jpg'
import img2 from '../../Assets/pexels-nati-17893700 (1).jpg'
import img3 from '../../Assets/pexels-nout-gons-378570.jpg'
import img4 from '../../Assets/pexels-pixabay-40142.jpg'
import img5 from '../../Assets/pexels-lex-photography-450597.jpg'
import img6 from '../../Assets/pexels-josh-hild-2422588.jpg'
import img7 from '../../Assets/pexels-quintin-gellar-844167.jpg'
import img8 from '../../Assets/pexels-pierre-blaché-3440444.jpg'
import img9 from '../../Assets/pexels-arthur-brognoli-2346924.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [

  {
    id:1,
    imgSrc: img,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:2,
    imgSrc: img2,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:3,
    imgSrc: img3,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:4,
    imgSrc: img4,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:5,
    imgSrc: img5,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:6,
    imgSrc: img6,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:7,
    imgSrc: img7,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:8,
    imgSrc: img8,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  },
  {
    id:9,
    imgSrc: img9,
    desTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'While Singapore doesnt quite have a selection of natural waterfalls for us to admire, we do have some breathtaking man-made ones that are worth mentioning.'
  }
];
const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, desTitle, location, grade, fees, description})=>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    Details <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main 