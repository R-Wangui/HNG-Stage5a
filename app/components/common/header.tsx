import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className=" flex gap-10 mt-4 ml-6 mr-4">
        <Image
        src="/images/small logo.svg"
        alt="linkshare logo"
        width={52}
        height={32}
        />
        <div className="flex">
            <Image
            src="/images/links.svg"
            alt="linkshare logo"
            width={74}
            height={42}
            />
            <Image
            src="/images/profile-details.svg"
            alt="linkshare logo"
            width={74}
            height={42}
            />
        </div>
        <Image
        src="/images/preview.svg"
        alt="preview logo"
        width={52}
        height={42}
        />
    </div>
  );
}

export default Header;
