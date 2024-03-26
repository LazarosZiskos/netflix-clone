"use client";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //clean up function to remove to event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled && "bg-black-1"}`}>
      <Link href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo-image"
          className="logo"
        />
      </Link>

      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My list
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Search movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled={search === ""}>
            <Search
              className="icon"
              onClick={() => router.push(`/search/${search}`)}
            />
          </button>
        </div>
        <img
          src="/assets/profile_icon.jpg"
          alt="profile-image"
          className="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My list</Link>
            <a href="/logout">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
