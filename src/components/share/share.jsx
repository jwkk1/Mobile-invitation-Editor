import React, { useEffect, useState } from "react";
import ShareBox from "./shareBox";
import styles from "./share.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Share = ({ database }) => {
  const webId = window.location.href.split("/")[3];
  const [card, setCard] = useState({
    id: webId,
    date: "default",
    mainPhoto: "default",
    maleName: "default",
    femaleName: "default",
    weddingHallAddress: "default",
    weddingHallName: "default",
    gallary: "default",
    maleBank: "default",
    malePhone: "default",
    femaleBank: "default",
    femalePhone: "default",
    comment: {
      1: { name: "default", value: "default", id: "default" },
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(card);
    database.syncData(webId, (card) => setCard(card));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const onSubmit = (card) => {
    setCard(card);
  };

  return (
    <>
      {loading && (
        <div className={styles.loding}>
          <div>
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        </div>
      )}
      {!loading && (
        <ShareBox card={card} onSubmit={onSubmit} database={database} />
      )}
    </>
  );
};

export default Share;
