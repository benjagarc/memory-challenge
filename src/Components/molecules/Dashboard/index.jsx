import { useEffect, useState } from "react";
import { getCards } from "./request";
import { Container, Row } from "react-bootstrap";
import Card from "../../atoms/Card";
import { InitializeCards } from "./functions";

export const DashboardGame = () => {
  const [cards, setCards] = useState([]);
  const _getCards = async () => {
    const { entries } = await getCards();
    setCards(() => InitializeCards(entries));
  };
  useEffect(() => {
    _getCards();
  }, []);
  return (
    <>
      <Container fluid={"sm md lg lx xxl"} className="bg-x2dark">
        <Row bsPrefix="row" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} style={{ display: "flex",  flexWrap: "wrap"}}> 
          {cards?.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardGame;
