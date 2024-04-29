import { Button } from "@mui/material";

const SponsorsAndApprovalsArrayDisplay = () => {
  const array = new Array(10).fill("KMPDC");
  return (
    <>
      <div className="slide-container mx-auto">
        <ul className="slide">
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button
                variant="contained"
                color={i % 2 === 0 ? "primary" : "success"}
              >
                {sample}
              </Button>
            </li>
          ))}
        </ul>
        <ul className="slide">
          {array.map((sample, i) => (
            <li key={i + 1}>
              <Button
                variant="contained"
                color={i % 2 === 0 ? "primary" : "success"}
              >
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
