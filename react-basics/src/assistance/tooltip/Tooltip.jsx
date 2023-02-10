import React, { useState } from "react";

const Tooltip = ({ href, className, tooltipClassName, anchorText, value }) => {
  const [isVisible, setVisibility] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setVisibility(true);
    }, 350);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setVisibility(false);
    }, 0);
  };

  return (
    <div>
      <a href={href} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {anchorText}
      </a>
      {isVisible && <div className={tooltipClassName}>{value}</div>}
    </div>
  );
};

export default Tooltip;
