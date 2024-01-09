import { Card, Button, Typography, Stack, Avatar } from "@mui/material";

import { changeRefresh, deleteMonsterById } from "../redux/slices/data";
import { useDispatch } from "../redux/store";

const MonsterCard = ({ movie }) => {
  const dispatch = useDispatch();

  const onDeleteMonster = async () => {
    await deleteMonsterById(movie.id);
    alert("Monster deleted successfully");
    dispatch(changeRefresh());
  };
  return (
    <Card sx={{ minHeight: 220 }}>
      <Stack padding={2}>
        <Stack direction="row" spacing={{ xs: 3, sm: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            Name {movie.name}
          </Typography>
          <Avatar
            alt={movie.name}
            src="/public/hig.png"
            sx={{ width: 35, height: 35 }}
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          Level {movie.level}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specie : {movie.type.specie}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Subspecie : {movie.type.subSpecie}
        </Typography>
      </Stack>
      <Stack>
        <Button onClick={onDeleteMonster} size="small" color="error">
          Delete
        </Button>
      </Stack>
    </Card>
  );
};

export default MonsterCard;
