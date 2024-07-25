'use client';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '../../../../@/components/ui/button';
import { Input } from "../../../../@/components/ui/input"
import { Label } from "../../../../@/components/ui/label"

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
      router.push('/landing');
    } catch (error) {
      setError((error as Error).message);
    }
  };
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
              <form onSubmit={handleLogin} className="w-full mt-6 space-y-4 bg-background">
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">Email</Label>
                        <Input 
                            type="email" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                            placeholder="alex@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">Password</Label>
                        <Input 
                            type="password" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                      {error && <p className="text-destructive">{error}</p>}
                      <Button type="submit" className="rounded-lg block mt-10 mb-6 w-[311px] py-3 px-7 bg-primary text-white" size='lg'>
                        Login
                      </Button>
                    </div>
              </form>  
            </div>
            {/* <div>
              {error && <p className="text-destructive">{error}</p>}
              <Button type="submit" className="rounded-lg block mt-10 mb-6 w-[311px] py-3 px-7 bg-primary text-white" size='lg'>
                Login
              </Button>
            </div> */}
            <div className="text-center text-base">
              <span>Don’t have an account? <span className="text-primary">Create account</span></span>
            </div>
        </div>
    </main>
  );
}

export default Login;