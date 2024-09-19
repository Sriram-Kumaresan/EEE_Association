import React from 'react'
import "./Payment.css"


import payment_heading from "../../asset/payment.svg"
import bank_icon from "../../asset/Vector.svg"
import gpay from "../../asset/Gpay.svg"
import qr from "../../asset/Qr.svg"
import alconesylogo from "../../asset/pay_logo.svg"
import cloud from "../../asset/cloud.svg"
import { PhotoUpload } from '../../widgets'


const Payment = () => {
  return (

    <div className="Eee__pay-main">

        <div className="Eee__pay-heading">
            <img src={payment_heading} alt="Payment" /> 
        </div>
        <div className="Eee__pay_inst-delt">
            <div className="Eee__pay-inst">
                <div className="Eee__pay-inst-hd">
                    <p>PAYMENT INSTRUCTION</p>
                </div>
                <div className="Eee__pay-inst-cont">
                    <p className="Eee__pay-inst-p">
                    1. Payment must be completed via the designated payment portal.
                        
                    </p>
                    <p className="Eee__pay-inst-p">
2. Ensure payment is made in full before the registration deadline.

                    </p>
                    <p className="Eee__pay-inst-p">
3. Use the symposium reference number when making payments.

                    </p>
                    <p className="Eee__pay-inst-p">
4. Accepted payment methods include credit card, debit card.

                    </p>
                    <p className="Eee__pay-inst-p">
5. Payment confirmation will be sent via email within 24 hours.

                    </p>
                    <p className="Eee__pay-inst-p">
6. No refunds will be issued after the payment is processed.
                    </p>
                    <a  className='Eee__pay-inst-p  Eee__pay-info' href="#">Click here for more information</a>
                    <div className="Eee__pay-icon-holder"> <div className="Eee__pay-bank-icon">
                        <img src={bank_icon} alt="bank icon" />
                    </div>

                    </div>
                   

                    <div className="Eee__pay-inst-form">
                        <input className='Eee__pay-inst-form-inp' type="text" placeholder='Account Number:' />
                        <input className='Eee__pay-inst-form-inp' type="text" placeholder='IFC Code:' />
                        <input className='Eee__pay-inst-form-inp' type="text" placeholder='Branch Name' />
                    </div>
               
                </div>


            </div>
                <div className="Eee__pay-det">
                <div className="Eee__pay-det-hd">
                    <p>PAYMENT DETAILS</p>
                </div>

                <p className="Eee__pay-det-cont  Eee__pay-inst-p  ">
                    Multiple selection provided
                    </p>
                    <input className='Eee__pay-det-inp-half' type="text"  placeholder='General Registration'/>
                    <input className='Eee__pay-det-inp-half' type="text"  placeholder='Workshop'/>

                    <input className='Eee__pay-inst-form-inp' type="text" placeholder='General Registration + Food ' />
                    <input className='Eee__pay-inst-form-inp' type="text" placeholder='Total cost:' />

                    <div className="Eee__pay-icon-holder">
                        
                    <div className="Eee__pay-det-gpay">
                    <img src={gpay} alt="gpay " />
                    </div>
                        </div>    
                    <div className="Eee__gpay_qr_container">
                        <div className="Eee__gpay-svg">
                            <img src={qr} alt="gpay Qr" />
                        </div>

                        <div className="Eee__gpay-aside-inp">
                            <input   className='pay__gpay-inp' type="text" placeholder='999999' />
                            <input type="text" className='pay__gpay-inp' placeholder='99999' />
                        </div>

                    </div>
                </div>
        </div>
        <div className="Eee__pay-alconesy">
            <div className="Eee__pay-aloconesy-svg">
                <img src={alconesylogo} alt="Alconesy" />
            </div>
                <div className="Eee__pay-cloud-container">
                <div className="Eee__pay-cloud-svg">
                    <PhotoUpload/>
                <img  className ="pay__cloud_img" src={cloud} alt="Upload" />
            </div>

                <p className='Eee__pay-inst-p'>Drag and Drop or <a href="#">browse</a></p>
                <p className='pay__cloud-p'>Upload your payment recipt</p>
                <p className='pay__cloud-p-small'>Support formats : JPEG, PNG</p>

                </div>
     


            <div className="Eee__pay-aloconesy-svg">
                <img src={alconesylogo} alt="Alconesy" />
            </div>
        </div>
        <div className="Eee__pay-button">
            <button className='Eee__pay-sbt-button'>
                SUBMIT
            </button>
        </div>






    </div>
      
  )
}

export default Payment
