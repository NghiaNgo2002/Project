import React from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

function Password() {
  return (
    <div>
      <div className="p-2 header">
        <Header />
      </div>

      <div className="my-5 d-flex justify-content-center"> {/* Added my-5 for margin */}
        <div className="col-xxl-6">
          <div className="bg-secondary-soft px-4 py-5 rounded">
            <div className="row g-3">
              <h4 className="my-4">Change Password</h4>
              <div className="col-md-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
                <input type="password" className="form-control" id="exampleInputPassword2" />
              </div>
              <div className="col-md-12">
                <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
                <input type="password" className="form-control" id="exampleInputPassword3" />
              </div>
              <div className="gap-3 d-md-flex justify-content-md-center text-center my-5">
                <button type="button" className="btn btn-danger btn-lg">Confirm Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 footer d-flex align-items-center justify-content-center">
        <Footer />
      </div>
    </div>
  );
}

export default Password;
