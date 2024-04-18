import React,{Fragment} from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Backdrop(props)
{
  return <div className={classes.backdrop} onClick={props.onClose}></div>
};

function ModalOverlay(props)
{
return <div className={classes.modal}>

    <div className={classes.content}>{props.children}</div>
</div>

};

export default function Modal(props) {

    const portalElement=document.getElementById('overlays');
  return (
    <Fragment>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
         portalElement)}
    </Fragment>
  )
}
