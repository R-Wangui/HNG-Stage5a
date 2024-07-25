'use client';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { useRouter } from 'next/navigation';
import { Button } from '../../../../@/components/ui/button';
import { Input } from "../../../../@/components/ui/input"
import { Label } from "../../../../@/components/ui/label"
import Image from 'next/image';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError('');
      router.push('/landing')
    } catch (error) {
      setError((error as Error).message);
      console.log(error);
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
            <h5 className="text-2xl font-bold mb-2">Create account</h5>
            <p>Let’s get you started sharing your links!</p>
            <div className="mt-10">
                <form onSubmit={handleSignup} className="w-full mt-6 space-y-4 bg-background">
                    <div className="flex flex-col">
                        <Label className="text-sm text-foreground">Email</Label>
                        <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500"
                        />
                        {/* <Image
                            src="/images/mail-icon.svg"
                            alt="linkshare logo"
                            width={16}
                            height={16}
                            className="absolute left-8 top-40% -50% text-foreground"
                        /> */}
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-foreground">Password</Label>
                        <Input
                        type="password"
                        placeholder="At least .8 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-foreground">Confirm Password</Label>
                        <Input
                        type="password"
                        placeholder="At least .8 characters"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div>
                        {error && <p className="textdestructive">{error}</p>}
                        <Button 
                          type="submit"
                          className="rounded-lg block mt-10 mb-6 w-[311px] py-3 px-7 bg-primary text-white" size='lg'>
                          Create new account
                        </Button>
                    </div>
                </form>
                {/* <div>
                    {error && <p className="textdestructive">{error}</p>}
                    <Button 
                      type="submit"
                      className="rounded-lg block mt-10 mb-6 w-[311px] py-3 px-7 bg-primary text-white" size='lg'>
                      Create new account
                    </Button>
                </div> */}
                <div className="text-center text-base">
                <span>Already have an account? <span className="text-primary">Login</span></span>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Signup;
