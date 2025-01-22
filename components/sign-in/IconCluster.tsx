import React from "react";
import GoogleIcon from "./_icons/GoogleIcon";
import AppleIcon from "./_icons/AppleIcon";
import FacebookIcon from "./_icons/FacebookIcon";
import Link from "next/link";

const IconCluster = () => {
  return (
    <div className="icon-cluster">
      <Link href="https://www.google.com/" className="icon-cluster-icon">
        <GoogleIcon />
      </Link>
      <Link href="https://www.apple.com" className="icon-cluster-icon">
        <AppleIcon />
      </Link>
      <Link href="https://www.facebook.com" className="icon-cluster-icon">
        <FacebookIcon />
      </Link>
    </div>
  );
};

export default IconCluster;
