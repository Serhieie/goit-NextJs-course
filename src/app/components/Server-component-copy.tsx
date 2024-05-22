import React from 'react';

export interface ServerComponentCopyProps {
  children: React.ReactNode;
}

function ServerComponentCopy({ children }: ServerComponentCopyProps) {
  return (
    <div>
      <span>Server-component</span>
      {children}
    </div>
  );
}

export default ServerComponentCopy;
