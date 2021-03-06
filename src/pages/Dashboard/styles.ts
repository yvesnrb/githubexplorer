import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-top: 100px;
  max-width: 433px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  height: 72px;
  margin-top: 40px;
  max-width: 714px;
  display: flex;

  input {
    flex: 1;
    height: 100%;
    background: #fff;
    padding: 0px 30px;
    border-radius: 5px 0 0 5px;
    border: none;
    font-size: 20px;
    font-weight: 400;
    color: #3a3a3a;

    ${props =>
      props.hasError
        ? css`
            border: 1px solid #fff;
            border-right: none;
          `
        : css`
            border: 1px solid #c53030;
            border-right: none;
          `}

    &::placeholder {
      font-size: 20px;
      font-weight: 400;
      color: #a8a8b3;
    }
  }

  button {
    height: 100%;
    background: #04d361;
    padding: 0px 64px;
    border: none;
    border-radius: 0 5px 5px 0;
    font-size: 20px;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
      cursor: pointer;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  max-width: 714px;
  margin-top: 120px;

  a + a {
    margin-top: 16px;
  }

  a {
    padding: 16px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    color: #3d3d4d;
    transition: background-color 0.5s;

    img.avatar-img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      display: block;
    }

    div {
      flex: 1;
      padding: 0 24px;

      h5 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 4px;
      }

      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #a8a8b3;
      }
    }

    svg {
      color: #c9c9d4;
      height: 25px;
      width: 25px;
      transition: transform 0.5s;
    }

    &:hover {
      background: ${shade(0.01, '#fff')};

      svg {
        transform: translateX(10px);
      }
    }
  }
`;
