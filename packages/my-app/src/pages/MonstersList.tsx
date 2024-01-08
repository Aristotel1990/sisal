import MonsterList from "../components/MonsterList";
import Page from "../utils/Page";
import { Box, Container } from "@mui/material";
import { monsterdataData } from "../utils/types";
const MonstersList = () => {
  return (
    <Page>
      <MonsterList  />
    </Page>
  );
};
export default MonstersList;
