import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: peru;
        }
      `}</style>
      <p>{props.description}</p>
    </div>
  );
}

Item.propTypes = {
  description: PropTypes.string.isRequired
};

export default Item;
