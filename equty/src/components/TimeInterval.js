import React from 'react';

const TimeInterval = ({ start, end }) => {
  const totalMinutes = Math.abs(end - start);
  return(
    <div className="time-interval">
      <span className="start-time">{start}</span> - <span className="end-time">{end}</span>
    </div>
  );
};

export default TimeInterval