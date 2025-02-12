import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Watch Anywhere, Cancel Anytime</h1>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="email" placeholder="Enter your email" />
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Banner;
