import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr, Row, Column } from "@react-email/components";
import * as React from "react";
import { currencyFormat } from "@/utils/currencyFormat";

interface PaidOrderEmailProps {
  orderId: string;
  total: number;
  locale?: "es" | "en";
  products: {
    title: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
  }[];
  translations: {
    subject: string;
    title: string;
    text: string;
    processing: string;
    quantity: string;
    totalPaid: string;
    footer: string;
  };
}

export const PaidOrderEmail = ({ orderId, total, locale = "es", products, translations }: PaidOrderEmailProps) => {
  const t = translations;
  const currency = "USD";

  return (
    <Html>
      <Head />
      <Preview>{t.subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{t.title}</Heading>
          <Text style={text}>
            {t.text} <strong>#{orderId.split("-")[0]}</strong> {t.processing}
          </Text>

          <Section>
            {products.map((product, index) => (
              <Row key={index} style={{ marginBottom: "10px" }}>
                <Column style={{ width: "60px" }}>
                  <img src={product.image} alt={product.title} width="50" height="50" style={{ objectFit: "cover", borderRadius: "4px" }} />
                </Column>
                <Column>
                  <Text style={productTitle}>
                    {product.title} ({product.size})
                  </Text>
                  <Text style={productRef}>
                    {t.quantity} {product.quantity}
                  </Text>
                </Column>
                <Column style={{ textAlign: "right" }}>
                  <Text style={productPrice}>{currencyFormat(product.price * product.quantity, locale, currency)}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column>
                <Text style={totalLabel}>{t.totalPaid}</Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Text style={totalPrice}>{currencyFormat(total, locale, currency)}</Text>
              </Column>
            </Row>
          </Section>

          <Text style={footer}>{t.footer}</Text>
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
  marginBottom: "30px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
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
