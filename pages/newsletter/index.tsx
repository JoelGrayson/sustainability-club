import Page from '@/components/PageContainer';
import Link from 'next/link';
import { list } from './list';
import jdate from 'joeldate';

export default function biweeklyEmails() {
    return <Page>
        <h1 className='text-center pb-8'>biweeklyEmails</h1>
        {/* <biweeklyEmailsList /> */}
    </Page>;
}

export function biweeklyEmailsList() {
    const upcoming=list.filter(biweeklyEmail=>biweeklyEmail.date>=new Date());
    const past=list.filter(biweeklyEmail=>biweeklyEmail.date<new Date());
    return <>
        {upcoming.length>0 && <>
            <h3>Upcoming biweeklyEmails</h3>
            <ul>
                {upcoming.map(biweeklyEmail=>{
                    return <li key={biweeklyEmail.hyphenatedTitle}>
                        <Link href={`/newsletter/${biweeklyEmail.hyphenatedTitle}`}>{
                            biweeklyEmail.title.split(' ')[0]===jdate(biweeklyEmail.date) ||
                            biweeklyEmail.title.split(' ')[0]===jdate(biweeklyEmail.date, true)
                                ? `${jdate(biweeklyEmail.date)} - ${biweeklyEmail.title.split(' ').slice(1).join(' ')}` //title already includes date
                                : `${jdate(biweeklyEmail.date)} - ${biweeklyEmail.title}`
                        }</Link>
                    </li>;
                })}
            </ul>
            <h3>Past biweeklyEmails</h3>
        </>}
        <ul>
            {past.map(biweeklyEmail=>{
                return <li key={biweeklyEmail.hyphenatedTitle}>
                    <Link href={`/newsletter/${biweeklyEmail.hyphenatedTitle}`}>{
                        biweeklyEmail.title.split(' ')[0]===jdate(biweeklyEmail.date) ||
                        biweeklyEmail.title.split(' ')[0]===jdate(biweeklyEmail.date, true)
                            ? `${jdate(biweeklyEmail.date)} - ${biweeklyEmail.title.split(' ').slice(1).join(' ')}` //title already includes date
                            : `${jdate(biweeklyEmail.date)} - ${biweeklyEmail.title}`
                    }</Link>
                </li>;
            })}
        </ul>
    </>;
}
