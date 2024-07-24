
import Image from 'next/image';
import Cards from '@components/cards';
import { Button } from '../../../@/components/ui/button';

const Login: React.FC = () => {
  return (
    <main className="lg:flex lg:justify-center">
        <div className="mt-8 ml-8">
            <Image
            src="/images/Linkshare Logo.svg"
            alt="linkshare logo"
            width={183}
            height={40}
            />
        </div>
        <div className="mt-16 mx-8">
            <h5 className="text-2xl font-bold mb-2">Login</h5>
            <p>Add your details below to get back into the app</p>
            <div className="mt-10">
              <Cards />  
            </div>
            <div>
            <Button className="rounded-lg block mt-10 mb-6 w-[311px] py-3 px-7 bg-primary text-white" size='lg'>
              Login
            </Button>
            </div>
            <div className="text-center text-base">
              <span>Don’t have an account? <span className="text-primary">Create account</span></span>
            </div>
        </div>

    </main>
  );
}

export default Login;