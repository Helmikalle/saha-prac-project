import React from 'react';
import '../../styles/Slider.css';

const SaunaPicture = (props) => {

  const styles = {
    backgroundImage: `url(${props.name})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }

  return (
    <div className="slide" style={styles}></div>
  )
}

export default SaunaPicture;