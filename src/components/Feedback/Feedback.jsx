// export default function Feedback(feedbackUser: {
//     good,
//     neutral,
//     bad
// },) {
//   return (
//     <>
//       <p>Good:{good}</p>
//       <p>Neutral:{neutral}</p>
//       <p>Bad:{bad}</p>
//     </>
//   );
// }
export default function Feedback(feedbackUser) {
  return (
    <>
      <p>Good:{feedbackUser.good}</p>
      <p>Neutral:{feedbackUser.neutral}</p>
      <p>Bad:{feedbackUser.bad}</p>
    </>
  );
}
