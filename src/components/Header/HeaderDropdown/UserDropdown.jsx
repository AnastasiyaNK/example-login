import { useEffect } from 'react';
import { Button, ModalWrapper, ModalOverlay } from './UserDropdown.styled';
import Icons from 'assets/icons/cog-6-tooth.svg';
import Icon from 'assets/icons/arrow-right-on-rectangle.svg';
// import { useDispatch } from 'react-redux';
// import { setSettingsModal } from '../../../redux/modalsReduser';

export const UserDropdown = ({ isOpen, onOpenLogoutModal, onClose }) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);

    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  if (!isOpen) return;

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <Button
          type="button"
          onClick={() => {
            // dispatch(setSettingsModal(true));
            onClose();
          }}
        >
          <img src={Icons} alt="Setting" />
          <p>Setting</p>
        </Button>
        <Button
          type="button"
          onClick={() => {
            onClose();
            onOpenLogoutModal();
          }}
        >
          <img src={Icon} alt="Setting" />
          <p>Log out</p>
        </Button>
      </ModalWrapper>
    </>
  );
};

// import { useEffect } from 'react';
// import { StyledModalOverlay } from './UserDropdown.styled';
// import Icons from 'assets/icons/cog-6-tooth.svg';
// import Icon from 'assets/icons/arrow-right-on-rectangle.svg';
// import { useDispatch } from 'react-redux';

// export const UserDropdown = ({ isOpen, onOpenLogoutModal, onClose }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const close = e => {
//       if (e.code === 'Escape') {
//         onClose();
//       }
//     };
//     document.addEventListener('keydown', close);

//     return () => {
//       document.removeEventListener('keydown', close);
//     };
//   }, [onClose]);

//   if (!isOpen) return;

//   return (
//     <>
//       <StyledModalOverlay onClick={onClose} />
//       <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
//         <button
//           className="modal-btn"
//           type="button"
//           onClick={() => {
//             //    dispatch(setSettingsModal(true));
//             onClose();
//           }}
//         >
//           <img src={Icons} alt="Setting" />
//           <p>Setting</p>
//         </button>
//         <button
//           className="modal-btn"
//           type="button"
//           onClick={() => {
//             onClose();
//             onOpenLogoutModal();
//           }}
//         >
//           <img src={Icon} alt="Setting" />
//           <p>Log out</p>
//         </button>
//       </div>
//     </>
//   );
// };
