import { useEffect, useState } from "react";

export interface Content {
    id: number;
    title: string;
    body: string;
  }

const useAboutContents = (): Content[] => {
  const [aboutContents, setAboutContents] = useState<Content[] >([]);
  useEffect(() => {
    const fetchData = () => {
      const data = [
        {
          id: 1,
          title: "Mission",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
        },
        {
          id: 2,
          title: "Vision",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est reiciendis et. Tempora, non officia ipsam quam iste animi architecto corrupti est fugit! Aliquid, alias voluptas. Corporis totam eligendi perferendis error, eaque quam fugiat beatae vero laudantium a ut facere! Facere officia ad, accusamus repudiandae et nesciunt natus ab deserunt accusantium itaque voluptatum",
        },
      ];
      setAboutContents(data);
    };
    fetchData();
  }, []);
  return aboutContents;
};

export default useAboutContents;
