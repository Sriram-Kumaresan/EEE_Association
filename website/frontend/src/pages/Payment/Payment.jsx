import React, { useState, useRef } from 'react';
import './Payment.css';
import payment_heading from '../../asset/payment.svg';
import bank_icon from '../../asset/Vector.svg';
import gpay from '../../asset/Gpay.svg';
import qr from '../../asset/Qr.svg';
import alconesylogo from '../../asset/pay_logo.svg';
import cloud from '../../asset/cloud.svg';
import { PhotoUpload } from '../../widgets';

const Payment = () => {
  const [formValues, setFormValues] = useState({
    accountNumber: '',
    ifcCode: '',
    branchName: '',
    generalRegistration: false,
    workshop: false,
    food: false,
    totalCost: 0,
    paymentMode: ''
  });
  
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const costMapping = {
    generalRegistration: 500,
    workshop: 300,
    food: 700,
  };

  // Handle Checkbox Selection
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: checked,
      totalCost: checked 
        ? prevState.totalCost + costMapping[name]
        : prevState.totalCost - costMapping[name]
    }));
  };

  // File Upload Handling
  const handleBrowseClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  };

  const paymentInstructions = [
    'Payment must be completed via the designated payment portal.',
    'Ensure payment is made in full before the registration deadline.',
    'Use the symposium reference number when making payments.',
    'Accepted payment methods include credit card, debit card, UPI.',
    'Payment confirmation will be sent via email within 24 hours.',
    'No refunds will be issued after the payment is processed.'
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key] && typeof formValues[key] !== 'boolean') {
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
      console.log('Form submitted successfully with values:', formValues);
    }
  };

  // Render payment instructions
  const renderInstructions = () => {
    return paymentInstructions.map((instruction, index) => (
      <p key={index} className="Eee__pay-inst-p">{`${index + 1}. ${instruction}`}</p>
    ));
  };

  return (
    <div className="Eee__pay-main">
      <div className="Eee__pay-heading">
        <img className="pay_main" src={payment_heading} alt="Payment" />
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
            <div className="Eee__pay-inst-form">
              <p className="Eee__pay-inst-form-p">Account Number: {formValues.accountNumber}</p>
              <p className="Eee__pay-inst-form-p">IFC Code: {formValues.ifcCode}</p>
              <p className="Eee__pay-inst-form-p">Branch Name: {formValues.branchName}</p>

            </div>
          </div>
        </div>

        <div className="Eee__pay-det">
          <div className="Eee__pay-det-hd">
            <p>PAYMENT DETAILS</p>
          </div>
          <p className="Eee__pay-det-cont Eee__pay-inst-p">Multiple selection allowed</p>

          <div className="Eee__pay-select-main">
            <div className="Eee__pay-checkbox-full">
            <label
  className={`Eee__pay-checkbox ${formValues.food ? 'checked' : ''}`}
>
  <input 
    type="checkbox"
    name="food"
    checked={formValues.food}
    onChange={handleCheckboxChange}
  />
  Food
</label>
              <label className={`Eee__pay-checkbox ${formValues.workshop ? 'checked' :''}`}>
                <input 
                  type="checkbox"
                  name="workshop"
                  checked={formValues.workshop}
                  onChange={handleCheckboxChange}
                />
                Workshop
              </label>
            </div>

            <label className={`Eee__pay-checkbox pay__full-checkbox ${formValues.generalRegistration ? 'checked':''}`}>
              <input 
                type="checkbox"
                name="generalRegistration"
                checked={formValues.generalRegistration}
                onChange={handleCheckboxChange}
              />
                General Registration
            </label>

            <label className="full-checkbox Eee__pay-checkbox">
              Total: ₹{formValues.totalCost}
            </label>
          </div>

          <div className="Eee__pay-icon-holder">
            <div className="Eee__pay-det-gpay">
              <img className="Eee__gpay-svg" src={gpay} alt="Gpay" />
            </div>
          </div>

          <div className="Eee__gpay_qr_container">
            <div className="Eee__gpay-svg">
              <img src={qr} alt="Gpay QR" />
            </div>
            <div className="Eee__gpay-aside-inp">
              <p className="Eee__gpay-p">9999999999</p>
              <p className="Eee__gpay-p">9999999999</p>
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

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />

          <p className="Eee__pay-drag-p">Drag and Drop or 
            <a className="Eee__pay-browse" href="/" onClick={handleBrowseClick}> browse</a>
          </p>
          <p className="pay__cloud-p">Upload your payment receipt</p>
          <p className="pay__cloud-p-small">Supported formats: JPEG, PNG</p>
        </div>
        <div className="Eee__pay-aloconesy-svg">
          <img src={alconesylogo} alt="Alconesy" />
        </div>
      </div>

      <div className="Eee__pay__transistion-holder">
      <input className="Eee__pay-inst-inp"  type="text" required  placeholder='Transistion ID'  />
      </div>

      <div className="Eee__pay-button">
        <button className="Eee__pay-sbt-button" type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Payment;
