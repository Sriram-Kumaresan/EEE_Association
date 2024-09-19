import React, { useState } from 'react';
import "./Payment.css";

import payment_heading from "../../asset/payment.svg";
import bank_icon from "../../asset/Vector.svg";
import gpay from "../../asset/Gpay.svg";
import qr from "../../asset/Qr.svg";
import alconesylogo from "../../asset/pay_logo.svg";
import cloud from "../../asset/cloud.svg";
import { PhotoUpload } from '../../widgets';

const Payment = () => {
  const [formValues, setFormValues] = useState({
    accountNumber: '',
    ifcCode: '',
    branchName: '',
    generalRegistration: '',
    workshop: '',
    registrationWithFood: '',
    totalCost: '',
    paymentMode: ''
  });

  const [errors, setErrors] = useState({});
  
  const paymentInstructions = [
    "Payment must be completed via the designated payment portal.",
    "Ensure payment is made in full before the registration deadline.",
    "Use the symposium reference number when making payments.",
    "Accepted payment methods include credit card, debit card.",
    "Payment confirmation will be sent via email within 24 hours.",
    "No refunds will be issued after the payment is processed."
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validate form fields
    Object.keys(formValues).forEach(key => {
      if (!formValues[key] && key !== 'paymentMode') {
        newErrors[key] = 'This field is required';
      }
    });
    if (!formValues.paymentMode) {
      newErrors.paymentMode = 'Select a payment method';
    }
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle successful form submission
      console.log('Form submitted successfully');
    }
  };

  const renderInstructions = () => {
    return paymentInstructions.map((instruction, index) => (
      <p key={index} className="Eee__pay-inst-p">{`${index + 1}. ${instruction}`}</p>
    ));
  };

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
            {renderInstructions()}
            <a className="Eee__pay-inst-p Eee__pay-info" href="#">Click here for more information</a>
            <div className="Eee__pay-icon-holder">
              <div className="Eee__pay-bank-icon">
                <img src={bank_icon} alt="Bank Icon" />
              </div>
            </div>
            <form className="Eee__pay-inst-form" onSubmit={handleSubmit}>
              <input
                className={`Eee__pay-inst-form-inp ${errors.accountNumber ? 'error' : ''}`}
                type="text"
                name="accountNumber"
                placeholder="Account Number:"
                value={formValues.accountNumber}
                onChange={handleChange}
              />
              {errors.accountNumber && <p className="error-text">{errors.accountNumber}</p>}
              <input
                className={`Eee__pay-inst-form-inp ${errors.ifcCode ? 'error' : ''}`}
                type="text"
                name="ifcCode"
                placeholder="IFC Code:"
                value={formValues.ifcCode}
                onChange={handleChange}
              />
              {errors.ifcCode && <p className="error-text">{errors.ifcCode}</p>}
              <input
                className={`Eee__pay-inst-form-inp ${errors.branchName ? 'error' : ''}`}
                type="text"
                name="branchName"
                placeholder="Branch Name"
                value={formValues.branchName}
                onChange={handleChange}
              />
              {errors.branchName && <p className="error-text">{errors.branchName}</p>}
            </form>
          </div>
        </div>


        <div className="Eee__pay-det">
          <div className="Eee__pay-det-hd">
            <p>PAYMENT DETAILS</p>
          </div>
          <p className="Eee__pay-det-cont Eee__pay-inst-p">Multiple selection provided</p>
          <form className="Eee__pay-det-form" onSubmit={handleSubmit}>
            <input
              className={`Eee__pay-det-inp-half ${errors.generalRegistration ? 'error' : ''}`}
              type="text"
              name="generalRegistration"
              placeholder="General Registration"
              value={formValues.generalRegistration}
              onChange={handleChange}
            />
            {errors.generalRegistration && <p className="error-text">{errors.generalRegistration}</p>}
            <input
              className={`Eee__pay-det-inp-half ${errors.workshop ? 'error' : ''}`}
              type="text"
              name="workshop"
              placeholder="Workshop"
              value={formValues.workshop}
              onChange={handleChange}
            />
            {errors.workshop && <p className="error-text">{errors.workshop}</p>}
            <input
              className={`Eee__pay-inst-form-inp ${errors.registrationWithFood ? 'error' : ''}`}
              type="text"
              name="registrationWithFood"
              placeholder="General Registration + Food"
              value={formValues.registrationWithFood}
              onChange={handleChange}
            />
            {errors.registrationWithFood && <p className="error-text">{errors.registrationWithFood}</p>}
            <input
              className={`Eee__pay-inst-form-inp ${errors.totalCost ? 'error' : ''}`}
              type="text"
              name="totalCost"
              placeholder="Total cost:"
              value={formValues.totalCost}
              onChange={handleChange}
            />
            {errors.totalCost && <p className="error-text">{errors.totalCost}</p>}

            <div className={`Eee__pay-radio-container ${errors.paymentMode ? 'error' : ''}`}>
              <label className='Eee__pay-terms' >
                <input className='Eee__pay-radio'
                  type="radio"
                  name="paymentMode"
                  value="card"
                  checked={formValues.paymentMode === 'card'}
                  onChange={handleChange}
                />
                  accept term & condition
              </label>
              {errors.paymentMode && <p className="error-text">{errors.paymentMode}</p>}
            </div>
          </form>

          <div className="Eee__pay-icon-holder">
            <div className="Eee__pay-det-gpay">
              <img src={gpay} alt="Gpay" />
            </div>
          </div>

          <div className="Eee__gpay_qr_container">
            <div className="Eee__gpay-svg">
              <img src={qr} alt="Gpay QR" />
            </div>
            <div className="Eee__gpay-aside-inp">
              <input className="pay__gpay-inp" type="text" placeholder="999999" />
              <input className="pay__gpay-inp" type="text" placeholder="99999" />
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
            <PhotoUpload />
            <img className="pay__cloud_img" src={cloud} alt="Upload" />
          </div>
          <p className="Eee__pay-inst-p">Drag and Drop or <a className="Eee__pay-browse" href="#">browse</a></p>
          <p className="pay__cloud-p">Upload your payment receipt</p>
          <p className="pay__cloud-p-small">Support formats: JPEG, PNG</p>
        </div>
        <div className="Eee__pay-aloconesy-svg">
          <img src={alconesylogo} alt="Alconesy" />
        </div>
      </div>


      <div className="Eee__pay-button">
        <button className="Eee__pay-sbt-button" type="submit" onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Payment;