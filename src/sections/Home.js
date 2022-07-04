import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: 200vh;
  overflow: hidden;
  background: ${({ theme }) => theme.black};
`;

const Logo = styled.div`
  font-size: calc(1rem + 1vw);
  color: ${({ theme }) => theme.white};
`;

const Title = styled.div`
  font-size: calc(1rem + 2vw);
  color: ${({ theme }) => theme.white};
`;

const Home = () => {
  return (
    <Section>
      <Logo>Logo</Logo>
      <Title>Interior Designing</Title>
    </Section>
  );
};

export default Home;
