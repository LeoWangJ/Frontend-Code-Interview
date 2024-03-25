import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import { IoMenu } from 'react-icons/io5';
import useDebounce from '@/hooks/useDebounce';
import Menu from './Menu';
const Layout = ({ children }: { children: React.ReactNode }) => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = useDebounce(() => {
        const currentScrollY = window.scrollY;
        setShowHeader(lastScrollY < currentScrollY);

        if (timeoutId) clearTimeout(timeoutId);

        const newTimeoutId = window.setTimeout(() => {
            setShowHeader(true);
        }, 100);

        setTimeoutId(newTimeoutId);
        setLastScrollY(currentScrollY);
    }, 16);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, timeoutId]);


    return (
        <Fragment>
            <Head>
                <title>Jedi Software</title>
            </Head>
            <header className={`${showHeader ? 'top-0' : '-top-full'} fixed left-0 right-0 bg-amber-500 text-white p-4 z-40 transition-all duration-300`}>
                <div className="container flex mx-auto justify-between items-center">
                    Jedi Software
                    <IoMenu onClick={() => setIsOpen(true)} className='cursor-pointer' />
                </div>
            </header>
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <main className="bg-amber-50 pt-16">{children}</main>
        </Fragment>
    );
};

export default Layout;