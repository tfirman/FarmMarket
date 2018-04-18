import React from 'react';
import PropTypes from 'prop-types';

function MarketAppearance(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: bisque;
        }
      `}</style>
      <h3><em>{props.day}</em> - {props.location}</h3>
      <p>{props.hours}, in Booth {props.booth}</p>
      <hr/>
    </div>
  );
}

MarketAppearance.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default MarketAppearance;
