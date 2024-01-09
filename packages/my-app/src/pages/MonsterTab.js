import { useState, useEffect } from "react";
import Page from "../utils/Page";
import CreateMonsters from "../components/CreateMonsters";
import MonsterList from "../components/MonsterList";
import { Tab, Box, Tabs, Stack } from "@mui/material";
import { getSpecies } from "../redux/slices/data";
import { useDispatch } from "../redux/store";

export default function MonsterTab() {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState("Add Monster");
  useEffect(() => {
    dispatch(getSpecies());
  }, [dispatch]);

  const ACCOUNT_TABS = [
    {
      value: "Add Monster",
      component: (
        <Box>
          <CreateMonsters />
        </Box>
      ),
    },
    {
      value: "Monsters",
      component: (
        <Box>
          <MonsterList />
        </Box>
      ),
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Page>
      <Stack spacing={2}>
        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={tab.value}
              value={tab.value}
            />
          ))}
        </Tabs>
        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Stack>
    </Page>
  );
}
