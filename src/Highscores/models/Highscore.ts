type Highscore = {
  name: string;
  numberOfSolutions: number;
  solvedTasks: string[];
};

export default Highscore;

export const highscoresMock: Highscore[] = [
  {
    name: "Patryk",
    numberOfSolutions: 3,
    solvedTasks: ["Task1", "Task2", "Task3"],
  },
  {
    name: "Damian",
    numberOfSolutions: 2,
    solvedTasks: ["Task1", "Task3"],
  },
  {
    name: "Lukas",
    numberOfSolutions: 1,
    solvedTasks: ["Task1"],
  },
];
