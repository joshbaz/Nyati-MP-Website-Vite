import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const UserDropdown = ({dropdown}) => {
  return (
    <SubMenuWrap
      className={`absolute right-0 h-max overflow-hidden rounded-lg bg-secondary-900 w-max shadow-lg z-40  ${
        dropdown ? "flex flex-col z-50" : "hidden"
      }`}
    >
      <li className="h-[40px] w-[200px] z-50">
        <NavLink
          role="button"
          to={"user/account"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-6 h-full w-full bg-primary-100 font-[Inter-SemiBold] text-sm capitalize lg:text-base"
              : "flex items-center px-6 h-full w-full border-b-2 border-b-transparent font-[Inter-Regular] text-sm lg:text-base hover:bg-secondary-200 capitalize text-whites-50"
          }
        >
          Account Settings
        </NavLink>
      </li>

      <li className="h-[40px] w-[200px] ">
        <NavLink
          role="button"
          to={"user/account"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-6 h-full w-full bg-primary-100 font-[Inter-SemiBold] text-sm capitalize lg:text-base"
              : "flex items-center px-6 h-full w-full border-b-2 border-b-transparent font-[Inter-Regular] text-sm lg:text-base hover:bg-secondary-200 capitalize text-whites-50"
          }
        >
          Sign out
        </NavLink>
      </li>
    </SubMenuWrap>
  );
}

export default UserDropdown  

const SubMenuWrap = styled.ul`
z-index: 1;
`;