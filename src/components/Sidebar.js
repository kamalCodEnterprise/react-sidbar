import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import CarlocKuk from './CarlocKuk';
import logo from '../assests/images/imologo.png';


function Sidebar({ handleItemClick }) {

    const [addClass , setAddClass] = useState(false);
    
    const handleAccordionSelect = (eventKey) => {
       
        setAddClass(!addClass)
    };
  return (
    <div className='sidmaindiv position-relative'>
        <div className='sidbardiv'>
        <div className='p-16'>
            <div className='text-end mb-3'> 
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                    <path d="M19.3 5.97938C19.2166 5.97938 19.1458 5.96618 19.0875 5.93978C19.0291 5.91338 18.9833 5.86719 18.95 5.80119L18.225 4.45484L16.4 3.82126C16.3166 3.79486 16.2583 3.75856 16.225 3.71236C16.1916 3.66617 16.175 3.61007 16.175 3.54407C16.175 3.47807 16.1916 3.42198 16.225 3.37578C16.2583 3.32958 16.3166 3.29328 16.4 3.26688L18.225 2.6531L18.95 1.36615C18.9833 1.30015 19.0291 1.25396 19.0875 1.22756C19.1458 1.20116 19.2166 1.18796 19.3 1.18796C19.3833 1.18796 19.4541 1.20116 19.5125 1.22756C19.5708 1.25396 19.6166 1.30015 19.65 1.36615L20.375 2.6531L22.2 3.26688C22.2833 3.29328 22.3416 3.32958 22.375 3.37578C22.4083 3.42198 22.425 3.47807 22.425 3.54407C22.425 3.61007 22.4083 3.66617 22.375 3.71236C22.3416 3.75856 22.2833 3.79486 22.2 3.82126L20.375 4.45484L19.65 5.80119C19.6166 5.86719 19.5708 5.91338 19.5125 5.93978C19.4541 5.96618 19.3833 5.97938 19.3 5.97938ZM19.3 17.7797C19.2333 17.7797 19.1666 17.7665 19.1 17.7401C19.0333 17.7137 18.9833 17.6675 18.95 17.6016L18.225 16.3146L16.425 15.7008C16.3416 15.6744 16.2833 15.6381 16.25 15.5919C16.2166 15.5457 16.2 15.4896 16.2 15.4236C16.2 15.3576 16.2166 15.3015 16.25 15.2553C16.2833 15.2091 16.3416 15.1728 16.425 15.1464L18.225 14.5327L18.95 13.1665C18.9833 13.1005 19.0291 13.0543 19.0875 13.0279C19.1458 13.0015 19.2166 12.9883 19.3 12.9883C19.3833 12.9883 19.4541 13.0015 19.5125 13.0279C19.5708 13.0543 19.6166 13.1005 19.65 13.1665L20.375 14.5327L22.175 15.1464C22.2583 15.1728 22.3166 15.2091 22.35 15.2553C22.3833 15.3015 22.4 15.3576 22.4 15.4236C22.4 15.4896 22.3833 15.5457 22.35 15.5919C22.3166 15.6381 22.2583 15.6744 22.175 15.7008L20.375 16.3146L19.65 17.6016C19.6166 17.6675 19.5666 17.7137 19.5 17.7401C19.4333 17.7665 19.3666 17.7797 19.3 17.7797ZM8.32498 14.3545C8.19164 14.3545 8.06248 14.3248 7.93748 14.2654C7.81248 14.206 7.71664 14.1235 7.64998 14.0179L6.02498 11.2658L2.52498 10.0184C2.39164 9.96563 2.28748 9.88974 2.21248 9.79074C2.13748 9.69174 2.09998 9.58945 2.09998 9.48385C2.09998 9.37826 2.13748 9.27596 2.21248 9.17696C2.28748 9.07797 2.39164 9.00207 2.52498 8.94927L6.02498 7.70192L7.64998 4.96962C7.71664 4.85082 7.81248 4.76173 7.93748 4.70233C8.06248 4.64293 8.19164 4.61323 8.32498 4.61323C8.45831 4.61323 8.58748 4.64293 8.71248 4.70233C8.83748 4.76173 8.93331 4.84422 8.99998 4.94982L10.65 7.70192L14.125 8.94927C14.275 9.00207 14.3875 9.07797 14.4625 9.17696C14.5375 9.27596 14.575 9.37826 14.575 9.48385C14.575 9.58945 14.5375 9.69174 14.4625 9.79074C14.3875 9.88974 14.275 9.96563 14.125 10.0184L10.65 11.2658L8.99998 14.0179C8.93331 14.1367 8.83748 14.2225 8.71248 14.2753C8.58748 14.3281 8.45831 14.3545 8.32498 14.3545Z" fill="#003F52"/>
                    </svg>
                    <span className='bg-skL rounded-5 px-3 py-2 fs-10 ms-2'>NACHTMODUS</span>
                </p>
            </div>
            <img src={logo} alt='logo' className='mb-3'/>
        </div>
            <Accordion  defaultActiveKey="0" onSelect={handleAccordionSelect} className=' position-relative'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className='w-100 d-flex bg-lt-green p-3 gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M5.54169 7.13245L5.54919 7.12411" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.70831 7.13245L8.71581 7.12411" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.54169 10.2991L5.54919 10.2908" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.70831 10.2991L8.71581 10.2908" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.54169 13.4658L5.54919 13.4575" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.70831 13.4658L8.71581 13.4575" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.875 16.625H2.85C2.58767 16.625 2.375 16.4124 2.375 16.15V4.43333C2.375 4.171 2.58767 3.95833 2.85 3.95833H7.125V2.85C7.125 2.58767 7.33767 2.375 7.6 2.375H11.4C11.6624 2.375 11.875 2.58767 11.875 2.85V7.125M11.875 16.625H16.15C16.4124 16.625 16.625 16.4124 16.625 16.15V7.6C16.625 7.33767 16.4124 7.125 16.15 7.125H11.875M11.875 16.625V13.4583M11.875 7.125V10.2917M11.875 13.4583V10.2917M11.875 13.4583H13.4583M11.875 10.2917H13.4583" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between w-100 lh1'> 
                                    <p className='font-avenir fs-18 text-white'>Immobilienlexikon</p><span className='text-d-green py-1 px-3 fs-10 lh-sm rounded-5 bg-skL plus-jakart fw-semibold'>KI</span>
                                </div>
                                <p className='lato-regular fs-11 text-white mt-2'>Immobilienwissen für alle Fälle.</p>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    
                    <div className='w-100 d-flex  mb-20 gap-2' onClick={() => handleItemClick('Preisschätzung')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M9.5 2.375V16.625" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.625 2.85V16.15C16.625 16.4124 16.4124 16.625 16.15 16.625H2.85C2.58767 16.625 2.375 16.4124 2.375 16.15V2.85C2.375 2.58767 2.58767 2.375 2.85 2.375H16.15C16.4124 2.375 16.625 2.58767 16.625 2.85Z" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.75 9.50001L5.9375 7.91667L7.125 9.50001" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.875 9.5L13.0625 11.0833L14.25 9.5" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between w-100 lh1'> 
                                <p className='font-avenir fs-18 text-d-pur'>Preisschätzung</p><span className='text-d-green py-1 px-3 fs-10 lh-6 rounded-5 bg-skL plus-jakart fw-semibold'>LINK</span>
                            </div>
                            <p className='lato-regular text-start fs-11 text-d-pur  mt-2'>Den Wert Ihres Hauses schätzen lassen.</p>
                        </div>
                    </div>

                    <div className='w-100 d-flex  mb-20 gap-2' onClick={() => handleItemClick('Checklisten')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M6.72919 3.16666H4.75002C3.87557 3.16666 3.16669 3.87555 3.16669 4.75V15.8333C3.16669 16.7078 3.87557 17.4167 4.75002 17.4167H9.50002" stroke="#003F52" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M12.2708 3.16666H14.25C15.1245 3.16666 15.8333 3.87555 15.8333 4.75V11.875" stroke="#003F52" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M6.33331 5.06666V3.5625C6.33331 3.34389 6.51054 3.16666 6.72915 3.16666C6.94776 3.16666 7.12832 2.98936 7.16577 2.77398C7.28306 2.09927 7.73772 0.791664 9.49998 0.791664C11.2622 0.791664 11.7169 2.09927 11.8342 2.77398C11.8717 2.98936 12.0522 3.16666 12.2708 3.16666C12.4894 3.16666 12.6666 3.34389 12.6666 3.5625V5.06666C12.6666 5.329 12.454 5.54166 12.1916 5.54166H6.80831C6.54598 5.54166 6.33331 5.329 6.33331 5.06666Z" stroke="#003F52" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M12.2708 16.2292L13.8541 17.8125L17.8125 13.8542" stroke="#003F52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between w-100 lh1'> 
                                <p className='font-avenir fs-18 text-d-pur'>Checklisten</p>
                                <span className='text-d-green py-1 px-3 fs-10 lh-6 rounded-5 bg-skL plus-jakart fw-semibold'>PDF  
                                    <svg xmlns="http://www.w3.org/2000/svg" className='ms-2' width="12" height="7" viewBox="0 0 12 7" fill="none">
                                    <path d="M1.50049 0.847824L6.19614 5.15217L10.5005 0.847824" stroke="#023C53" stroke-width="2"/>
                                    </svg>
                                </span>
                            </div>
                            <p className='lato-regular text-start fs-11 text-d-pur  mt-2'>Praktische Checklisten für jeden Schritt.</p>
                        </div>
                    </div>
                    <div className='w-100 d-flex  mb-20 gap-2' onClick={() => handleItemClick('Ratgeber')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M3.16669 15.0417V3.95833C3.16669 3.08388 3.87557 2.375 4.75002 2.375H15.3584C15.6207 2.375 15.8334 2.58767 15.8334 2.85V13.2322" stroke="#00404E" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M7.91669 11.0833C7.91669 11.0833 8.62919 8.61523 10.2917 7.125" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.1351 9.83606L10.0286 9.84612C8.68916 9.97191 7.49628 8.98866 7.36418 7.64986C7.23207 6.31106 8.21076 5.12373 9.55018 4.99788L11.9138 4.77578C12.0655 4.76153 12.2004 4.87285 12.2154 5.02442L12.417 7.06765C12.5549 8.46521 11.5332 9.70472 10.1351 9.83606Z" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.75 13.4583H15.8333" stroke="#00404E" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M4.75 16.625H15.8333" stroke="#00404E" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M4.75002 16.625C3.87557 16.625 3.16669 15.9161 3.16669 15.0417C3.16669 14.1672 3.87557 13.4583 4.75002 13.4583" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between w-100 lh1'> 
                                <p className='font-avenir fs-18 text-d-pur'>Ratgeber</p>
                                <span className='text-d-green py-1 px-3 fs-10 lh-6 rounded-5 bg-skL plus-jakart fw-semibold'>PDF
                                    <svg xmlns="http://www.w3.org/2000/svg" className='ms-2' width="12" height="7" viewBox="0 0 12 7" fill="none">
                                    <path d="M1.50049 0.847824L6.19614 5.15217L10.5005 0.847824" stroke="#023C53" stroke-width="2"/>
                                    </svg>
                                </span>
                            </div>
                            <p className='lato-regular text-start fs-11 text-d-pur  mt-2'>Immobilien-Expertenrat für Eigentümer.</p>
                        </div>
                    </div>
                    <div className='w-100 d-flex  mb-20 gap-2' onClick={() => handleItemClick('Mandatsnavigator')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <g clip-path="url(#clip0_1_144)">
                        <path d="M8.38036 8.38035L13.4184 5.58141L10.6195 10.6196L5.58136 13.4185L8.38036 8.38035Z" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.49998 17.4167C13.8722 17.4167 17.4166 13.8722 17.4166 9.5C17.4166 5.12774 13.8722 1.58333 9.49998 1.58333C5.12772 1.58333 1.58331 5.12774 1.58331 9.5C1.58331 13.8722 5.12772 17.4167 9.49998 17.4167Z" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g><defs><clipPath id="clip0_1_144"><rect width="19" height="19" fill="white"/></clipPath></defs>
                        </svg>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between w-100 lh1'> 
                                <p className='font-avenir fs-18 text-d-pur'>Mandatsnavigator</p><span className='text-d-green py-1 px-3 fs-10 lh-6 rounded-5 bg-skL plus-jakart fw-semibold'>KI</span>
                            </div>
                            <p className='lato-regular text-start fs-11 text-d-pur  mt-2'>Verständlich zum Verkaufsabschluss.0</p>
                        </div>
                    </div>

                    <div className='w-100 d-flex  mb-20 gap-2' onClick={() => handleItemClick('Wohntraumfinder')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M9.5 14.25V9.5M9.5 9.5V2.69952C9.5 2.35851 9.84865 2.1286 10.1622 2.26293L16.8469 5.12786C17.2226 5.28885 17.2331 5.8176 16.8641 5.99331L9.5 9.5Z" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.49998 17.4167C12.5606 17.4167 15.0416 16.1761 15.0416 14.6458C15.0416 13.1155 12.5606 11.875 9.49998 11.875C6.4394 11.875 3.95831 13.1155 3.95831 14.6458C3.95831 16.1761 6.4394 17.4167 9.49998 17.4167Z" stroke="#00404E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between w-100 lh1'> 
                                <p className='font-avenir fs-18 text-d-pur'>Wohntraumfinder</p><span className='text-d-green py-1 px-3 fs-10 lh-6 rounded-5 bg-skL plus-jakart fw-semibold'>KI</span>
                            </div>
                            <p className='lato-regular text-start fs-11 text-d-pur  mt-2'>Zum Traumheim mit KI-Unterstützung.</p>
                        </div>
                    </div>
                   
                    </Accordion.Body> 
                </Accordion.Item>
                
            </Accordion>
        </div>
        <CarlocKuk addClass={addClass}/>
    </div>
  )
}

export default Sidebar