import React, { Component } from "react";
import "./styles.css";

function FooterPanel() {
  return (
    <div className="footer-container">
      <div className="footer-container-2">
        <div className="contacts-container">
          <div className="contacts-title">تواصل معنا</div>
          <div className="contact">
            <div className="contact-name">سليمان بن سعيد العلوي</div>
            <div className="contact-number">99876233</div>
          </div>
          <div className="contact">
            <div className="contact-name">بدر بن راشد العلوي</div>
            <div className="contact-number">99338388</div>
          </div>
          <div className="contact">
            <div className="contact-name">علي بن مرزوق العلوي</div>
            <div className="contact-number">99474743</div>
          </div>
        </div>
        <div className="footer-title">سد وادي الصفري</div>
      </div>
      <div className="copyrights">جميع الحقوق محفوظة لمشروع سد وادي الصفري</div>
    </div>
  );
}

export default FooterPanel;
