import React from "react";

import styles from "./renderEditChapter.css";



const RenderEditChapter = () => {
 

  return (
    <>
      <div className={styles.container_card}>
        {/* <div className={styles.container_title}>
          <p className="">
            {chaptersStore?.map((chapter) => (
              <span>
                {chapter?.title === ""
                  ? null
                  : `Title: "${chapter?.response?.title}" `}
              </span>
            ))}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default RenderEditChapter;
