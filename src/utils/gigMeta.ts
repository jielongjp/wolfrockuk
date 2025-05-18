type GigMeta = {
  [gigFolderName: string]: {
    title: string;
    youtube?: string[];
  };
};

const gigMeta: GigMeta = {
  Rainford: {
    title: "WOLF at Rainford Junction 14/04/25",
    // youtube: ["https://www.youtube.com/embed/7Tx6r6gOLf0?si=gjoKCnW6kxvqcghF"],
  },
  burton2024: {
    title: "Summer of WOLF at Tower Brewery, Burton-on-trent (12/07/2024)",
    youtube: [
      "https://www.youtube.com/embed/AAc6leO7CSI?si=4b2RIN20-VZrZzS7",
      "https://www.youtube.com/embed/jYehRJt5PVA?si=GkWEIjU2U6t7VZxz",
      "https://www.youtube.com/embed/wSxpljGRy9E?si=rBYx1CkRWLbrkDPl",
      "https://www.youtube.com/embed/fuWISt-qbg4?si=D4clQKeF5ZtvKrkk",
      "https://www.youtube.com/embed/ou1dsS_wysM?si=E8BfPUP_cKlr9_aV",
    ],
  },
  wolf240: {
    title: "WOLF 240 at Tower Brewery, Burton-on-trent (09/07/2023)",
  },
};

export default gigMeta;
