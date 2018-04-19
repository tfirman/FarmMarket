import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function MonthSelection(props){
  return (
    <div id={props.month}>
      <style jsx>{`
        div {
          background-color: burlywood;
        }
        h3 {
          text-align: center;
        }
      `}</style>
      <hr/>
      <h3><em>{props.month}</em></h3>
      {props.selection.map((item, index) =>
        <Item description={item}
          key={index}/>
      )}
    </div>
  );
}

MonthSelection.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default MonthSelection;
