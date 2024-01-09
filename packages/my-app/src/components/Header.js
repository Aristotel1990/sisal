import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/create">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Create Monsters
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/list">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Monsters list
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/error">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,

              color: "white",
            }}
          >
            Display by time{" "}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
