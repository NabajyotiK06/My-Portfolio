import React from 'react';

const SectionDivider = ({ fullWidth = false }) => {
  return (
    <div className={`section-divider ${fullWidth ? 'full-width' : ''}`}>
      <div className="divider-content">
        <div className="crosshair left">+</div>
        <div className="crosshair right">+</div>
      </div>
    </div>
  );
};

export default SectionDivider;
