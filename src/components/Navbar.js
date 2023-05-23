import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ConnectWallet from "../utils/ConnectWallet";

function Navbar() {
const location = useLocation();


    return (
      <div className="header fixed top-0 left-0 w-full bg-transparent">
        <nav className="w-full flex items-center justify-between py-3 bg-transparent text-white pr-5">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <div className='inline-block font-bold text-xl ml-2'>
              JJAX
            </div>
            </Link>
          </li>
          <li className='w-2/6'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              {location.pathname === "/" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/">NFT List</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/">NFT List</Link>
              </li>              
              }
              {location.pathname === "/UploadList" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/UploadList">Upload fixed price NFT</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/UploadList">Upload Fixed Price NFT</Link>
              </li>              
              }              
              {location.pathname === "/UploadAction" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/UploadAction">Upload NFT Auction</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/UploadAction">Upload NFT Auction</Link>
              </li>              
              }  
            
              <li>
                <ConnectWallet/>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        
      </div>
    );
  }

  export default Navbar;