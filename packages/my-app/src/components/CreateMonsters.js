// import CustomersList from "./CustomersList";
import { Grid, Stack } from "@mui/material";
import AddMonstersForm from "./AddMonstersForm";
import CreateRandom from "./CreateRandom";
import { useEffect } from "react";
import { getSpecies } from "../redux/slices/data";
import { useDispatch, useSelector } from "../redux/store";
export default function CreateMonsters() {
  const dispatch = useDispatch();
  // const { level, species } = useSelector((state) => state.data);
  // console.log(
  //   "🚀 ~ file: AddMonstersForm.tsx:33 ~ AddMonstersForm ~ species:",
  //   species
  // );

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
