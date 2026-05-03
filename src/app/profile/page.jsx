'use client';
import { UpdateUserModal } from '@/components/updateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className='my-20'>
            <Card className='border max-w-96 mx-auto flex flex-col items-center'>
                <Avatar className='w-30 h-30'>
                        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                      <h2 className='text-2xl font-bold'>{user?.name}</h2>
                      <p  className='text-lg text-muted'>{user?.email}</p>

                      <UpdateUserModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;