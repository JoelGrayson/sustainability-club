import Logo from './Logo';
import styles from '../styles/header/header.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { list as biweeklyEmailsList } from '@/pages/newsletter/list';
import { useState } from 'react';

export default function Header({title, children}: {title?: String, children?: any}) { //takes in parameters for <Head>
    const { route }=useRouter();
    // console.log({route, asPath, pathname});
    
    return <>
        <Head> {/* Default head options */}
            <title>{title ? `${title} | Riverdale Sustainability Club`: 'Riverdale Sustainability Club'}</title>
            <link rel="icon" href="/favicon.ico" type='image/x-icon' />
            {children}
        </Head>

        <header className={styles.header}>
            {/* <div style={{
                maxWidth: 800
            }}> */}
                <nav>
                    <Logo />
                    <ul className='m:grid m:grid-cols-3 m:grid-rows-2 m:place-items-center'>
                        {/* w-full m:p-0 m:grid grid-cols-3 grid-rows-2 */}
                        <Li href="/">Home</Li>
                    </ul>
                </nav>
            {/* </div> */}
        </header>
    </>;

    type titleUrlT={ title: string; url: string };
    function Li({children, href, dropdown}: {children: any, href: string; dropdown?: titleUrlT[] }) {
        const [open, setOpen]=useState(false);

        return <div className='relative'>
            <Link href={href}>
                <li style={{
                    marginRight: dropdown ? 0 : undefined,
                    display: 'inline-block'
                }}>
                    <button className='m:!rounded-[3px]' style={{
                        backgroundColor: route===href ? '#90ee90' : undefined,
                        borderColor: route===href ? 'darkgreen' : undefined,
                        borderTopRightRadius: dropdown ? 0 : undefined,
                        borderBottomRightRadius: dropdown ? 0 : undefined
                    }}>
                        {children}
                    </button>
                </li>
            </Link>
            { dropdown && <>
                <button
                    className='m:hidden'
                    style={{
                        // display: 'inline-block',
                        marginRight: '.2rem',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderLeft: 'none',
                    }}
                    onClick={()=>setOpen(!open)}
                >
                    {open ? '^' : 'v'}
                </button>
            </> }
            { open && dropdown && <div className='absolute top-[2.3rem] left-0 w-[300px] m:w-[190px] m:mt-3'>
                {dropdown.map((item, index)=>{
                    return <div className='w-full bg-white hover:bg-gray-300 p-3' style={{
                        border: '1px solid black',
                        borderTopWidth: index===0 ? 1 : 0,
                    }} key={item.title}>
                        <Link href={`${href}/${item.url}`}>{item.title}</Link>
                    </div>;
                })}
            </div> }
        </div>;
    }
}

