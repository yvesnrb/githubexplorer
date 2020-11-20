import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;

  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${shade(0.3, '#a8a8b3')};
    }

    svg {
      margin-right: 12px;
      height: 16px;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: start;
  color: #3d3d4d;
  margin-bottom: 40px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 32px;

    h5 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: #737380;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 80px;

  div + div {
    margin-left: 80px;
  }

  h5 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  p {
    color: #6c6c80;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const IssuesContainer = styled.div`
  a + a {
    margin-top: 16px;
  }

  a {
    padding: 28px 24px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    color: #3d3d4d;
    transition: background-color 0.5s;

    div {
      flex: 1;
      padding: 0 24px;

      h5 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 8px;
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
