import { useEffect } from 'react';
import { emitter } from '@/agentSdk';

export const HelloWorldPage = () => {
    useEffect(() => {
        // Trigger user-greeted event when component mounts
        emitter.emit({
            agentId: '27dafca6-3e4d-461e-a350-ee5638c79131',
            event: 'user-greeted',
            payload: { message: 'User has been greeted with Hello World' }
        });

        // Also trigger the general everything event
        emitter.emit({
            agentId: '27dafca6-3e4d-461e-a350-ee5638c79131',
            event: 'everything',
            payload: { action: 'hello-world-page-loaded', timestamp: new Date().toISOString() }
        });
    }, []);

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>Hello World!</h1>
                <p className='text-xl text-gray-600 dark:text-gray-300'>Welcome to your React app</p>
            </div>
        </div>
    );
};
