import { useContext, useEffect, useState } from "react";
import { getCards } from "./request";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../atoms/Card";
import { InitializeCards, shuffleCards, getItem, setItem } from "./functions";
import { AttempsContext } from "../../../store/Attemps";
import { ErrorsContext } from "../../../store/Errors";
import { Counter } from "../../atoms/Counter";
import "./index.css";
import FloatCard from "../../atoms/FloatCard";
import { Button } from "react-bootstrap";

export const DashboardGame = () => {
  // hooks
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [userName, setUsername] = useState("");
  const [savedUser, setSavedUser] = useState("");

  // context
  const { attemps, setAttemps } = useContext(AttempsContext);
  const { errors, setErrors } = useContext(ErrorsContext);

  // request
  const _getCards = async () => {
    const { entries } = await getCards();
    setCards(() => InitializeCards(entries));
  };

  // functions
  const handleClick = (card) => {
    if (!disabled && !selectedCards.includes(card) && !card.matched) {
      setSelectedCards((prev) => [...prev, card]);
    }
  };

  const resetGame = () => {
    setAttemps(() => 0);
    setErrors(() => 0);
    setIsShow((prev) => !prev);
    setCards((prev) => shuffleCards(prev));
  };

  useEffect(() => {
    _getCards();
    if (getItem("userName")) {
      setSavedUser(getItem("userName"));
    }
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setDisabled((prev) => !prev);
      setTimeout(() => {
        const [first, second] = selectedCards;
        if (first.uuid === second.uuid) {
          setCards((prev) =>
            prev.map((card) =>
              card.uuid === first.uuid ? { ...card, matched: true } : card
            )
          );
        } else {
          setErrors((prev) => prev + 1);
        }
        if (cards.every(({ matched }) => matched === true) && attemps > 0) {
          setIsShow((prev) => !prev);
        }
        setSelectedCards(() => []);
        setDisabled((prev) => !prev);
      }, 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (cards.every(({ matched }) => matched === true)) {
      setIsShow((prev) => !prev);
    }
    setAttemps(() => cards.filter(({ matched }) => matched === true).length);
  }, [cards]);

  return (
    <>
      {isShow && (
        <FloatCard>
          <>
            <h1>{savedUser} el juego ha terminado</h1>
            <Button onClick={() => resetGame()}>Reiniciar</Button>
          </>
        </FloatCard>
      )}

      {!savedUser && (
        <FloatCard>
          <h1>Inicia sesión</h1>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            onClick={() => {
              setItem("userName", userName);
              setSavedUser(() => userName);
            }}
          >
            Iniciar sesión
          </Button>
        </FloatCard>
      )}
      <Container
        fluid={"sm md lg lx xxl"}
        className="bg-x2dark container-complements "
      >
        <Row className="bg-x3dark row-counters">
          <Counter text="Aciertos" count={attemps} url="/hand.svg" />
          <Counter text="Errores" count={errors} url="error.svg" />
        </Row>
        <Row
          bsPrefix="row"
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="custom-row"
        >
          {cards?.map((item, index) => (
            <Col xs={3} sm={3} md={2} lg={2} xl={2} xxl={2} key={index}>
              <Card
                {...item}
                displayCard={() => handleClick(item)}
                matched={selectedCards.includes(item) || item.matched}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardGame;
