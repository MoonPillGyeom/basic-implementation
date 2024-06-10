export default function ItemsRight({ color, name }) {
  // const rightDataRef = useRef(0);
  // const rightDataOverRef = useRef(0);

  // const [rightData, setRightData] = useState(RightMock);

  // const handleDragEnd = () => {
  //   const rightDataClone = [...rightData];
  //   const temp = rightDataClone[rightDataRef.current];
  //   rightDataClone[rightDataRef.current] =
  //     rightDataClone[rightDataOverRef.current];
  //   rightDataClone[rightDataOverRef.current] = temp;
  //   setRightData(rightDataClone);
  // };
  return (
    <>
      <div style={{ background: `${color}`, height: "10rem" }}>{name}</div>
    </>
  );
}
