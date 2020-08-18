import React from "react";

const Tab = ({ activeTab, label, setActiveTab }) => {
  const onClick = () => {
    setActiveTab(label);
  };
  let className = "item";

  if (activeTab === label) {
    className = "active item";
  }
  return (
    <a className={className} onClick={onClick}>
      {label}
    </a>
  );
};

export default Tab;
