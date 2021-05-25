import React from "react";
import styles from "./DebitCardDisplay.module.css";

interface IProps {
  count?: number;
}
const DebitCardDisplay: React.FC<IProps> = (props: IProps) => (
  <div className={styles.display}>Current Money {props.count}</div>
);

DebitCardDisplay.defaultProps = {
  count: 10,
};

export default DebitCardDisplay;
