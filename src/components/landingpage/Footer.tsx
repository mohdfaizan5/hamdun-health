import React from "react";

const Footer = () => {
  return (
    <footer className="flex border-t pt-5 items-start flex-col gap-3 py-3">
      <section className="">
        <h3 className="gradient-brand">ZulKifL</h3>
      </section>
      <section className="mb-5">
        <h6 className="text-brand-text">
          Your trusted fulfillment partner in mainland India.
        </h6>
      </section>
      <section>
        <p className="text-xs font-medium">2024 ZulKifL Limited. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
