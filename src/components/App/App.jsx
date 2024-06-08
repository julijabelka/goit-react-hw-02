import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

const App = () => {
  const feedbackUser = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options />
      <Feedback feedbackUser={feedbackUser} />
    </>
  );
};

export default App;
