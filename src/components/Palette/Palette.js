import React, { useState } from 'react';
import './Palette.css';

const palette = [
  { firstColor: '#A5AAF5', secondColor: '#D9DCE1' },
  { firstColor: '#F4E697', secondColor: '#D9DCE1' },
  { firstColor: '#ECB391', secondColor: '#D9DCE1' },
  { firstColor: '#D5F698', secondColor: '#D9DCE1' },
  { firstColor: '#858DF3', secondColor: '#DC9698' },
  { firstColor: '#F4E697', secondColor: '#9889F3' },
  { firstColor: '#ECB490', secondColor: '#8CC681' },
];

const Palette = () => {
  const [active, setActive] = useState(0);
  const setActivePalette = index => setActive(index);

  return (
    <div className='palette'>
      <span className='palette_subtitle'>Choose your color scheme</span>
      <hr/>

      <div className='palette_container'>
        {
          palette.map((item, index) => (
            <div 
              className={`palette_item ${active === index ? 'active' : null}`} 
              key={index}
              onClick={() => setActivePalette(index)}
            >
              <div className='palette_color' style={{ backgroundColor: item.firstColor }} />
              <div className='palette_color' style={{ backgroundColor: item.secondColor }} />
            </div>
          ))
        }
      </div>

      <div className='palette_switcher'>
        <div className='palette_chosenColor'>
          <span className='switcher_title'>Primary Color</span>
          <div className='switcher_container'>
            <span>{palette[active].firstColor}</span>
            <div className='colorRound' style={{ backgroundColor: palette[active].firstColor }} />
          </div>
        </div>
        <button />
        <div className='palette_chosenColor'>
          <span className='switcher_title'>Secondary Color</span>
          <div className='switcher_container'>
            <span>{palette[active].secondColor}</span>
            <div className='colorRound' style={{ backgroundColor: palette[active].secondColor }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Palette;
