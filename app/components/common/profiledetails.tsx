'use client'
import React from 'react'
import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FileImage } from "lucide-react"
import Image from 'next/image'
import { Input } from '../../@/components/ui/input'
import { Label } from '../../@/components/ui/label'
import { Button } from '../../@/components/ui/button'

const Profile: React.FC  = () => {
    const [user] = useAuthState(auth);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(user?.email || '');
    const [profilePic, setProfilePic] = useState<File | null>(null);

    const handleSave = async () => {
        if (!user) return;
    
        const userDoc = doc(db, 'users', user.uid);
        await setDoc(userDoc, {
          firstName,
          lastName,
          email,
          profilePic: profilePic ? URL.createObjectURL(profilePic) : '',
        });
    
        // Optionally redirect to the profile page
        window.location.href = '/preview';
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setProfilePic(e.target.files[0]);
        }
    };

  return (
    <main className="m-4">
        <div className="m-6">
            <p className="text-2xl font-bold text-left mt-6 mb-2">Profile Details</p>
            <p className="text-base text-left">
                Add your details to create a personal touch to your profile.
            </p>
            <div className="flex flex-col items-center justify-center w-full p-4 mt-10 bg-muted rounded-lg">
                {/* {preview ? (
                <Image 
                    src={preview} 
                    alt="Profile Preview" 
                    className="w-24 h-24 bg-muted rounded-full" 
                /> ) : (
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <FileImage className="text-primary" size={48} />
                </div>
                )} */}
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <Image 
                        src="/images/image-logo.svg"
                        alt='image icon'
                        className="text-primary" 
                        width={40} 
                        height={40}
                    />
                </div>
                <Label className="mt-2 text-primary cursor-pointer">
                    + Upload Image
                    <Input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </Label>
                <p className="text-xs text-gray-600 mt-1">Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
            <div>
                <form className="w-full mt-6 space-y-4 bg-background">
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">First name*</Label>
                        <Input 
                            type="text" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                            placeholder="Ben"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">Last name*</Label>
                        <Input 
                            type="text" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                            placeholder="Wright" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-sm text-gray-600">Email</Label>
                        <Input 
                            type="email" 
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:border-purple-500" 
                            placeholder="ben@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <Button 
                onClick={handleSave} 
                className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg"
                >
                Save
            </Button>
        </div>
    </main>
  )
}

export default Profile