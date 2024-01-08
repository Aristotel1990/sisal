import { Typography, Stack } from "@mui/material";

import Page from "../utils/Page";

// ----------------------------------------------------------------------

export default function Welcome() {

  return (
    <Page>
      <Stack
        direction="column"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4">Welcome to the Sisal challenge</Typography>
        <Typography variant="h4">Do you want to create a Monster? </Typography>

        <br />
        <br />
      </Stack>
    </Page>
  );
}
