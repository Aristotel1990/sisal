import { Stack, Grid, Pagination, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import MonsterCard from "./MonsterCard";
import { useDispatch, useSelector } from "../redux/store";
import { getMonsters } from "../redux/slices/data";

const MonsterList = () => {
  const dispatch = useDispatch();
  const {
    monsters: monstersList,
    count,
    refresh,
  } = useSelector((state) => state.data);
  let [page, setPage] = useState(1);
  let [skip, setSkip] = useState(0);
  let [limit, setLimit] = useState(10);

  const handleChange = async (e, p) => {
    setSkip((p - 1) * limit);
    setPage(p);
  };

  useEffect(() => {
    dispatch(getMonsters(skip, limit));
  }, []);

  useEffect(() => {
    dispatch(getMonsters(skip, limit));
  }, [page, limit, refresh]);

  return (
    <Stack>
      <Grid container spacing={2} padding={2}>
        {monstersList?.map((user) => (
          <Grid key={user.id} item xs={12} sm={8} md={3} lg={3} xl={2}>
            <MonsterCard movie={user} />
          </Grid>
        ))}
      </Grid>
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 3, sm: 2, alignSelf: "center" }}
        justifyContent="center"
      >
        <Pagination
          count={Math.ceil(count / limit)}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{ paddingY: 2 }}
          perPa
        />
        <TextField
          label="Number per Page"
          type="number"
          size="small"
          value={limit}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            const limit = event.target.value;
            setLimit(limit);
            setSkip((page - 1) * limit);
          }}
          sx={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            width: 150,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MonsterList;
