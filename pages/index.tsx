import Link from 'next/link';
import Page from '../components/PageContainer';
import { list } from './newsletter/list';

export default function Home() {
    return <Page bottomPadding>
        <h1>Riverdale Sustainability Club</h1>

        <div>Welcome to the official Riverdale Country School Sustainability Club Website! Here you will find various information related to our club and its projects. You can browse our various biweekly newsletters, learn about upcoming and past projects, and sign up for different sustainability-related events! Feel free to also follow and browse our official sustainability instagram account linked below!</div>
        <br /><br />
        
        <h3>Issues</h3>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            justifyItems: 'center',
            gap: 20
        }}>
            {list.map((el, i)=>{
                return <Link key={i} href={'/newsletter/'+el.hyphenatedTitle}>
                    {/* {JSON.stringify(el)} */}
                    <div className='p-3 border-gray-400 border-[1px] rounded-xl shadow-md bg-gray-50 hover:shadow-slate-300 hover:shadow-lg cursor-pointer grid place-items-center text-center' style={{
                        width: 250,
                        height: 220
                    }}>
                        {el.title}
                    </div>
                </Link>
            })}
        </div>

        <h3>Explanation of Climate Change</h3>

    </Page>;
}
