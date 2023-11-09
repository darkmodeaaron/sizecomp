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
import straight3036 from '../imgs/straight3036.png'
import straight3230 from '../imgs/straight3230.png'
import straight3232 from '../imgs/straight3232.png'
import straight3234 from '../imgs/straight3234.png'
import straight3236 from '../imgs/straight3236.png'
import straight3430 from '../imgs/straight3430.png'
import straight3432 from '../imgs/straight3432.png'
import straight3434 from '../imgs/straight3434.png'
import straight3436 from '../imgs/straight3436.png'
import straight3630 from '../imgs/straight3630.png'
import straight3632 from '../imgs/straight3632.png'
import straight3634 from '../imgs/straight3634.png'
import straight3636 from '../imgs/straight3636.png'

import wide3030 from '../imgs/wide3030.png'
import wide3032 from '../imgs/wide3032.png'
import wide3034 from '../imgs/wide3034.png'
import wide3036 from '../imgs/wide3036.png'
import wide3230 from '../imgs/wide3230.png'
import wide3232 from '../imgs/wide3232.png'
import wide3234 from '../imgs/wide3234.png'
import wide3236 from '../imgs/wide3236.png'
import wide3430 from '../imgs/wide3430.png'
import wide3432 from '../imgs/wide3432.png'
import wide3434 from '../imgs/wide3434.png'
import wide3436 from '../imgs/wide3436.png'
import wide3630 from '../imgs/wide3630.png'
import wide3632 from '../imgs/wide3632.png'
import wide3634 from '../imgs/wide3634.png'
import wide3636 from '../imgs/wide3636.png'

import marker from '../imgs/down-arrow.png'

export const Main = () => {
  const [fitState, setFitState] = useState(intro);
  const [dropdownHeadState, setDropdownHeadState] = useState(false);
  const [dropdownDropState, setDropdownDropState] = useState(false);
  const [dropdownText, setDropdownText] = useState('Choose fit');
  const [waistValue, setWaistValue] = useState('Choose waist');
  const [legValue, setLegValue] = useState('Choose leg');
  const [imgSetState, setImgSetState] = useState([]);

  const [imgSizeState, setImgSizeState] = useState(waistValue + legValue);
  const [imgsrc, setImgsrc] = useState('');

  const[imgAnimationState, setImgAnimationState] = useState(true)

  const[waistTableState, setWaistTableState] = useState(false)
  const[legTableState, setLegTableState] = useState(false)

  const [coverState, setCoverState] = useState(false)
  const [waistArrowState, setWaistArrowState] = useState(true)
  const [legArrowState, setLegArrowState] = useState(true)

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
    setImgAnimationState(false)
    setCoverState(true)
    animation()
    setTimeout(function() {
      setImgSetState(slimImgs);
    }, 500)
  };

  const changeStateStraight = (message) => {
    setFitState(message);
    setDropdownDropState(!dropdownDropState);
    setDropdownHeadState(!dropdownHeadState);
    setDropdownText('Straight Fit');
    setImgAnimationState(false)
    setCoverState(true)
    animation()
    setTimeout(function() {
      setImgSetState(straightImgs);
    }, 500)
  };

  const changeStateWide = (message) => {
    setFitState(message);
    setDropdownDropState(!dropdownDropState);
    setDropdownHeadState(!dropdownHeadState);
    setDropdownText('Wide Fit');
    setImgAnimationState(false)
    setCoverState(true)
    animation()
    setTimeout(function() {
      setImgSetState(wideImgs);
    }, 500)
  };

  const changeWaist = (newValue) => {
    setWaistValue(newValue);
    // Calculate new size before setting imgSizeState
    const newSize = newValue + legValue;
    setTimeout(function() {
      setImgSizeState(newSize);
    }, 500)
    animation()
    setWaistTableState(!waistTableState)
    setWaistArrowState(false)
    console.log(imgSizeState)
  };

  const changeLeg = (newValue) => {
    setLegValue(newValue);
    // Calculate new size before setting imgSizeState
    const newSize = waistValue + newValue;
    setTimeout(function() {
      setImgSizeState(newSize);
    }, 500)
    animation()
    setLegTableState(!legTableState)
    setLegArrowState(false)
  };

  const animation = () => {
    setImgAnimationState(true)
    setTimeout(function() {
      setImgAnimationState(false)
    }, 750)
  }

  const waistTableClick = () => {
    setWaistTableState(!waistTableState)
  }

  const legTableClick = () => {
    setLegTableState(!legTableState)
  }

  return (
    <section className="outline">
      <div className='leftSide'>
        <Dropdown
          changeState={changeStateSlim}
          changeStateStraight={changeStateStraight}
          changeStateWide={changeStateWide}
          dropState={dropdownDropState}
          headState={dropdownHeadState}
          changeDropdownState={changeDropdown}
          dropText={dropdownText}
        />
        <Description data={fitState} />
        <div>
          <SizeSelectors wv={waistValue} lv={legValue} waistState={waistTableState} legState={legTableState} waistStateFunction={waistTableClick} legStateFunction={legTableClick} wfunction={changeWaist} lfunction={changeLeg} coverW={waistArrowState} coverL={legArrowState}/>
        </div>
      </div>

      <div className='rightSide'>
        <ImageSelector isrc={imgsrc} imgState={imgAnimationState} />
      </div>
      <img className={`red ${coverState ? 'active' : ''}`} src={marker} alt="" />
      <div className={`sizingCover ${coverState ? 'active' : ''}`}></div>
      <img className={`waistArrow ${waistArrowState ? 'active' : ''}`} src={marker} alt="" />
      <img className={`legArrow ${legArrowState ? 'active' : ''}`} src={marker} alt="" />
    </section>
  );
};

