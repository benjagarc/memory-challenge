import { useContext, useEffect, useState } from "react";
import { getCards } from "./request";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../atoms/Card";
import { InitializeCards, shuffleCards } from "./functions";
import { AttempsContext } from "../../../store/Attemps";
import { ErrorsContext } from "../../../store/Errors";
import { Counter } from "../../atoms/Counter";
import "./index.css";
import Message from "../../atoms/Message";

export const DashboardGame = () => {
  // hooks
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isShow, setIsShow] = useState(false);

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
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setDisabled((prev) => !prev);
      setAttemps((prev) => prev + 1);
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
        if (cards.every(({ matched }) => matched === true)) {
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
  }, [cards]);

  return (
    <>
      {isShow && <Message setIsShow={() => resetGame()} />}
      <Container
        fluid={"sm md lg lx xxl"}
        className="bg-x2dark container-complements "
      >
        <Row className="bg-x3dark row-counters">
          <Counter text="Intentos" count={attemps} url="/hand.svg" />
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
