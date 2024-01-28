import { useEffect, useState } from "react";

export interface Testimony {
  id: number
  title: string
  body: string
}
const useTestimoniesHook = (): Testimony[] => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  useEffect(() => {
    const fetchData = () => {
      const data: Testimony[] = [
        {
          id: 1,
          title: "One",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dictasapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.",
        },
        {
          id: 2,
          title: "Two",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dictasapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.",
        },
        {
          id: 3,
          title: "Three",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dictasapiente totam dolorem ipsa exercitationem aliquid sit optio! Provident, eum reiciendis impedit vitae maiores adipisci non necessitatibus suscipit consequuntur. Quam et maiores pariatur necessitatibus quidem eum quae modi. Laborum, recusandae ratione.",
        },
      ];
      setTestimonies(data)
    }
    fetchData()
  }, [])
  return testimonies;
};

export default useTestimoniesHook;
