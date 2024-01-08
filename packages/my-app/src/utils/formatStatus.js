import { Typography } from "@mui/material";

export function formatStatus(status) {
  switch (status) {
    case "Confirmed":
      return <Typography color="green">Confirmed</Typography>;
    case "Draft":
      return <Typography color="blue">Draft</Typography>;
    case "Reversed":
      return <Typography color="red">Reversed</Typography>;
    case "Completed":
      return <Typography color="darkorange">Completed</Typography>;
    default:
      return <Typography color="blue">none</Typography>;
  }
}
