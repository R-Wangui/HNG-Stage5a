import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className=" flex gap-10 mt-4 ml-6 mr-4 lg:m-6 ">
        <Image
        src="/images/small logo.svg"
        alt="linkshare logo"
        width={52}
        height={32}
        />
        <div className="flex justify-center lg:mx-[383.5px]">
            <Image
            src="/images/links.svg"
            alt="links logo"
            width={74}
            height={42}
            />
            <Image
            src="/images/profile-details.svg"
            alt="profile logo"
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
