import React from "react";
import "../css/ContactPage.css"; // optional styling

const Contact = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container px-4">
        <div className="row">
          {/* Left Contact Info */}
          <div className="col-lg-5 mb-5">
            <h2 className="mb-3 fw-bold">Let's talk</h2>
            <p>Can we help simplify your kitting and logistics?<br />
              Let's start a conversation - please use the contact form at the right, and we’ll send you an email to start the dialog.
            </p>
            <p className="mt-4"><span role="img" aria-label="phone">📞</span> <strong>(479) 379-4785</strong></p>
            <p><span role="img" aria-label="email">📧</span> <strong>info@skytoadinc.com</strong></p>
            <p><span role="img" aria-label="location">📍</span> 3099 W Jewell Rd<br />Fayetteville, AR 72701</p>
            <p className="text-muted small">
              Skytoad Inc provides Direct to Patient clinical kitting, logistics, and kit personalization for clinical trials and research.
            </p>
          </div>

          {/* Right Contact Form */}
          <div className="col-lg-7">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Country" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Job Title" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Company" />
                </div>
                <div className="col-12">
                  <select className="form-select">
                    <option>Time Frame</option>
                    <option>Immediately</option>
                    <option>Next Month</option>
                    <option>Within 6 Months</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea className="form-control" placeholder="How can we help?" rows="4"></textarea>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <input type="checkbox" className="me-2" /> I'm not a robot
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark w-100">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
