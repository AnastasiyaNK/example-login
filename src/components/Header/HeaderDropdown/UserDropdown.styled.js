import styled from 'styled-components';

export const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, 0);
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  z-index: 100;

  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  &:hover,
  &:focus {
    & svg {
      fill: #ff9d43;
    }
    & p {
      color: #ff9d43;
    }
  }

  & svg {
    fill: #407bff;
    transition: fill 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  & img {
    max-width: none;
  }

  & p {
    width: 54px;
    color: #407bff;
    font-size: 16px;
    line-height: calc(20 / 16);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// import styled from 'styled-components';

// export const StyledModalOverlay = styled.aside`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: transparent;
//   z-index: 10;

//   .modal-wrapper {
//     position: absolute;
//     top: 100%;
//     left: 100%;
//     transform: translate(-100%, 0);
//     display: inline-flex;
//     padding: 16px;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 16px;
//     z-index: 100;

//     border-radius: 10px;
//     background-color: #ffffff;
//     box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

//     .modal-btn {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 8px;
//       border: none;
//       background-color: #ffffff;
//       cursor: pointer;

//       &:hover,
//       &:focus {
//         & svg {
//           fill: #ff9d43;
//         }
//         & p {
//           color: #ff9d43;
//         }
//       }

//       & svg {
//         fill: #407bff;
//         transition: fill 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//       }

//       & img {
//         max-width: none;
//       }

//       & p {
//         width: 54px;
//         color: #407bff;
//         font-size: 16px;
//         line-height: calc(20 / 16);
//         transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//       }
//     }
//   }
// `;
