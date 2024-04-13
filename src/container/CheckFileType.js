import React, { useState } from "react";
import { GetFolderStructure } from "./PrintFolder";
const CheckFileType = ({
  folder,
  index,
  setToggle,
  minimizeStates,
  toggleMinimize,
  toggle,
}) => {
  console.log(folder.name, toggle);
  return (
    <>
      {folder.children ? (
        <li /* className="list-group-item list-group-item-light" */ key={index}>
          {folder.name}
          <button
            onClick={() =>
              setToggle({ ...toggle, [folder.name]: !toggle[folder.name] })
            }
          >
            {toggle[folder.name] ? "-" : "+"}
          </button>
          <ul
            style={
              !toggle[folder.name] ? { display: "none" } : { display: "block" }
            }
          >
            <GetFolderStructure
              minimizeStates={minimizeStates}
              toggleMinimize={toggleMinimize}
              dataArr={folder.children}
            />
          </ul>
        </li>
      ) : (
        <li key={index}>{folder.name}</li>
      )}
    </>
  );
};

export default CheckFileType;

{
  /* <>
      {folder.children ? (
        <li className="list-group-item list-group-item-light" key={index}>
          {folder.name}
          <button onClick={() => toggleMinimize(folder.id)}>
            {minimizeStates[folder.id] ? "-" : "+"}
          </button>
          {!minimizeStates[folder.id] ? null : (
            <ul>
              <GetFolderStructure
                minimizeStates={minimizeStates}
                toggleMinimize={toggleMinimize}
                dataArr={folder.children}
              />
            </ul>
          )}
        </li>
      ) : (
        <li key={index}>{folder.name}</li>
      )}
    </> */
}
