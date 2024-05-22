import React from 'react';

export interface ClientComponentProps {
  children: React.ReactNode;
}

function ClientComponent({ children }: ClientComponentProps) {
  return (
    <div>
      <span>Client-component</span>
      {children}
    </div>
  );
}

export default ClientComponent;
