import { Input } from "@chakra-ui/react";
import { memo } from "react";

type CheckCourtProps = {
  courtNum: string;
  selectedCourt: string[];
  setSelectedCourt: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CheckCourt = memo((props: CheckCourtProps) => {
  const { courtNum, selectedCourt, setSelectedCourt } = props;

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currValue = e.target.value;
    if (selectedCourt.includes(currValue)) {
      setSelectedCourt((prev) => prev.filter((item) => item !== currValue));

      return;
    }
    setSelectedCourt((prev) => [...prev, currValue]);
  };
  return (
    <>
      <Input
        type="checkbox"
        class="court-number"
        value={courtNum}
        checked={selectedCourt.includes(courtNum)}
        onChange={handleChangeCheckbox}
      />
      <label>{courtNum}</label>
    </>
  );
});
