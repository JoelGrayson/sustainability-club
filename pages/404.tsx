import { useRouter } from 'next/router';
import Page from '../components/PageContainer';
import Link from 'next/link';
import { biweeklyEmailsList } from './biweekly-newsletters';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const { asPath: url }=useRouter();
    const [title, setTitle]=useState<string>('404 Not Found');
    const [content, setContent]=useState<any>(<Link href="/"><button>Go Home</button></Link>);

    useEffect(()=>{
        if (url.startsWith('/newsletter/')) {
            setTitle('biweeklyEmail Not Found');
            setContent(<>
                <h1 className='text-center'></h1>
                <p>We could not find that biweeklyEmail. Here is the list of biweeklyEmails:</p>
                <biweeklyEmailsList />
            </>);
        }
    }, [url]);

    return <Page title='404 Not Found'>
        <h1 className='text-center'>{title}</h1>
        {content}
    </Page>;
}
