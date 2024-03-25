import React, { Fragment } from 'react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import { FaCheese } from 'react-icons/fa';

interface MenuProps {
    isOpen: boolean;
    isMask?: boolean;
    onClose: () => void;
}

const menuRoutes = [
    { name: 'Home', path: '/', icon: IoHome },
    { name: 'Find the Cheese', path: '/find-the-cheese', icon: FaCheese },
];

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, isMask = true }) => {
    if (!isOpen) return null;

    return (
        <Fragment>
            <div className="bg-white h-full max-w-xs shadow-lg w-full transform transition-transform top-0 right-0 z-50 translate-x-0 fixed">
                <IoMdClose className="cursor-pointer mt-5 mr-8 text-lg top-0 right-0 absolute" onClick={onClose} />
                <ul className='mt-10'>
                    {
                        menuRoutes.map((route, index) => (
                            <li key={index} className="py-2 px-4 hover:bg-amber-200 ">
                                <Link href={route.path} className='flex items-center' onClick={onClose}>
                                    <route.icon className='mr-2 text-amber-400' />
                                    {route.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                isMask && (
                    <div className="bg-black h-full w-full opacity-50 top-0 left-0 z-40 fixed" onClick={onClose}></div>
                )
            }
        </Fragment>
    );
};

export default Menu;
