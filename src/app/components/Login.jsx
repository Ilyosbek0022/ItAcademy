"use client";

import { useEffect, useRef, useState } from "react";
import "./ui/Login.css";

export default function LoginBackground() {

  const bgRef = useRef(null);
 

  

  return (

    <section id="background" className="tile" ref={bgRef}>

      {/* FLOATING SHAPES */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="moving-grid"></div>

      

   

      

      <div className="login-container">

        <div className="login-brand">

          <div className="brand-content">

            <h1 className="brand-title">
              Welcome<br />
              <span>Back</span>
            </h1>

            <p className="brand-text">
             Ruyhatdan uting
            </p>

            <div className="brand-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

          </div>

        </div>

        <div className="login-form-wrap">
  <div className="window-bar rounded-2xl mb-7">
          <div className="win-dot r"></div>
          <div className="win-dot y"></div>
          <div className="win-dot g"></div>
          <span className="win-title">IT ACADEMY</span>
        </div>
          <div className="form-header">
            <h2>Login</h2>  <p>yoki <a href="#">registratsiya</a></p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Ruyhatdan utdiz");
            }}
          >

            <div className="input-field">

              <input
                type="Name"
                required
              />

              <label>Name</label>
              

            </div>
              <div className="input-field">

              <input
                type="number"
                required
              />

              <label>phone</label>
              

            </div>

            <div className="input-field">

              <input
                type="email"
                required
              />

              <label>E-Mail</label>
              

            </div>
                      <div className="form-group">
            <label>Message</label>
            <textarea id="fmessage" placeholder="Which course are you interested in? Any questions?"></textarea>
          </div>


            <div className="form-extras">

              <label className="checkbox">

                <input type="checkbox" defaultChecked />

                <span className="checkmark"></span>

                Maxfiylik tizimiga rozi buling

              </label>
<br />
              <a href="#" className="forgot-link">
                Parol esdan chiqdi?
              </a>

            </div>

            <button className="login-btn">
              Send
            </button>

          </form>

          <div className="social-login">

            <p className="social-text">
            
            </p>

            <div className="social-buttons">

              <button className="social-btn">
                Google
              </button>

              <button className="social-btn">
                Apple
              </button>

            </div>

          </div>

        </div>

      </div>

    

    </section>
  );
}