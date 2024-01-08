import { forwardRef, ReactNode } from "react";
// material
import { Box } from "@mui/material";
// utils

// ----------------------------------------------------------------------
interface ChildrenProps {
  children: ReactNode;
}

const Page = forwardRef(({ children  }:ChildrenProps) => {
  return (
    <Box sx={{marginLeft:9,boxShadow:4 }} >
      {children}
    </Box>
  );
});



export default Page;
