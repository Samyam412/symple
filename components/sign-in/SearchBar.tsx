"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../styles/sign-in/search-bar.css"

const SearchBar = () => {
  const [email, setEmail] = useState<string>("");
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  //to set the placeholder from the url
  useEffect(() => {
    setEmail(searchParams?.get("email") ?? "");
  }, [searchParams]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    params.set("email", value);
    router.replace(`${path}?${params.toString()}`);
  };

  return (
    <div className="email-input-container">
      <div className="search-icon ">@</div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className="email-input"
      />
      <hr className="underline" />
    </div>
  );
};

export default SearchBar;
