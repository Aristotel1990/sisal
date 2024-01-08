import PropTypes from "prop-types";

// material
import {
  Box,
  Card,
  Grid,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material";
// utils
//

// ----------------------------------------------------------------------

const CardMediaStyle = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  paddingTop: "calc(100% * 9 / 16)",
  "&:before": {
    top: 0,
    zIndex: 9,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)", // Fix on Mobile
    borderTopLeftRadius: theme.shape.borderRadiusMd,
    borderTopRightRadius: theme.shape.borderRadiusMd,
    backgroundColor: alpha(theme.palette.primary.darker, 0.72),
  },
}));

const CoverImgStyle = styled("img")({
  top: 0,
  zIndex: 8,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default function UserCard({ user, ...other }) {
  const { name, level } = user;

  return (
    <Card {...other}>
      <Typography variant="subtitle1" align="center" sx={{ mt: 6 }}>
        {name}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "text.secondary" }}
      >
        {level}
      </Typography>

      <Divider />
    </Card>
  );
}
