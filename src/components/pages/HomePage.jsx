import Container from 'react-bootstrap/Container';

import css from '../pages/PagesStyles.module.css';

const HomePage = () => {
  return (
    <Container fluid="sm" className={css.cardContainer}>
      <div>
        <h1
          style={{
            fontSize: '34px',
            color: '#0d6efd',
            borderBottom: '2px solid darkgray',
            width: '500px',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '100px',
          }}
        >
          Welcome to the Phonebook!
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '30px',
            }}
          >
            Your personal contact app!
          </h2>
          <p
            style={{
              fontSize: '24px',
            }}
          >
            Please,{' '}
            <b
              style={{
                color: 'green',
              }}
            >
              {' '}
              Registration{' '}
            </b>{' '}
            or{' '}
            <b
              style={{
                color: 'red',
              }}
            >
              {' '}
              Login
            </b>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
