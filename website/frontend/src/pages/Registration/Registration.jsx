import React,{useState} from 'react';
import './Registration.css';
import logo from '../../assets/alconesy_logo.webp';

const Registration = () => {

  const [selectedDates, setSelectedDates] = useState({
    oct21: false,
    oct22: false
  });

  const handleCheckboxChange = (date) => {
    setSelectedDates((prevSelectedDates) => ({
      ...prevSelectedDates,
      [date]: !prevSelectedDates[date],
    }));
  };

    const [mobileNumber, setMobileNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Regular expression to validate mobile number
    const validateMobileNumber = (number) => {
        const regex = /^[6-9]\d{9}$/; // Example for 10-digit Indian numbers starting with 6-9
        return regex.test(number);
    };

    const handleChange = (e) => {
        setMobileNumber(e.target.value);
        // Clear the error message when user is typing
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateMobileNumber(mobileNumber)) {
            setErrorMessage(''); // Clear error message if the number is valid
            alert('Valid Mobile Number Submitted');
        } else {
            setErrorMessage('Please enter a valid 10-digit mobile number'); // Set error message on invalid number
        }
    };

  return (
    <div className='registration'>
      <div className='reg_whole_container '>
        <div className='reg_form_container'>
          <div className='reg_heading_container'>
            <p className='reg_heading'>REGISTRATION</p>
          </div>
          <div className='reg_description'>
            <p className='reg_desc'>Please enter the valid statement and that could be valid, please check one or more before submit the form.</p>
          </div>
          <form className='reg_form' onBlur={handleSubmit}>
            <div className='reg_form_row reg_form_row_sl'>
              <input type="text" className='reg_form_input_sl' placeholder='First Name'/>
              <input type="text" className='reg_form_input_sl' placeholder='Last Name'/>
            </div>
            <div className='reg_form_row'>
              <input type="email" className='reg_form_input' placeholder='Email'/>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' value={mobileNumber} maxLength={10} onChange={handleChange} placeholder='Phone Number'/>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className='reg_form_row'>
              <select className='reg_form_select' defaultValue="">
                <option value="" disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='College name'/>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='Department name'/>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='Year'/>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='City'/>
            </div>
            <div className='reg_form_row reg_form_date reg_form_row_sl '>
              <div><p className='reg_form_accomadation'>Accommodation date</p></div>
              <div className='checkbox-group'>
                <label className={`checkbox-button ${selectedDates.oct21 ? 'checked' : ''}`}>
                  <input type="checkbox" name="oct21" checked={selectedDates.oct21} onChange={() => handleCheckboxChange('oct21')}/>
                  Oct 21
                </label>
                <label className={`checkbox-button ${selectedDates.oct22 ? 'checked' : ''}`}>
                  <input
                    type="checkbox"
                    name="oct22"
                    checked={selectedDates.oct22}
                    onChange={() => handleCheckboxChange('oct22')}
                  />
                  Oct 22
                </label>
              </div>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='Password'/>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='Confirm password'/>
            </div>
            <div className='reg_form_row'>
              <input type="text" className='reg_form_input' placeholder='Referal code'/>
            </div>
            <div className='reg_terms_container'>
  
            <label class="custom-checkbox">
                <input type="radio" />
                <span class="styled-checkbox" ></span>
                Agree with terms and conditions
              </label>
            </div>
          </form>
          
        </div>
        <div className='reg_form_btn'>
            <button>SUBMIT</button>
          </div>
        <div className='reg_img_container'>
          <img src={logo} alt="Alconesy Logo" />
        </div>
      </div>
    </div>
  )
};
export default Registration;
