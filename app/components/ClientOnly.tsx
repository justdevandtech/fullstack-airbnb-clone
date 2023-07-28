"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <Loading loading />;
  }

  return <>{children}</>;
};

export default ClientOnly;
