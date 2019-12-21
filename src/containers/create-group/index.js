import React from 'react';
import Row from "../../components/Row";

const CreateGroup = (props) => {
  let {
    groupData
  } = props;

  console.log("groupData=",groupData);

  return(
      <div>
        { groupData.groupHeader && (
           <Row headerName = {groupData.groupHeader}
                delimiter = ":"
        />)}
        <Row headerName = {groupData.listData[0].headerName}
             infoText = {groupData.listData[0].infoText}
        />
      </div>
  );
};

export default CreateGroup;
