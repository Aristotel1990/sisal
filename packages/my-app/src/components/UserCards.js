import { useEffect } from "react";
// material
import { Container, Grid, Skeleton } from "@material-ui/core";
// redux
// routes
// hooks
// components
import { useSelector, useDispatch } from "../redux/store";
import Page from "../utils/Page";

// ----------------------------------------------------------------------

export default function UserCards() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { monsters } = useSelector((state) => state.data);

  useEffect(() => {}, [dispatch]);

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={3}>
        {monsters.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={4}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
