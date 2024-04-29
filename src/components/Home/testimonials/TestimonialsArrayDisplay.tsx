import Testimonial from "./Testimonial";
import useTestimoniesHook from "./useTestimoniesHook";

const TestimonialsArrayDisplay = () => {
  const testimonies = useTestimoniesHook();
  return (
    <>
      {testimonies.map((testimony) => {
        return <Testimonial testimony={testimony} key={testimony.id} />;
      })}
    </>
  );
};

export default TestimonialsArrayDisplay;
