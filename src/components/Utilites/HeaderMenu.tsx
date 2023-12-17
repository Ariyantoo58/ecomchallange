import React from "react";

interface HeaderMenuProps {
  title: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
