import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className="mt-8 ml-8">
        <Image
        src="/images/small logo.svg"
        alt="linkshare logo"
        width={183}
        height={40}
        />
    </div>
  );
}

export default Header;
