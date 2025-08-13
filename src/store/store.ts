import { create } from "zustand";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitSate {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit:(id:string) => void;
  toggleHabit:(id:string , date: string) => void;
}

const useHabitStore = create<HabitSate>()((set) => {
  return {
    habits: [],
    addHabit: (name, frequency) =>
      set((state) => ({
        habits: [
            ...state.habits,
            {
                id: Date.now().toString(),
                name,
                frequency,
                completedDates: [],
                createdAt: Date.now().toString(),
            }
        ],
      })),
  };
});

export default useHabitStore;
