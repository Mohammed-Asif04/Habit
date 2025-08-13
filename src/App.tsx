import { Box, Container, Typography } from "@mui/material";
import useHabitStore from "./store/store";
import AddHabitForm from "./components/add-habit-form";
import HabitStats from "./components/habit-stat";
import HabitList from "./components/habit-list";
import { useEffect } from "react";

function App() {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList/>
        <HabitStats/>
      </Box>
    </Container>
  );
}

export default App;