const Dropdown = ({changeState, changeStateStraight, changeStateWide, dropState, headState, changeDropdownState, dropText}) => {

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
          <h1 onClick={() => changeStateStraight(straightFit)}>Straight Fit</h1>
          <h1 onClick={() => changeStateWide(wideFit)}>Wide Fit</h1>
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



const SizeSelectors = ({wv, lv, waistState,  legState, waistStateFunction, legStateFunction ,wfunction, lfunction, coverW, coverL}) => {

  if (coverW == false) {
    wv += 'W'
  }

  if (coverL == false) {
    lv += 'L'
  }

  return (
    <>
      <div className='sizeSelectors-container'>
        <div className='container'>
          <div className={`selector-container ${waistState ? 'active' : ''}`}>
            <h1>{wv}</h1>
            <div onClick={waistStateFunction} className='dropdownStateImg-wrapper2'>
              <img src={downArrow} alt="" />
            </div>  
          </div>
          <div className={`selector-table ${waistState ? 'active' : ''}`}>
          {
                  waistValues.map((value, idx) => {
                    return <h1 className='size-number' onClick={() => wfunction(value)} key={idx}>{value}</h1>
                  })
                }
            <div className='dropdownStateImg-wrapper2'>
              <img src={downArrow} alt="" />
            </div> 
          </div>
        </div>
        <div className='container'>
          <div className={`selector-container ${legState ? 'active' : ''}`}>
            <h1>{lv}</h1>
            <div onClick={legStateFunction} className='dropdownStateImg-wrapper2'>
              <img src={downArrow} alt="" />
            </div>  
          </div>
          <div className={`selector-table ${legState ? 'active' : ''}`}>
          {
                  legValues.map((value, idx) => {
                    return <h1 className='size-number' onClick={() => lfunction(value)} key={idx}>{value}</h1>
                  })
                }
            <div className='dropdownStateImg-wrapper2'>
              <img src={downArrow} alt="" />
            </div> 
          </div>
        </div>
      </div>
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
  {size: '3036',
  img: straight3036},
  {size: '3230',
  img: straight3230},
 {size: '3232',
 img: straight3232},
 {size: '3234',
 img: straight3234},
 {size: '3236',
 img: straight3236},
 {size: '3430',
 img: straight3430},
{size: '3432',
img: straight3432},
{size: '3434',
img: straight3434},
{size: '3436',
img: straight3436},
{size: '3630',
img: straight3630},
{size: '3632',
img: straight3632},
{size: '3634',
img: straight3634},
{size: '3636',
img: straight3636}
]

const wideImgs = [
  {size: '3030',
   img: wide3030},
  {size: '3032',
  img: wide3032},
  {size: '3034',
  img: wide3034},
  {size: '3036',
  img: wide3036},
  {size: '3230',
  img: wide3230},
 {size: '3232',
 img: wide3232},
 {size: '3234',
 img: wide3234},
 {size: '3236',
 img: wide3236},
 {size: '3430',
 img: wide3430},
{size: '3432',
img: wide3432},
{size: '3434',
img: wide3434},
{size: '3436',
img: wide3436},
{size: '3630',
img: wide3630},
{size: '3632',
img: wide3632},
{size: '3634',
img: wide3634},
{size: '3636',
img: wide3636}
]

const intro = {
  description: 'Choose a fit of trouser you would like to view, then select your size to get an in depth look on the measurements to make sure your making the right choice!'
}

const slimFit = {
  style: 'Slim Fit',
  description: 'Slim up top and straight through the knee, slim straight jeans are the kind of fit you\'d see on a Ramones album cover.'
}

const straightFit = {
  style: 'Straight Fit',
  description: 'Let\'s start simple. Straight fit jeans are exactly what they sound like: The silhouette runs straight from the hips down through the legs.'
}

const wideFit = {
  style: 'Wide Fit',
  description: 'Tuff Tony is a loose fit with a high-waist and button fly. It is designed to sit at or just above the hip.'
}




/*
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
*/