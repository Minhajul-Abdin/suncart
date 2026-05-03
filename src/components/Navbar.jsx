"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const haldleLogOut = async() => {
    await authClient.signOut();
  };
  console.log(user);
  return (
<div className="navbar md:px-10 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/All-Products"}>All Products</Link></li>
      <li><Link href={"/profile"}>Profile</Link></li>

      </ul>
    </div>
    <div>
      <Image src={logo} alt="logo" width={35} height={305}/>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/All-Products"}>All Products</Link></li>
      <li><Link href={"/profile"}>Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {!user && (
      <>
        <Link href={"/signup"}><Button className="btn rounded-full">Sign Up</Button></Link>
        <Link href={"/signin"}><Button className="btn rounded-full">Sign In</Button></Link>
      </>
    )}
    
    {
      user && (<div className="flex gap-3">
        <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <Button onClick={haldleLogOut} variant="danger" >Log Out</Button>
      </div>)
    }
    
    </div>
</div>
  );
};

export default Navbar;
