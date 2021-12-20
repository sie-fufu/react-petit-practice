import { Box, Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import classes from "pages/Manage/index.module.scss";
import { useState } from "react";
import { CheckCourt } from "components/CheckCourt";

const COURT_NUM_LIST = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];

export const Manage = () => {
  const [selectedCourt, setSelectedCourt] = useState<string[]>([]);
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [meetTime, setMeetTime] = useState();

  return (
    <>
      <title>プチ練習会</title>
      <Box>
        <Link to="/decide">戻る</Link>
      </Box>
      <h2 className={classes.manageScreen}>管理画面</h2>
      <form method="post" id="manage">
        <p>日程を入力してください</p>
        <Input name="date" type="date" id="event-date" value={date} />
        <br />
        <br />
        <p>開催場所を入力して下さい</p>
        <Input type="text" name="name" id="prac-place" value={place} />
        <br />
        <br />
        <p>コート番号を選んで下さい</p>
        {COURT_NUM_LIST.map((courtNum) => (
          <CheckCourt
            key={courtNum}
            courtNum={courtNum}
            selectedCourt={selectedCourt}
            setSelectedCourt={setSelectedCourt}
          />
        ))}
        <br />
        <br />
        <p>集合時間を入力して下さい</p>
        <Input type="text" name="time" id="meet-time" value={meetTime} />
        <br />
        <br />
        <Button type="reset" id="reset" value="クリア">
          クリア
        </Button>
        <Button type="submit" id="submit" value="設定">
          設定
        </Button>
      </form>
    </>
  );
};
