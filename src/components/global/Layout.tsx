import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Header } from '..';

const Layout: FC = ({children}) => {
    const user = useSelector((state: RootStateOrAny) => state?.auth?.userData)
    const router = useRouter();
   
   
     useEffect(() => {
     if (!user) {
      router.push('/login') 
     }
     },[user])
   
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;