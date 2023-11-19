import React, { useState } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import './ProfileUserUpdate.css';

function ProfilePage() {
  // State variables to store user information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, like sending data to the server or performing validation
    // For simplicity, let's just log the user information
    console.log('Submitted:', { firstName, lastName, email, password });
  };

  return (
    <div>
      <div className="p-2 header">
        <Header />
      </div>
 
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          {/* Page title */}
          <div className="my-5">
            <h3>Profile</h3>
            <hr />
          </div>
          {/* Form START */}
          <form className="file-upload">
            <div className="row mb-5 gx-5">
              {/* Contact detail */}
              <div className="col-xxl-8 mb-5 mb-xxl-0">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0">Contact detail</h4>
                    {/* Full Name */}
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-control" placeholder="" aria-label="First name" />
                    </div>
                    {/* Email */}
                    <div className="col-md-6">
                      <label for="inputEmail4" className="form-label">Email *</label>
                      <input type="email" className="form-control" id="inputEmail4"  />
                    </div>
                    {/* Phone number */}
                    <div className="col-md-6">
                      <label className="form-label">Phone number *</label>
                      <input type="text" className="form-control" placeholder="" aria-label="Phone number"  />
                    </div>
                  </div> {/* Row END */}
                </div>
              </div>
              {/* Upload profile */}
              <div className="col-xxl-4">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                    <div className="text-center">
                      {/* Image upload */}
                      <div className="square position-relative display-2 mb-3">
                        <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                      </div>
                      {/* Button */}
                      <input type="file" id="customFile" name="file" hidden="" />
                      <label className="btn btn-success-soft btn-block" for="customFile">Upload</label>
                      <button type="button" className="btn btn-danger-soft">Remove</button>
                      {/* Content */}
                      <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* Row END */}
            {/* button */}
            <div className="gap-3 d-md-flex justify-content-md-end text-center">
              <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
              <button type="button" className="btn btn-primary btn-lg">Update profile</button>
            </div>
          </form> {/* Form END */}
        </div>
      </div>
    </div>
    <div className="p-2 footer d-flex align-items-center justify-content-center">
        <Footer />
      </div>
    </div>
  );
}
export default ProfilePage;
