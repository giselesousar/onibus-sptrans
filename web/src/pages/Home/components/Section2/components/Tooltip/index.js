import React, {useState, useRef} from 'react';
import {Overlay} from 'react-bootstrap';
import {FaQuestionCircle} from 'react-icons/fa'

export default function TooltipComponent(props){
    const {content} = props;

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return(
        <>
        <div ref={target} onClick={() => setShow(!show)} style={{cursor: "pointer", width:"3rem"}}>
        <FaQuestionCircle />
        </div>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: '#34CB79',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                width: "10rem",
                ...props.style,
              }}
            >
              {content}
            </div>
          )}
        </Overlay>
      </>
    )
}