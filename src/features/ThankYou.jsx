import styled from "styled-components";
import Heading from "../ui/Heading";
import { breakpoints } from "../styles/GlobalStyles";

const StyledThankYou = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  align-self: flex-start;

  background-color: var(--white);
  padding: 1.5rem;
  width: calc(100% - 2rem);
  margin-inline: auto;
  border-radius: 10px;
  margin-top: -5rem;
  margin-bottom: 1.5rem;
  color: var(--marine-blue);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);

  span {
    margin-bottom: 1rem;
  }

  p {
    color: var(--cool-gray);
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
    box-shadow: none;
    align-self: center;
  }
`;

function ThankYou() {
  return (
    <StyledThankYou>
      <span>
        <img src="/images/icon-thank-you.svg" alt="Thank you" />
      </span>

      <Heading>Thank you!</Heading>

      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
         <b> support@mg.com.</b>
      </p>
    </StyledThankYou>
  );
}

export default ThankYou;
