import { Button } from "@mui/material";

const SponsorsAndApprovalsArrayDisplay = () => {
  const array = new Array(10).fill("sponsor");
  return (
    <>
      <div className="slide-container">
        <ul className="slide">
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button variant="contained" color="success">
                {sample}
              </Button>
            </li>
          ))}
        </ul>
        <ul className="slide">
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button variant="contained" color="success">
                {sample}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SponsorsAndApprovalsArrayDisplay;
