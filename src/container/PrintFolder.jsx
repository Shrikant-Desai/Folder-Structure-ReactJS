import React, { useState } from "react";
import CheckFileType from "./CheckFileType";

export const PrintFolder = ({ dataArr }) => {
  const [minimizeStates, setMinimizeStates] = useState({});

  const toggleMinimize = (id) => {
    setMinimizeStates({
      ...minimizeStates,
      [id]: !minimizeStates[id],
    });
  };
  return (
    <GetFolderStructure
      minimizeStates={minimizeStates}
      toggleMinimize={toggleMinimize}
      dataArr={dataArr}
    />
  );
};

export const GetFolderStructure = ({
  minimizeStates,
  dataArr,
  toggleMinimize,
}) => {
  const [toggle, setToggle] = useState({});
  return (
    <>
      {dataArr.map((folder, index) => (
        <CheckFileType
          folder={folder}
          index={index}
          toggle={toggle}
          setToggle={setToggle}
          minimizeStates={minimizeStates}
          toggleMinimize={toggleMinimize}
        />
      ))}
    </>
  );
};
