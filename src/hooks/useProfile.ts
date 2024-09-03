import { useState, useEffect } from 'react';
import { useInitData } from '@telegram-apps/sdk-react';
import { User } from '@/types';

const useTelegramUserProfile = () => {
    const [userProfile, setUserProfile] = useState<null | User>(null);
    const initData = useInitData();

    useEffect(() => {
        if (!initData) {
            return;
        }
        setUserProfile(initData?.user || null);
    },
        [initData]);

    return { userProfile };

};

export default useTelegramUserProfile;
