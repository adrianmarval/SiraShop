import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr, Row, Column } from "@react-email/components";
import Image from "next/image";
import * as React from "react";

interface OrderConfirmationEmailProps {
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

export const OrderConfirmationEmail = ({ orderId, total, products }: OrderConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Gracias por tu pedido en Sira Store</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Confirmación de Pedido</Heading>
          <Text style={text}>
            ¡Gracias por tu compra! Tu pedido <strong>#{orderId.split("-")[0]}</strong> ha sido recibido exitosamente.
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
                <Text style={totalLabel}>Total:</Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Text style={totalPrice}>${total.toFixed(2)}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={policySection}>
            <Heading as="h3" style={h3}>
              ¿Cómo puedo verificar el estado de mi pedido?
            </Heading>
            <Text style={policyText}>
              Cuando su pedido se haya enviado, recibirá una notificación por correo electrónico con un número de seguimiento para consultar
              su estado. La información de seguimiento tardará 48 horas en estar disponible.
            </Text>
          </Section>

          <Text style={footer}>Si tienes alguna pregunta, no dudes en contactarnos.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderConfirmationEmail;

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

const policySection = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "5px",
  marginTop: "20px",
};

const h3 = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
};

const policyText = {
  fontSize: "14px",
  color: "#555",
  lineHeight: "22px",
  margin: "0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "20px",
  textAlign: "center" as const,
};
