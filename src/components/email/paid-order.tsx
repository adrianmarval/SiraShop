import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr, Row, Column } from "@react-email/components";
import Image from "next/image";
import * as React from "react";

interface PaidOrderEmailProps {
  orderId: string;
  total: number;
  products: {
    title: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
  }[];
}

export const PaidOrderEmail = ({ orderId, total, products }: PaidOrderEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>¡Pago confirmado para tu pedido en Sira Shop!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>¡Pago Recibido!</Heading>
          <Text style={text}>
            Hemos recibido el pago de tu pedido <strong>#{orderId.split("-")[0]}</strong> exitosamente. Pronto comenzaremos a procesar tu
            orden.
          </Text>

          <Section>
            {products.map((product, index) => (
              <Row key={index} style={{ marginBottom: "10px" }}>
                <Column style={{ width: "60px" }}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width="50"
                    height="50"
                    style={{ objectFit: "cover", borderRadius: "4px" }}
                  />
                </Column>
                <Column>
                  <Text style={productTitle}>
                    {product.title} ({product.size})
                  </Text>
                  <Text style={productRef}>Cantidad: {product.quantity}</Text>
                </Column>
                <Column style={{ textAlign: "right" }}>
                  <Text style={productPrice}>${(product.price * product.quantity).toFixed(2)}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column>
                <Text style={totalLabel}>Total Pagado:</Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Text style={totalPrice}>${total.toFixed(2)}</Text>
              </Column>
            </Row>
          </Section>

          <Text style={footer}>Si tienes alguna pregunta, no dudes en contactarnos.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default PaidOrderEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};

const productTitle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const productRef = {
  fontSize: "12px",
  color: "#666",
  margin: "0",
};

const productPrice = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const totalLabel = {
  fontSize: "16px",
  fontWeight: "bold",
};

const totalPrice = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "20px",
  textAlign: "center" as const,
};
