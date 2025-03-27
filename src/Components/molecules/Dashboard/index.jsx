import { useEffect, useState } from "react";
import { getCards } from "./request";
import { Container, Row } from "react-bootstrap";
import Card from "../../atoms/Card";

export const DashboardGame = () => {
  const [cards, setCards] = useState([]);
  const _getCards = async () => {
    const { entries } = await getCards();
    setCards(() => entries.map(({ fields }) => fields?.image));
  };
  useEffect(() => {
    _getCards();
  }, []);
  console.log(cards);
  return (
    <>
      <Container fluid={"sm md lg lx xxl"}>
        <Row bsPrefix="row" xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} style={{ flexWrap: "wrap"}}> 
          {cards?.map((item) => (
            <Card {...item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardGame;
