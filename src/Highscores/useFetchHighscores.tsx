import axios from "axios";
import { useEffect, useState } from "react";
import Highscore from "./models/Highscore";

const useFetchHighscores = () => {
  const [highscores, setHighscores] = useState<Highscore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    axios
      .get<Highscore[]>("https://localhost:44379/highscores")
      .then((x) => x.data)
      .then((x) => {
        if (isMounted) {
          setHighscores(x);
          setIsLoading(false);
        }
      })
      .catch((x) => {
        setIsLoading(false);
        setError("There was a problem while fetching the highscores.");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { highscores, isLoading, error };
};

export default useFetchHighscores;
