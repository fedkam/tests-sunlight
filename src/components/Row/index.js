import React from 'react';

const Row = (props) => {
  let {
    headerName = "",
    delimiter = ":",
    infoText = "",
    otherText
  } = props;

  return(
      <div>
        <p>{headerName} {delimiter} {infoText} {otherText}</p>
      </div>
  );
}

export default Row;
