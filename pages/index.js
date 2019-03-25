import styled from 'styled-components';

const CustomFont = styled.div`
  color: red;
  font-family: 'Pangram';
`;

function Index() {
  return <CustomFont>Welcome === to next.js!</CustomFont>;
}

export default Index;
