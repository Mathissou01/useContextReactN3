type Props = {
  onClick: () => void;
};

const Footer = ({ onClick }: Props) => {
  return <div onClick={onClick}>FOOTER</div>;
};

export default Footer;
