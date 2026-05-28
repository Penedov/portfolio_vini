"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ElectricMonsterBackground() {
  const pathname = usePathname();

  // Overflow management per page
  useEffect(() => {
    const handleOverflow = () => {
      if (pathname === "/" && window.innerHeight >= 850 && window.innerWidth >= 1200) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
        document.documentElement.style.overflow = "unset";
      }
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);

    return () => {
      window.removeEventListener("resize", handleOverflow);
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [pathname]);

  return null;
}
