import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer shoppable-footer">
<div className="container container--type-4">
      {/* Newsletter */}
      <div className="blog-with-sidebar__newsletter">
        {/* Row */}
        <div className="row blog-newsletter">
          <div className="col-lg-5">
            {/* Newsletter Title */}
            <h3 className="blog-newsletter__title">Get <span>10%</span> Discount Now</h3>
            {/* End newsletter title */}
          </div>
          <div className="col-lg-7">
            {/* Newsletter form */}
            <form className="blog-newsletter__form" action="" method="post" target="_blank">
              <input type="email" placeholder="Your email address" className="blog-newsletter__input" />
              <button type="submit" className="blog-newsletter__submit">Subscribe</button>
            </form>
            {/* End newsletter form */}
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End newsletter */}
      {/* Line 1px */}
      <hr />
      {/* End line 1px */}
      {/* Row */}
      <div className="row">
        {/* First column */}
        <div className="col-lg-3 footer__first-column">
          {/* Footer logo */}
          <h5 className="footer__logo">DURIAN</h5>
          {/* End footer logo */}
          {/* Footer address */}
          <ul className="footer__address">
            <li>268 Elizaberth Ave Str, Brooklyn,<br />CA, 90025</li>
            <li>+0082 561 43 34</li>
            <li>support@durian.com</li>
          </ul>
          {/* End footer address */}
          {/* Footer socials */}
          <ul className="footer__socials">
            <li><a href="https://twitter.com" target="_blank"><i className="lnil lnil-twitter"></i></a></li>
            <li><a href="https://facebook.com" target="_blank"><i className="lnil lnil-facebook"></i></a></li>
            <li><a href="https://instagram.com" target="_blank"><i className="lnil lnil-Instagram"></i></a></li>
          </ul>
          {/* End footer socials */}
        </div>
        {/* End first column */}
        {/* Second column */}
        <div className="col-lg-3 footer__second-column">
          {/* Footer heading */}
          <h6 className="footer__heading">Faqs</h6>
          {/* End footer heading */}
          {/* Footer menu */}
          <ul className="footer__menu">
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Gift Card</a>
            </li>
            <li>
              <a href="#">Guest purchase</a>
            </li>
            <li>
              <a href="#">Electronic receipt</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
          {/* End footer menu */}
        </div>
        {/* End second column */}
        {/* Third column */}
        <div className="col-lg-3 footer__third-column">
          {/* Footer heading */}
          <h6 className="footer__heading">Company</h6>
          {/* End footer heading */}
          {/* Footer menu */}
          <ul className="footer__menu">
            <li>
              <a href="#">About Durian</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Our Journals</a>
            </li>
          </ul>
          {/* End footer menu */}
        </div>
        {/* End third column */}
        {/* Fourth column */}
        <div className="col-lg-3 footer__fourth-column blog-widget">
          {/* Footer heading */}
          <h6 className="footer__heading">Instagram</h6>
          {/* End footer heading */}
          {/* Widget content */}
          <div className="blog-widget__content">
            {/* Description */}
            <div className="instagram__description">
              Following or tag us withs <a href="#">#durian</a>, <a href="#">@durian</a>
            </div>
            {/* End description */}
            {/* Instagram feed */}
            <ul className="instagram_feed">
              {/* Feed (You can repeat this block for each Instagram item) */}
              <li>
                <a href="https://instagram.com" target="_blank">
                  <img
                    alt="Image"
                    data-sizes="auto"
                    data-srcset="//durotan-fashion.myshopify.com/cdn/shop/files/instagram_1_678451e9-d92f-4366-b2ca-c7743689f24f_3000x.jpg?v=1655031285 400w, //durotan-fashion.myshopify.com/cdn/shop/files/instagram_1_678451e9-d92f-4366-b2ca-c7743689f24f_3000x.jpg?v=1655031285 800w"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    className="lazyautosizes ls-is-cached lazyloaded"
                    sizes="130px"
                    srcset="//durotan-fashion.myshopify.com/cdn/shop/files/instagram_1_678451e9-d92f-4366-b2ca-c7743689f24f_3000x.jpg?v=1655031285 400w, //durotan-fashion.myshopify.com/cdn/shop/files/instagram_1_678451e9-d92f-4366-b2ca-c7743689f24f_3000x.jpg?v=1655031285 800w"
                  />
                  <i className="lnil lnil-Instagram"></i>
                </a>
              </li>
              {/* End feed */}
              {/* (Repeat the above block for other Instagram items) */}
            </ul>
            {/* End Instagram feed */}
          </div>
          {/* End widget content */}
        </div>
        {/* End fourth column */}
      </div>
      {/* End row */}
      <div className="copyright">
      {/* Row */}
      <div className="row">
        {/* Copyright first column */}
        <div className="col-lg-6">
          © 2022 <span>DUROTAN</span>. All rights reserved
        </div>
        {/* End copyright first column */}
        {/* Copyright payments */}
        <div className="col-lg-6 copyright__payment">
          <span>Accept for</span>
          <img
            src="//durotan-fashion.myshopify.com/cdn/shop/files/payment_ef2dcab9-feab-4a52-80b2-d13053ddefdc_2000x.png?v=1655036319"
            style={{ maxHeight: '23px' }}
            alt="Payment method"
          />
        </div>
        {/* End copyright payments */}
      </div>
      {/* End row */}
    </div>
    </div>
    </footer>
  );
}

export default Footer;
