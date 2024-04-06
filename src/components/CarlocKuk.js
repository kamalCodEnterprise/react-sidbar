import React from 'react'
import carlos from '../assests/images/carlos.png';
import { Button } from 'react-bootstrap';

export default function CarlocKuk({addClass}) {
  return (
    <div className={`mt-4 carlus  ${addClass ? "" : "active"}`}>
        <div className='border-3g pb-4 p-16 bg-lt-green rounded'>
            <img src={carlos} alt='logo' className='mb-3 carlimg'/>

            <h3 className='plus-jakart fw-semibold fs-18 text-white m-0'>Immotrust AG </h3>
            <p className='lato-regular fs-14 text-white fw-medium midtext'>Vertrauensvolle Immobilienberatung seit 2008.</p>
            <Button  className='plus-jakart fw-semibold fs-13 text-white button-bg'>Carlos Kuk - Eigentümer</Button>
        </div>
        <p className='botomtext text-center font-avenir'>Impressum & Datenschutzcenter</p>
    </div>
  )
}
