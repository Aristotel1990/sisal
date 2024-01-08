import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/welcome">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Welcome
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/home">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Route 1
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/items">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,

              color: "white",
            }}
          >
            Route 2{" "}
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/all">
          {" "}
          <Typography variant="h8" color="white">
            Route 3{" "}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
