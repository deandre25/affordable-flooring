import React from 'react';
import { useForm } from 'react-hook-form';
import './ConsultationForm.scss';

const ConsultationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <div className="consultation-form-container">
      <h2>Request a Consultation</h2>
      <form className="consultation-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid'
              }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsultationForm;