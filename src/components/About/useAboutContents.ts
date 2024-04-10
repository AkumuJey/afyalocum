import { useEffect, useState } from "react";

export interface Content {
  id: number;
  title: string;
  body: string;
}

const useAboutContents = (): Content[] => {
  const [aboutContents, setAboutContents] = useState<Content[]>([]);
  useEffect(() => {
    const fetchData = () => {
      const data = [
        {
          id: 1,
          title: "Mission",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit!",
        },
        {
          id: 2,
          title: "Vision",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et.",
        },
      ];
      setAboutContents(data);
    };
    fetchData();
  }, []);
  return aboutContents;
};

export default useAboutContents;
