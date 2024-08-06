import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex border-t border-brand-text pt-5 items-start md:flex-row md:justify-between flex-col gap-9 py-3 mt-14 md:mt-auto px-5">
      <section>
        <section className="">
          <h3 className="gradient-brand">ZulKifL</h3>
        </section>
        <section className="mb-5">
          <h6 className="text-brand-text">
            Your trusted fulfillment partner in mainland India.
          </h6>
        </section>
        <section>
          <p className="text-xs font-medium">
            2024 ZulKifL Limited. All rights reserved.
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <Link href={"/privacy-policy"} className="underline text-sm">
          Privacy Policy
        </Link>
        <p className="-mb-2 text-sm">
          Email Us
          <ArrowDownIcon className="inline-block" />
        </p>
        <Link
          href={"mailto:zulkifl-health-products@gmail.com"}
          className="underline  text-sm"
        >
          {/* <ArrowRightIcon className="inline-block" />{" "} */}
          zulkifl-health-products@gmail.com
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
