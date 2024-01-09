// import CustomersList from "./CustomersList";
import { Grid, Stack } from "@mui/material";
import AddMonstersForm from "./AddMonstersForm";
import CreateRandom from "./CreateRandom";

export default function CreateMonsters() {
  return (
    <Grid item xs={12} md={8}>
      <Stack spacing={{ xs: 2, md: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <AddMonstersForm />

          <CreateRandom />
        </Stack>
      </Stack>
    </Grid>
  );
}
