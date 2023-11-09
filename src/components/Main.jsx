import React, { useRef, useState, useEffect } from 'react'
import "../style.css"

import downArrow from '../down.png'
import slim3030 from '../imgs/slim3030.png'
import slim3032 from '../imgs/slim3032.png'
import slim3034 from '../imgs/slim3034.png'
import slim3036 from '../imgs/slim3036.png'
import slim3230 from '../imgs/slim3230.png'
import slim3232 from '../imgs/slim3232.png'
import slim3234 from '../imgs/slim3234.png'
import slim3236 from '../imgs/slim3236.png'
import slim3430 from '../imgs/slim3430.png'
import slim3432 from '../imgs/slim3432.png'
import slim3434 from '../imgs/slim3434.png'
import slim3436 from '../imgs/slim3436.png'
import slim3630 from '../imgs/slim3630.png'
import slim3632 from '../imgs/slim3632.png'
import slim3634 from '../imgs/slim3634.png'
import slim3636 from '../imgs/slim3636.png'

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
  const [fitState, setFitState] = useState(intro);
  const [dropdownHeadState, setDropdownHeadState] = useState(false);
  const [dropdownDropState, setDropdownDropState] = useState(false);
  const [dropdownText, setDropdownText] = useState('Choose fit');
  const [waistValue, setWaistValue] = useState('34');
  const [legValue, setLegValue] = useState('34');
  const [imgSetState, setImgSetState] = useState([]);

  const [imgSizeState, setImgSizeState] = useState(waistValue + legValue);
  const [imgsrc, setImgsrc] = useState('');

  const [sizeTableState, setSizeTableState] = useState(false)

  const[imgAnimationState, setImgAnimationState] = useState(true)

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
    setImgAnimationState(false)
  };

  const changeStateStraight = (message) => {
    setFitState(message);
    setDropdownDropState(!dropdownDropState);
    setDropdownHeadState(!dropdownHeadState);
    setDropdownText('Straight Fit');
    setImgSetState(straightImgs);
    setImgAnimationState(false)
  };

  const changeWaist = (newValue) => {
    setWaistValue(newValue);
    // Calculate new size before setting imgSizeState
    const newSize = newValue + legValue;
    setTimeout(function() {
      setImgSizeState(newSize);
    }, 500)
    animation()
  };

  const changeLeg = (newValue) => {
    setLegValue(newValue);
    // Calculate new size before setting imgSizeState
    const newSize = waistValue + newValue;
    setTimeout(function() {
      setImgSizeState(newSize);
    }, 500)
    animation()
  };

  const openSizeTable = () => {
    setSizeTableState(!sizeTableState)
    console.log()
  }


  const animation = () => {
    setImgAnimationState(true)
    setTimeout(function() {
      setImgAnimationState(false)
    }, 750)
  }

  return (
    <section className="outline">
      <div className='leftSide'>
        <Dropdown
          changeState={changeStateSlim}
          changeStateStraight={changeStateStraight}
          dropState={dropdownDropState}
          headState={dropdownHeadState}
          changeDropdownState={changeDropdown}
          dropText={dropdownText}
        />
        <Description data={fitState} />
        <SizeSelector wValue={waistValue} lValue={legValue} wfunction={changeWaist} lfunction={changeLeg} tableClick={openSizeTable} tableState={sizeTableState}/>
      </div>

      <div className='rightSide'>
        <ImageSelector isrc={imgsrc} imgState={imgAnimationState} />
      </div>
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

const SizeSelector = ({wValue, lValue, wfunction, lfunction, tableClick, tableState}) => {



  return (
    <>
    
      <section className='footer'>

        <div onClick={tableClick} className='selected'>{wValue} X {lValue}</div>

        <div  className={`selected-table ${tableState ? 'active' : ''}`}>
          <div className='waist-container'>
            <h1>Waist size</h1>
              <div className='waist-values'>
                {
                  waistValues.map((value, idx) => {
                    return <h1 className='size-number' onClick={() => wfunction(value)} key={idx}>{value}</h1>
                  })
                }
              </div>
          </div>
          <div className='waist-container'>
            <h1>Leg size</h1>
              <div className='waist-values'>
                {
                  legValues.map((value, idx) => {
                    return <h1 className='size-number' onClick={() => lfunction(value)} key={idx}>{value}</h1>
                  })
                }
              </div>
          </div>
        </div>

      </section>

    </>
  )

}

const ImageSelector = ({isrc, imgState}) => {

  return (
    <>
    
      <section className='image-selector-container'>

        <div className='mainimg-wrapper'>
          <img className={`mainimg ${imgState ? 'active' : ''}`} src={isrc} alt="" />
        </div>

      </section>

    </>
  )
}


const waistValues = ['30', '32', '34', '36']
const legValues = ['30', '32', '34', '36']

const slimImgs = [
  {size: '3030',
   img: slim3030},
  {size: '3032',
  img: slim3032},
  {size: '3034',
  img: slim3034},
  {size: '3036',
  img: slim3036},
  {size: '3230',
  img: slim3230},
 {size: '3232',
 img: slim3232},
 {size: '3234',
 img: slim3234},
 {size: '3236',
 img: slim3236},
 {size: '3430',
 img: slim3430},
{size: '3432',
img: slim3432},
{size: '3434',
img: slim3434},
{size: '3436',
img: slim3436},
{size: '3630',
img: slim3630},
{size: '3632',
img: slim3632},
{size: '3634',
img: slim3634},
{size: '3636',
img: slim3636}
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

const intro = {
  description: 'Choose a fit of trouser you would like to view, then select your size to get an in depth look on the measurements to make sure your making the right choice!'
}

const slimFit = {
  style: 'Slim Fit',
  description: 'Slim up top and straight through the knee, slim straight jeans are the kind of fit you\'d see on a Ramones album cover.'
}

const straightFit = {
  style: 'Staright Fit',
  description: 'Let\'s start simple. Straight fit jeans are exactly what they sound like: The silhouette runs straight from the hips down through the legs.'
}
