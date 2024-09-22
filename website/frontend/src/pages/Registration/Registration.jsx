import React, { useState } from 'react';
import './Registration.css';
import logo from '../../assets/alconesy_logo.webp';

const Registration = () => {
  const [selectedDates, setSelectedDates] = useState({
    oct21: false,
    oct22: false,
  });

  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Validate Indian mobile number
  const validateMobileNumber = (number) => {
    const regex = /^[6-9]\d{9}$/; // For Indian mobile numbers
    return regex.test(number);
  };

  const handlePassword = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
  
    if (confirmPasswordInput.length === 0) {
      // Clear error if the field is empty
      setPasswordErrorMessage('');
      return;
    }
  
    if (confirmPasswordInput !== password.slice(0, confirmPasswordInput.length)) {
      setPasswordErrorMessage('Passwords do not match');
    } else {
      setPasswordErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateMobileNumber(mobileNumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordErrorMessage('Passwords do not match');
      return;
    }

    // Print the form data in dictionary format
    const formData = {
      firstName,
      lastName,
      email,
      mobileNumber,
      gender,
      collegeName,
      departmentName,
      year,
      city,
      accommodationDates: {
        oct21: selectedDates.oct21 ? 1 : 0,
        oct22: selectedDates.oct22 ? 1 : 0,
      },
      password,
      confirmPassword,
      referralCode,
    };

    console.log("Form Data: ", formData);

    alert('Form submitted successfully!');

    // Reset all form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobileNumber('');
    setGender('');
    setCollegeName('');
    setDepartmentName('');
    setYear('');
    setCity('');
    setPassword('');
    setConfirmPassword('');
    setReferralCode('');
    setTermsAgreed(false);
    setSelectedDates({
      oct21: false,
      oct22: false,
    });
    setErrorMessage('');
    setPasswordErrorMessage('');
  };

  return (
    <div className='registration'>
      <div className='reg_whole_container'>
        <div className='reg_form_container'>
          <div className='reg_heading_container'>
            <p className='reg_heading'>REGISTRATION</p>
          </div>
          <div className='reg_description'>
            <p className='reg_desc'>
              Please enter valid information and ensure the form is filled out
              correctly before submission.
            </p>
          </div>
          <form className='reg_form' onSubmit={handleSubmit}>
            <div className='reg_form_row reg_form_row_sl'>
              <input
                type="text"
                className='reg_form_input_sl'
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name' required
              />
              <input
                type="text"
                className='reg_form_input_sl'
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name' required
              />
            </div>
            <div className='reg_form_row'>
              <input
                type="email"
                className='reg_form_input'
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' required
              />
            </div>
            <div className='reg_form_row'>
              <input
                type="text"
                maxLength={10}
                className='reg_form_input'
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                  setErrorMessage('');
                }}
                placeholder='Phone Number' required
              />
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div className='reg_form_row'>
              <select
                className='reg_form_select'
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className='reg_form_row'>
              <input
                type="text"
                className='reg_form_input'
                name="collegeName"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder='College Name' required
              />
            </div>
            <div className='reg_form_row'>
              <input
                type="text"
                className='reg_form_input'
                name="departmentName"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                placeholder='Department Name' required
              />
            </div>
            <div className='reg_form_row'>
              <select
                className='reg_form_select'
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="" disabled>
                  Year
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className='reg_form_row'>
              <input
                type="text"
                className='reg_form_input'
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='City' required
              />
            </div>
            <div className='reg_form_row reg_form_date reg_form_row_sl'>
              <div>
                <p className='reg_form_accomadation'>Accommodation date</p>
              </div>
              <div className='checkbox-group'>
                <label
                  className={`checkbox-button ${
                    selectedDates.oct21 ? 'checked' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    name="oct21"
                    checked={selectedDates.oct21}
                    onChange={() => setSelectedDates({ ...selectedDates, oct21: !selectedDates.oct21 })}
                  />
                  Oct 21
                </label>
                <label
                  className={`checkbox-button ${
                    selectedDates.oct22 ? 'checked' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    name="oct22"
                    checked={selectedDates.oct22}
                    onChange={() => setSelectedDates({ ...selectedDates, oct22: !selectedDates.oct22 })}
                  />
                  Oct 22
                </label>
              </div>
            </div>
            <div className='reg_form_row'>
              <input
                type="password"
                className='reg_form_input'
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' required
              />
            </div>
            <div className='reg_form_row'>
              <input
                type="password"
                className='reg_form_input'
                name="confirmPassword"
                value={confirmPassword}
                onChange={handlePassword}
                placeholder='Confirm Password' required
              />
              {passwordErrorMessage && (
                <p style={{ color: 'red' }}>{passwordErrorMessage}</p>
              )}
            </div>
            <div className='reg_form_row'>
              <input
                type="text"
                className='reg_form_input'
                name="referralCode"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder='Referral Code'
              />
            </div>
            <div className='reg_terms_container'>
              <label className="custom-checkbox">
                <input
                  type="radio"
                  name="termsAgreed"
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)} required
                />
                <span className="styled-checkbox"></span>
                Agree with terms and conditions
              </label>
            </div>
            <div className='reg_form_btn'>
              <button type="submit">ENROLL</button>
            </div>
          </form>
        </div>
        <div className='reg_img_container'>
          <img src={logo} alt="Alconesy Logo" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
