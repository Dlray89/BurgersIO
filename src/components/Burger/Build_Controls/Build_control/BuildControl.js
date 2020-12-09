import React from 'react'
import './Build_control.css'



const BuildControl = (props) => {
    return(
        <div className='BuildControl'>
            <div key={props.key} className='Label'>
              <div>
                  {props.label}
              </div>
                <div>
                    
                <button variant='outlined' className='Less' onClick={props.removed} disabled={props.disable } >Less</button>
                    <button variant='outlined' className='More' onClick={props.added} >More</button>
                
                </div>
            </div>
        </div>
    )
}

export default BuildControl