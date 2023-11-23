import Logo from "@/my_components/Logo";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ActivateUserEmailProps {
  userFirstname: string;
  token: string;
}

export const ActivateUser = ({
  userFirstname,
  token,
}: ActivateUserEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Logo />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Welcome to our app we wish you will have good time there, to
            activated account click in the button
          </Text>
          <Section style={btnContainer}>
            <Button
              style={button}
              href={process.env.NEXTAUTH_URL + "/activate?token=" + token}
            >
              Activate
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The App team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>408 by mekux during learning process</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ActivateUser;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
