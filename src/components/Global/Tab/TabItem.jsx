import React, { useState } from "react";
import classNames from "classnames";
import {
  tabItem,
  tabItemActive,
} from "./TabItem.module.sass";

const TabItem = ({ children, ...props }) => {
  const { active, updateActiveIndex, index } = props;

  const TabItemClasses = classNames(tabItem, {
    [`${tabItemActive}`]: active,
  });

  return (
    <span className={TabItemClasses} onClick={() => updateActiveIndex(index)}>
      {children}
    </span>
  );
};

export default TabItem;
