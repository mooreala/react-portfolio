import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  color: #BD9A7A;
  font-size: 20px;
  @media (max-width: 1199px) {
    font-size: 20px;
  }
`

export const SectionLine = styled.hr`
  width: 50vw;
  height: 1px;
  margin-bottom: 20px;
  color: #BD9A7A;
  background-color: #BD9A7A;
  border: none;
  @media (max-width: 520px) {
    width: 90vw;
  }
`