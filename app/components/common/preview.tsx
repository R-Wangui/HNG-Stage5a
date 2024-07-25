'use client'
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react'
import { Button } from '../../@/components/ui/button'
import Image from 'next/image';

const Preview:React.FC = () => {
    const [user] = useAuthState(auth);
    const [profileData, setProfileData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const userDoc = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userDoc);
                if (docSnap.exists()) {
                setProfileData(docSnap.data());
                } else {
                console.log('No such document!');
                }
            }
        };
        fetchData();
    }, [user]);

    if (!profileData) {
        return <div>Loading...</div>;
    }
  return (
    <main>
        <div className="w-full flex gap-4">
            <Button className="w-full px-4 py-2 mt-4 ml-6 text-primary border border-primary rounded-lg" variant='outline'>Back to editor</Button>
            <Button className="w-full px-4 py-2 mt-4 mr-4 text-white bg-primary rounded-lg">Share Link</Button>
        </div>
        <div></div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">User Profile</h2>
            {profileData.profilePic && (
                <Image src={profileData.profilePic} alt="Profile" className="w-32 h-32 rounded-full" />
            )}
            <div className="flex flex-col items-center w-full p-4 mt-4">
                <p className="text-lg font-medium">{profileData.firstName} {profileData.lastName}</p>
                <p className="text-gray-600">{profileData.email}</p>
            </div>
        </div>
    </main>
  )
}

export default Preview