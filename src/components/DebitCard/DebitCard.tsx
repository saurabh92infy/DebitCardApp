import React, { Component } from "react";
import DebitCardDisplay from "../DebitCardDisplay/DebitCardDisplay";
import styles from "./DebitCard.module.css";

interface Props {
  [key: string]: any;
}

interface IState {
  count: number;
}

export default class DebitCard extends Component<Props, IState> {
  state: IState = {
    count: 0,
  };

  increment = (x: number) => this.setState({ count: this.state.count + x });

  decrement = (x: number) => this.setState({ count: this.state.count - x });

  Add = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let currentNum = (document.querySelector("#numAdd") as HTMLInputElement)
      .value;
    if (currentNum == "") return;
    let sum = this.state.count + parseInt(currentNum);
    this.setState({ count: sum });
    (document.querySelector("#numAdd") as HTMLInputElement).value = "";
  };

  WithDraw = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let currentNum = (document.querySelector(
      "#numWithdraw"
    ) as HTMLInputElement).value;
    if (currentNum == "") return;
    let sum = this.state.count - parseInt(currentNum);
    this.setState({ count: sum });
    (document.querySelector("#numWithdraw") as HTMLInputElement).value = "";
  };

  render() {
    return (
      <section className={styles.container}>
        <h1>Debit Card Application</h1>
        <div className={styles.inner__container}>
          <button className={styles.button} onClick={this.WithDraw}>
            Withdraw
          </button>
          <input type="text" id="numWithdraw" placeholder="enter a number" />
          <button
            className={styles.button}
            onClick={() => this.decrement(1000)}
          >
            Withdraw Rs 1000
          </button>
          <button className={styles.button} onClick={() => this.decrement(500)}>
            Withdraw Rs 500
          </button>
          <button className={styles.button} onClick={() => this.decrement(100)}>
            Withdraw Rs 100
          </button>
          <button className={styles.button} onClick={() => this.decrement(10)}>
            Withdraw Rs 10
          </button>
          <button className={styles.button} onClick={() => this.decrement(1)}>
            -
          </button>

          <DebitCardDisplay count={this.state.count} />

          <button className={styles.button} onClick={() => this.increment(1)}>
            +
          </button>
          <button className={styles.button} onClick={() => this.increment(10)}>
            Add Rs 10
          </button>
          <button className={styles.button} onClick={() => this.increment(100)}>
            Add Rs 100
          </button>
          <button className={styles.button} onClick={() => this.increment(500)}>
            Add Rs 500
          </button>
          <button
            className={styles.button}
            onClick={() => this.increment(1000)}
          >
            Add Rs 1000
          </button>
          <input type="text" id="numAdd" placeholder="enter a number" />
          <button className={styles.button} onClick={this.Add}>
            Add
          </button>
        </div>
      </section>
    );
  }
}
