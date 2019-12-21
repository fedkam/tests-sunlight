import React from 'react';
import Row from "../../components/Row";

const CreateGroup = (props) => {
  let {groupData} = props;

  const listData = groupData.listData.map((row, index) =>
    <Row headerName = {row.headerName}
         delimiter = {row.delimiter}
         infoText = {row.infoText}
         otherText = {row.otherText}
         key={index}
    />
  );

  return(
      <div>
        { groupData.groupHeader && (
           <Row className = "group-header"
                headerName = {groupData.groupHeader}
           />
        )}
        {listData}
      </div>
  );
};

export default CreateGroup;
