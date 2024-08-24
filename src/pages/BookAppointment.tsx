

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DatePicker, Input, Button } from 'rsuite'; // Or any date/time picker component of your choice

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (phone.trim() === '') {
      setPhoneError('Phone number is required');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!date) {
      setDateError('Date is required');
      isValid = false;
    } else {
      setDateError('');
    }

    if (!time) {
      setTimeError('Time is required');
      isValid = false;
    } else {
      setTimeError('');
    }

    if (isValid) {
      // Submit form data to your backend or API
      // e.g., axios.post('/api/book-appointment', { name, email, phone, date, time });

      // Redirect or show success message
      navigate('/confirmation'); // Replace with your confirmation page or desired path
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Book an Appointment</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              value={name}
              onChange={(value) => setName(value)}
              placeholder="Enter your name"
              className="mb-4"
            />
            <p className="text-red-500 text-sm">{nameError}</p>
          </div>
          <div>
            <Input
              type="email"
              value={email}
              onChange={(value) => setEmail(value)}
              placeholder="Enter your email"
              className="mb-4"
            />
            <p className="text-red-500 text-sm">{emailError}</p>
          </div>
          <div>
            <Input
              value={phone}
              onChange={(value) => setPhone(value)}
              placeholder="Enter your phone number"
              className="mb-4"
            />
            <p className="text-red-500 text-sm">{phoneError}</p>
          </div>
          <div>
            <DatePicker
              value={date}
              onChange={(value) => setDate(value)}
              placeholder="Select date"
              className="w-full mb-4"
            />
            <p className="text-red-500 text-sm">{dateError}</p>
          </div>
        </div>
        <Button
          appearance="primary"
          onClick={handleSubmit}
          className="mt-6"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default BookAppointment;
