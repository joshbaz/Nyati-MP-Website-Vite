import React, { ElementType, ReactNode } from "react";
import Buttons, { buttonStyles } from "../Buttons/Buttons";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "../../5-Store/Contexts/SidebarContext";
import Logo from "../../1-Assets/logos/Logo.svg";
import { Typography } from "@mui/material";

{
  /** small sidebar properties --- starts here */
}
type SmallSidebarItemProps = {
  Icon: string;
  title: string;
  url: string;
};

{
  /** small sidebar - items  */
}
const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center text-whites-500 rounded-lg gap-1"
      )}
    >
      <span className={`${Icon} w-6 h-6 text-whites-200`} />
      <div className="text-xs">{title}</div>
    </a>
  );
};

{
  /** small sidebar properties --- ends here */
}

{
  /** large sidebar properties --- starts here */
}
type LargeSidebarSectionProps = {
    children: ReactNode;
    title?: string;
    visibleItemCount?: number;
}

const LargeSidebarSection = ({children, title, visibleItemCount = Number.POSITIVE_INFINITY}: LargeSidebarSectionProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const childrenArray = React.Children.toArray(children).flat();

    return (
      <div className="flex flex-col gap-3 flex-1">
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {childrenArray}
      </div>
    );
}

type LargeSidebarItemProps = {
  Icon: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

const LargeSidebarItem = ({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 text-whites-200 hover:text-primary-500 hover:font-bold hover:bg-tertiary-40 ${
          isActive
            ? "font-bold bg-tertiary-40 hover:bg-tertiary-40 text-primary-500"
            : undefined
        }`
      )}
    >
      <span className={`${Icon} w-6 h-6  hover:text-primary-500 `} />
      <div className="whitespace-nowrap  overflow-hidden text-ellipsis hover:text-primary-500 ">
        {title}
      </div>
    </a>
  );
};
{
  /** large sidebar properties --- ends here */
}

const Sidebar = () => {
    const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

    return (
      <>
        <aside
          className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-0 bg-secondary-800 h-full ${
            isLargeOpen ? "lg:hidden" : "lg:flex"
          }`}
        >
          <SmallSidebarItem
            Icon={"icon-[solar--home-linear]"}
            title={"Account"}
            url={"/settings/account"}
          />

          <SmallSidebarItem
            Icon={"icon-[solar--chart-2-linear]"}
            title={"Activity"}
            url={"/settings/activity"}
          />
        </aside>
        {isSmallOpen && (
          <div
            onClick={close}
            className="lg:hidden fixed inset-0 z-[999] bg-secondary-600 opacity-50"
          />
        )}

        <div className="h-full bg-secondary-800">
          <aside
            className={`w-56 lg:sticky absolute  top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 bg-transparent h-max  ${
              isLargeOpen ? "lg:flex" : "lg:hidden"
            } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
          >
            <div className=" pt-2 pb-4 px-2 sticky top-0 bg-white">
              {/**  <PageHeaderFirstSection hidden={false} />*/}

              {/***
               *
               * <img src={Logo} alt="" />
               *
               */}

              <div className="flex flex-row text-whites-40 items-center space-x-2 h-10 select-none hover:text-primary-500">
                <span className="icon-[solar--arrow-left-linear] h-6 w-6"></span>
                <Typography className="whitespace-nowrap  overflow-hidden text-ellipsis  font-[Inter-Regular]">
                  Back to Nyati Films
                </Typography>
              </div>
            </div>
            <LargeSidebarSection>
              <LargeSidebarItem
                isActive
                Icon={"icon-[solar--home-linear]"}
                title={"Your Account"}
                url={"/"}
              />
              <LargeSidebarItem
                Icon={"icon-[solar--chart-2-linear]"}
                title={"Viewing Activity"}
                url={"/settings/activity"}
                isActive
              />
            </LargeSidebarSection>
          </aside>
        </div>
      </>
    );
};

export default Sidebar;
