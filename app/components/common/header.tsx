import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className=" flex gap-10 mt-4 ml-6 mr-4 lg:m-6 ">
      <Link href="/">
        <Image
          src="/images/small logo.svg"
          alt="linkshare logo"
          width={52}
          height={32}
          />
      </Link>
      <div className="flex justify-center lg:mx-[383.5px]">
        <Link href="/addlinks">
          <Image
            src="/images/links.svg"
            alt="links logo"
            width={74}
            height={42}
          />
        </Link>
        <Link href="/userprofile">
          <Image
            src="/images/profile-details.svg"
            alt="profile logo"
            width={74}
            height={42}
          />
        </Link>
      </div>
      <Link href="/preview">
        <Image
          src="/images/preview.svg"
          alt="preview logo"
          width={52}
          height={42}
          />
      </Link>
    </div>
  );
}

export default Header;
