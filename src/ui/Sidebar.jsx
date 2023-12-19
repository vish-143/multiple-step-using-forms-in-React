import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentStep, nextStep, prevStep } from "../features/formSlice";
import { breakpoints } from "../styles/GlobalStyles";
import { FaCheck } from "react-icons/fa";

const Image = ["./images/image_1.png", "./images/image_2.png", "./images/image_3.png", "./images/image_4.png"];

const StyledSidebar = styled.ul`
background-image: url(${(props) => getBackgroundImage(props.step)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: column;
    background-image: url(${(props) => getBackgroundImage(props.step)});
    border-radius: 10px;
    height: 100%;
    padding: 2rem;
    justify-content: flex-start;
  }
`;

const StepItemContainer = styled.li`

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--white);
    gap: 1rem;
  }
`;

const StepInfo = styled.p`
  display: none;

  > :first-child {
    opacity: 0.8;
  }

  > :last-child {
    font-weight: 800;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;

const StepNum = styled.span`
  height: 2.5rem;
  width: 2.5rem;
  margin-top: 2rem;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--light-blue);
  color: var(--white);

  font-weight: 500;

  &.active {
    background-color: var(--light-blue);
    color: var(--marine-blue);
    cursor: pointer;
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
    cursor: pointer;
  }
`;

const getBackgroundImage = (step) => {
  switch (step) {
    case 1:
      return "./images/image_1.png";
    case 2:
      return "./images/image_2.png";
    case 3:
      return "./images/image_3.png";
    case 4:
      return "./images/image_4.png";
    default:
      return "./images/image_1.png";
  }
};

function handleNext(e) {
  e.preventDefault();
  dispatch(nextStep());
}

function handlePrev(e) {
  e.preventDefault();
  dispatch(prevStep());
}

function handleClick(step, dispatch) {

} 

function Sidebar() {
  const step = useSelector(getCurrentStep);
  const dispatch = useDispatch();

  return (
    <StyledSidebar step={step}>
      <StepItemContainer>
        <StepNum className={step === 1 && "active"} onClick={() => handleClick(1,dispatch)}> {step === 1 && "active" ? <>1</> : step >= 1 ? <FaCheck /> : null}</StepNum>
        <StepInfo>
          <span onClick={() => handleClick(1,dispatch)}>Step 1</span>
          <span>Your info</span>
        </StepInfo>
      </StepItemContainer>

      <StepItemContainer>
        <StepNum className={step === 2 && "active"} onClick={() => handleClick(2,dispatch)}>{step === 2 && "active" ? <>2</> : step >= 2 ? <FaCheck /> : 2}</StepNum>
        <StepInfo>
          <span onClick={() => handleClick(2,dispatch)}>Step 2</span>
          <span>Select plan</span>
        </StepInfo>
      </StepItemContainer>

      <StepItemContainer>
        <StepNum className={step === 3 && "active"} onClick={() => handleClick(3)}>{step === 3 && "active" ? <>3</> : step >= 3 ? <FaCheck /> : 3}</StepNum>
        <StepInfo>
          <span onClick={() => handleClick(3)}>Step 3</span>
          <span>Add-ons</span>
        </StepInfo>
      </StepItemContainer>

      <StepItemContainer>
        <StepNum className={(step === 4 || step === 5) && "active"} onClick={() => handleClick(4)}>{step === 4 && "active" ? <>4</> : step >= 4 ? <FaCheck /> : 4}</StepNum>
        <StepInfo>
          <span onClick={() => handleClick(4)}>Step 4</span>
          <span>Summary</span>
        </StepInfo>
      </StepItemContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
