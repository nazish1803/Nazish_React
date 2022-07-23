import React from 'react'
import Button_MUI from './Button_MUI';
import Grid_Mui from './Grid_Mui';
import ImageList_Mui from './ImageList_Mui';
import Table from './Table';

function MUI() {
  return (
    <div>
        <Button_MUI />
        <hr/>
        <Grid_Mui />
        <hr/>
        <Table/>
        <hr />
        <ImageList_Mui />
        <hr />
    </div>
  )
}

export default MUI;