import { useState, useEffect } from 'react';
import styles from '../styles/logo/logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    const [hovering, setHovering]=useState(false);
    const [deg, setDeg]=useState(0);

    useEffect(()=>{ //rotating except when onHover
        const id=setInterval(()=>{
            if (!hovering)
                setDeg(deg=>deg+0.5)
            else
                setDeg(deg=>deg)
        }, 5);
        return _=>clearInterval(id);
    }, [hovering]);
    
    return <Link href='/'>
        <img
            src='/images/logo.gif'
            width={80}
            height={80}
        />
    </Link>;

}
