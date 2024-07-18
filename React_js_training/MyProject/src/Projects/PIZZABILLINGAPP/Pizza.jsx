import React, { useEffect, useState } from "react";

import "./pizza.css"
export default function Pizza() {
  const [name, setName] = useState("");
  const [pizzaorder, setPizzaorder] = useState(0);
  const [pastaorder, setPastaorder] = useState(0);
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let handleKeyevent = (e) => {
      if (e.key === "1") {
        setMenu(true);
        setExit(false);
      } else if (e.key === "2") {
        setExit(true);
        setMenu(false);
      }
    };
    document.body.addEventListener("keypress", handleKeyevent);
    return () => {
      document.body.removeEventListener("keypress", handleKeyevent);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let pizzaprice = [10.99, 20.99, 29.99];
    let pizzacost = 0;

    let pastaprice = [9.5, 17.0, 27.5];
    let pastacost = 0;

    let msg = "";

    if (pizzaorder >= 4) {
      pizzacost = pizzaorder * 10.99;
      msg = "* Congratulations !! 1.5lt softdrink free *";
    } else {
      pizzacost = pizzaprice[pizzaorder - 1] || 0;
    }

    if (pastaorder >= 4) {
      pastacost = pastaorder * 9.5;
      msg = "* Congratulations !! get 2 bruschetta free *";
    } else {
      pastacost = pastaprice[pastaorder - 1] || 0;
    }

    let totalcost = pizzacost + pastacost;

    if (pizzaorder >= 4 && pastaorder >= 4) {
      msg = "* Congratulations !! get 2 chocco brownies ice cream free *";
    }

    let persondata = { name, pizzacost, pastacost, totalcost, msg };
    setData([...data, persondata]);
    setName("");
    setPastaorder("");
    setPizzaorder("");
  };

  if (exit) {
    return (
      <div style={styles.containerPage}>
        <h1>Thank you for visiting Amazing Pizza and Pasta Pizzeria!</h1>
      </div>
    );
  }

  return (
    <div style={styles.containerPage}>
      <div style={styles.navbar}>
        <p style={styles.rightimg}></p>
        <h1>Welcome to Amazing Pizza and Pasta Pizzeria...</h1>
        <p style={styles.leftimg}></p>
      </div>

      {!menu && (
        <div className="color" style={styles.pressClick}>

          <button style={styles.buttonclick}>Press 1 : order menu</button>
          <button style={styles.buttonclick}>Press 2 : Exit</button>
        </div>
      )}
      {menu && (
        <div className="mainpage" style={styles.mainPage}>
          <div style={styles.menuPage}>
            <div className="menubox">
              <div className="offermanu">
                <h5 style={{ padding: "0px 20px" }}>OFFER</h5>
                <hr />
                <div className="offer" >
                  <p>
                    Buy 4 or more pizza and get
                    1.5lt of soft-drink free
                  </p>
                </div>
                <div style={styles.pasoff}>
                  <p>
                    Buy 4 or more pastas and get  2 bruschetta{" "} free.
                  </p>
                </div>
              </div>
              <div style={styles.itemMenu}>
                <div className="pizmn">
                  <h4>PIZZA</h4>
                  <p> 1 large pizza  -: 10.99 AUD :- </p>
                  <p> 2 large pizza  -: 20.99 AUD :- </p>
                  <p> 3 large pizza  -: 29.99 AUD :- </p>
                </div>
                <div style={styles.pasmn}>
                  <h4>PASTA</h4>
                  <p> 1 large pasta  -: 09.50 AUD :-{" "}</p>
                  <p> 2 large pasta  -: 17.00 AUD :-{" "}</p>
                  <p> 3 large pasta  -: 27.50 AUD :-{" "}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="billdetail" style={styles.personalDetails}>
            <form onSubmit={handleSubmit}>
              <p>
                Enter Your Name :
                <input id="persondata" type="text" value={name} onChange={(e) => setName(e?.target?.value)}/>
              </p>
              <p>
                Pizza Order Number :
                <input id="pizzaorder" type="number" value={pizzaorder} onChange={(e) => setPizzaorder(e?.target?.value)}/>{" "}
              </p>
              <p>
                Pista Order Number :
                <input id="pastaorder" type="number" value={pastaorder} onChange={(e) => setPastaorder(e?.target?.value)}/>{" "}
              </p>
              <button type="submit">Order</button>
            </form>

            <div style={styles.detailbox}>
              <div style={styles.detailbox1}>
                {data.map((e, i) => {
                  return (
                    <p key={i}>
                      Welcome...,
                      <p>{e.name}</p>
                      <p>Your pizza order amount is : {e.pizzacost}</p>
                      <p>Your pasta order amount is : {e.pastacost}</p>
                      <p>Your total order amount is : {e.totalcost}</p>
                      <br />
                      <p>{e.msg}</p>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  containerPage: {
    fontFamily: "Arial, sans-serif"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "brown",
    color: "white"
  },
  rightimg: {
    background: 'url("rightimg.png") no-repeat',
    width: "50px",
    height: "50px"
  },
  leftimg: {
    background: 'url("leftimg.png") no-repeat',
    width: "50px",
    height: "50px"
  },
  buttonclick: {
    height: "60px",
    width: "170px",
    border: "1px solid black",
    margin: "20px",
    backgroundColor: "brown",
    borderRadius: "10px",
    color: "white",
    marginTop: "160px"
  },
  pressClick: {

    textAlign: "center",
    marginTop: "20px",
    border: "2px solid black",
    width: "100%",
    height: "450px",
  },
  mainPage: {
    // marginTop: "20px"
  },
  menuPage: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  itemMenu: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  pasmn: {
    textAlign: "left"
  },
  personalDetails: {
    // marginTop: "20px"
  },
  detailbox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    marginTop: "20px"
  },
  detailbox1: {
    flex: 1
  },
};
