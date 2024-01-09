import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../redux/store";
import MonsterCard from "../components/MonsterCard";
import Page from "../utils/Page";
import { getMonsters } from "../redux/slices/data";

const DisplayList = () => {
  const dispatch = useDispatch();
  const { monsters } = useSelector((state) => state.data);
  const [monstersList, setMonstersList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(1);

  function displayFun() {
    return (
      <>
        {monstersList?.map((monster) => (
          <Grid key={monster.id} item xs={12} sm={8} md={3} lg={3} xl={2}>
            <MonsterCard movie={monster} />
          </Grid>
        ))}
      </>
    );
  }

  const job = async () => {
    dispatch(getMonsters(skip, limit));
    setSkip(skip + limit);
  };
  const handleMonsters = () => {
    if (monsters.length) {
      if (monstersList.length >= 10) {
        setMonstersList((prev) => [...prev.slice(1), monsters[0]]);
      } else {
        setMonstersList((prev) => [...prev, monsters[0]]);
      }
    } else {
      if (monstersList.length) {
        setMonstersList((prev) => (prev.length ? [...prev.slice(1)] : []));
      }
    }
  };
  useEffect(() => {
    job();
    const timeout = setTimeout(handleMonsters, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [monstersList]);

  useEffect(() => {
    if (skip === 1) {
      handleMonsters();
    }
  }, [monsters]);
  return (
    <Page>
      <Grid container spacing={2} padding={2}>
        {displayFun()}
      </Grid>
    </Page>
  );
};

export default DisplayList;
