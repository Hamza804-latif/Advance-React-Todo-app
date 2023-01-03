import React from 'react'
import Completed from '../Components/Completed/Completed';
import Inprogress from '../Components/Inprogress/Inprogress';
import Pending from '../Components/Pending/Pending';

const All = () => {
  return (
    <>

        <Pending />
        <Inprogress />
        <Completed />

    </>
  );
}

export default All
