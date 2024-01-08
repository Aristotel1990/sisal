import { format, getTime, formatDistanceToNow } from "date-fns";
import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), "dd MMMM yyyy");
}
