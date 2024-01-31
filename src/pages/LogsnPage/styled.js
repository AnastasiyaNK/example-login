import styled from 'styled-components';
import BottleSing from '../../assets/images/bottle-sign-in-desk.png';
import BubbleFon from '../../assets/images/bubble-desktop.png';
import BottleSingTab from '../../assets/images/bottle-sign-in-tab.png';

export const StyledLoginPage = styled.div`
  padding: 12px 0px;
  background: #fff;
  max-width: 1440px;
  width: 100%;
  hight: 100%;
  background-size: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${BottleSing}), url(${BubbleFon});

  .block-right {
    position: relativ;
  }
  // @media (min-width: 768px) and (max-width: 1439px) {
  //   margin-top: 0;
  //   width: 100%;
  //   height: 548px;
  //   background-position: 80px;
  //   z-index: -1;
  //   background-image: url(${BottleSingTab});
  // }
`;
