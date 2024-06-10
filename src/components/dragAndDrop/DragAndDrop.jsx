import { useRef, useState } from "react";
import LeftMock from "../../LeftMock.json";
import RightMock from "../../RightMock.json";
import ItemsRight from "./ItemsRight";
import styles from "./ItemLeft.module.css";

import ItemLeft from "./ItemsLeft";

export default function DragAndDrop() {
  const style = {
    gap: "5rem",
    display: "flex",
  };
  const [leftData, setLeftData] = useState(LeftMock);
  const [rightData, setRightData] = useState(RightMock);

  const dragDataRef = useRef();
  const dragOverDataRef = useRef();

  const handleLeftDragEnd = () => {
    const leftDataClone = [...leftData];
    const temp = leftDataClone[dragDataRef.current];
    leftDataClone[dragDataRef.current] = leftDataClone[dragOverDataRef.current];
    leftDataClone[dragOverDataRef.current] = temp;
    setLeftData(leftDataClone);
  };

  const handleRightDragEnd = () => {
    const rightDataClone = [...rightData];
    const temp = rightDataClone[dragDataRef.current];
    rightDataClone[dragDataRef.current] =
      rightDataClone[dragOverDataRef.current];
    rightDataClone[dragOverDataRef.current] = temp;
    setRightData(rightDataClone);
  };

  return (
    <>
      <div style={style}>
        <div className={styles.leftItemBox}>
          {leftData.map((item, index) => (
            <div
              data-set="left"
              key={item?.id}
              draggable
              onDragStart={() => (dragDataRef.current = index)}
              onDragEnter={() => (dragOverDataRef.current = index)}
              onDragEnd={(e) => handleLeftDragEnd(e)}
              onDragOver={(e) => e.preventDefault()}
            >
              <ItemLeft name={item?.name} color={item?.color} />
            </div>
          ))}
        </div>
        <div className={styles.rightItemBox}>
          <div>
            {rightData.map((item, index) => (
              <div
                data-set="right"
                key={item?.id}
                draggable
                onDragStart={() => (dragDataRef.current = index)}
                onDragEnter={() => (dragOverDataRef.current = index)}
                onDragEnd={handleRightDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <ItemsRight color={item?.color} name={item?.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
