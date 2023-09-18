import styled from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styled['attribution']}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noopener noreferrer'>
        Frontend Mentor
      </a>
      . Coded by <a href='https://github.com/HauroDev'>Victor Javier</a>.
    </footer>
  );
};

export default Footer;
