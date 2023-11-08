import React, { useRef, useState, useEffect } from 'react'
import "../style.css"

import downArrow from '../down.png'
import slim3030 from '../imgs/slim3030.png'
import slim3032 from '../imgs/slim3032.png'
import slim3034 from '../imgs/slim3034.png'
import slim3230 from '../imgs/slim3230.png'
import slim3232 from '../imgs/slim3232.png'
import slim3234 from '../imgs/slim3234.png'
import slim3430 from '../imgs/slim3430.png'
import slim3432 from '../imgs/slim3432.png'
import slim3434 from '../imgs/slim3434.png'

import straight3030 from '../imgs/straight3030.png'
import straight3032 from '../imgs/straight3032.png'
import straight3034 from '../imgs/straight3034.png'
import straight3230 from '../imgs/straight3230.png'
import straight3232 from '../imgs/straight3232.png'
import straight3234 from '../imgs/straight3234.png'
import straight3430 from '../imgs/straight3430.png'
import straight3432 from '../imgs/straight3432.png'
import straight3434 from '../imgs/straight3434.png'

export const Main = () => {
  const [fitState, setFitState] = useState('');
  const [dropdownHeadState, setDropdownHeadState] = useState(false);
  const [dropdownDropState, setDropdownDropState] = useState(false);
  const [dropdownText, setDropdownText] = useState('Choose fit');
  const [waistValue, setWaistValue] = useState('34');
  const [legValue, setLegValue] = useState('34');
  const [imgSetState, setImgSetState] = useState([]);

  const [imgSizeState, setImgSizeState] = useState(waistValue + legValue);
  const [imgsrc, setImgsrc] = useState('');

  useEffect(() => {
    // When imgSetState changes, update imgsrc
    for (let img of imgSetState) {
      if (img.size === imgSizeState) {
        setImgsrc(img.img);
        break;
      }
    }
  }, [imgSetState, imgSizeState]);

  const changeDropdown = () => {
    setDropdownDropState(!dropdownDropState);
    setDropdownHeadState(!dropdownHeadState);
  };

  const changeStateSlim = (message) => {
    setFitState(message);
    setDropdownDropState(!dropdownDropState);
    setDropdownHeadState(!dropdownHeadState);
    setDropdownText('Slim Fit');
    setImgSetState(slimImgs);
  };

  const changeStateStraight = (message) => {
    setFitState(message);
    setDropdownDropState(!dropdownDropState);
    setDropdownHeadState(!dropdownHeadState);
    setDropdownText('Straight Fit');
    setImgSetState(straightImgs);
  };

  const changeWaist = (newValue) => {
    setWaistValue(newValue);
    // Calculate new size before setting imgSizeState
    const newSize = newValue + legValue;
    setImgSizeState(newSize);
  };

  const changeLeg = (newValue) => {
    setLegValue(newValue);
    // Calculate new size before setting imgSizeState
    const newSize = waistValue + newValue;
    setImgSizeState(newSize);
  };

  return (
    <section className="outline">
      <header>
        <Dropdown
          changeState={changeStateSlim}
          changeStateStraight={changeStateStraight}
          dropState={dropdownDropState}
          headState={dropdownHeadState}
          changeDropdownState={changeDropdown}
          dropText={dropdownText}
        />
        <Description data={fitState} />
      </header>

      <section>
        <ImageSelector isrc={imgsrc} />
      </section>

      <footer>
        <SizeSelector wValue={waistValue} lValue={legValue} wfunction={changeWaist} lfunction={changeLeg} />
      </footer>
    </section>
  );
};


const Dropdown = ({changeState, changeStateStraight, dropState, headState, changeDropdownState, dropText}) => {

  return ( <>

      <div className='dropdown'>
        <div className={`dropdownState ${headState ? 'active' : ''}`}>
          <h1 id='chooseFit-title'>{dropText}</h1>
          <div onClick={changeDropdownState} className='dropdownStateImg-wrapper'>
            <img src={downArrow} alt="" />
          </div>
        </div>
        <div className={`dropdown-drop ${dropState ? 'active' : ''}`}>
          <h1 onClick={() => changeState(slimFit)}>Slim Fit</h1>
          <h1 onClick={() => changeStateStraight(straightFit)}>Staright Fit</h1>
        </div>
      </div>
  </>
  )
}

const Description = ({data}) => {

  const des = data.description

  return (

    <div className='description-container'> 
      <h1 className='description-text'>{des}</h1>
    </div>

  )
}

const SizeSelector = ({wValue, lValue, wfunction, lfunction}) => {



  return (
    <>
    
      <section className='footer'>

        <div className='selected'>{wValue} X {lValue}</div>

        <div className='selected-table'>
          <div className='waist-container'>
            <h1>Choose waist size</h1>
              <div className='waist-values'>
                {
                  waistValues.map((value, idx) => {
                    return <h1 onClick={() => wfunction(value)} key={idx}>{value}</h1>
                  })
                }
              </div>
          </div>
          <div className='waist-container'>
            <h1>Choose Leg size</h1>
              <div className='waist-values'>
                {
                  legValues.map((value, idx) => {
                    return <h1 onClick={() => lfunction(value)} key={idx}>{value}</h1>
                  })
                }
              </div>
          </div>
        </div>

      </section>

    </>
  )

}

const ImageSelector = ({isrc}) => {

  return (
    <>
    
      <section className='image-selector-container'>

        <div className='mainimg-wrapper'>
          <img src={isrc} alt="" />
        </div>

      </section>

    </>
  )
}


const waistValues = ['30', '32', '34']
const legValues = ['30', '32', '34']

const slimImgs = [
  {size: '3030',
   img: slim3030},
  {size: '3032',
  img: slim3032},
  {size: '3034',
  img: slim3034},
  {size: '3230',
  img: slim3230},
 {size: '3232',
 img: slim3232},
 {size: '3234',
 img: slim3234},
 {size: '3430',
 img: slim3430},
{size: '3432',
img: slim3432},
{size: '3434',
img: slim3434}
]

const straightImgs = [
  {size: '3030',
   img: straight3030},
  {size: '3032',
  img: straight3032},
  {size: '3034',
  img: straight3034},
  {size: '3230',
  img: straight3230},
 {size: '3232',
 img: straight3232},
 {size: '3234',
 img: straight3234},
 {size: '3430',
 img: straight3430},
{size: '3432',
img: straight3432},
{size: '3434',
img: straight3434}
]

const slimFit = {
  style: 'Slim Fit',
  description: 'Slim up top and straight through the knee, slim straight jeans are the kind of fit you\'d see on a Ramones album cover.'
}

const straightFit = {
  style: 'Staright Fit',
  description: 'Let\'s start simple. Straight fit jeans are exactly what they sound like: The silhouette runs straight from the hips down through the legs.'
}
