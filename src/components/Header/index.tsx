import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import newLogo from '../../assets/images/new-logo.png';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <div className="logoContainer">
        <img src={newLogo} alt="cardapiodigital" />
        Cardápio Digital
      </div>
      <nav>
        <div>
          <button
            type="button"
            onClick={() => {
              /* TODO OPEN MODAL */
              openModal();
            }}
          >
            <div className="text">Novo Prato</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
