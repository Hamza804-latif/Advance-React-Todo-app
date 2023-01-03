import React, { useContext } from 'react';
import remove from "../../Assets/remove.svg";
import { AppContext } from '../../context';
import './Pending.css';



const DotModal = (props) => {
  const {pending,setPending, inprogress, setInprogress, completed, setCompleted } = useContext(AppContext);
  
  let data = 0;
  let tempPending = [...pending];
  let tempInprogress = [...inprogress];
  let tempcompleted = [...completed];

  switch (props.type)
  {
    case 'pending':
      data = 1;
      break;
    case 'inprogress':
      data = 2;
      break;
    case 'completed':
      data = 3;
      break;
    default:
      break;
  }
  const AddInprogressFromPending = (ind) => {
      setInprogress([...inprogress, pending[ind]])
      tempPending.splice(ind, 1);
      setPending([...tempPending]);
  }
  const AddCompletedFromPending = (ind) => {
       setCompleted([...completed, pending[ind]]);
       tempPending.splice(ind, 1);
       setPending([...tempPending]);
  }
  const AddPendingFromInprogress = (ind) => {
        setPending([...pending, inprogress[ind]]);
        tempInprogress.splice(ind, 1);
        setInprogress([...tempInprogress]);
  }
  const AddCompletedFromInprogress = (ind) => {
        setCompleted([...completed, inprogress[ind]]);
        tempInprogress.splice(ind, 1);
        setInprogress([...tempInprogress]);
  }
  const AddPendingFromCompleted = (ind) => {
          setPending([...pending, completed[ind]]);
          tempcompleted.splice(ind, 1);
          setCompleted([...tempcompleted]);
  }
  const AddInprogressFromCompleted = (ind) => {
      setInprogress([...inprogress, completed[ind]]);
      tempcompleted.splice(ind, 1);
      setCompleted([...tempcompleted]);
  };
  const DeleteData = (ind) => {
    switch (props.type) {
      case 'pending':
        tempPending.splice(ind, 1);
        setPending([...tempPending]);
        break;
      case 'inprogress':
        tempInprogress.splice(ind, 1);
        setInprogress([...tempInprogress]);
        break;
      case 'completed':
        tempcompleted.splice(ind, 1);
        setCompleted([...tempcompleted]);
        break;
      default:
        break;
    }
  }
  return (
      <>
          <div className='dotmodal'>
             <div className='dotmodal__container'>
                 <div className='dotmodal__container-delete'>
                    <img src={remove} alt="delete icon"/>
                    <p onClick={()=>DeleteData(props.id)}>Delete</p>
                 </div>
                 {
                  data===1?(
                    <div className='dotmodal__container-add'>
                      <p onClick={()=>AddInprogressFromPending(props.id)}>Add to Inprogress</p>
                    </div>
                  ):""
                 }
                 {
                  data===1?(
                    <div className='dotmodal__container-add'>
                      <p onClick={()=>AddCompletedFromPending(props.id)}>Add to Completed</p>
                    </div>
                  ):""
                 }
                 {
                  data===2?(
                    <div className='dotmodal__container-add'>
                      <p onClick={()=>AddPendingFromInprogress(props.id)}>Add to Pending</p>
                    </div>
                  ):""
                 }
                 {
                  data===2?(
                    <div className='dotmodal__container-add'>
                      <p onClick={()=>AddCompletedFromInprogress(props.id)}>Add to Completed</p>
                    </div>
                  ):""
                 }
                 {
                  data===3?(
                    <div className='dotmodal__container-add'>
                      <p onClick={()=>AddPendingFromCompleted(props.id)}>Add to Pending</p>
                    </div>
                  ):""
                 }
                 {
                  data===3?(
                    <div className='dotmodal__container-add'>
                      <p onClick={()=>AddInprogressFromCompleted(props.id)}>Add to Inprogress</p>
                    </div>
                  ):""
                 }
             </div>
          </div>
      </>
  )
}

export default DotModal;
