export { default } from '.'; //same as index.tsx

export const list: Newsletter[]=
([
    { title: 'Sustainability Affecting Riverdalians', date: new Date('Sep 29, 2023') },
    { title: 'Meeting with Think Zero', date: new Date('Sep 29, 2023') },
    { title: 'Shopping Sustainably', date: new Date('Sep 29, 2023') },
    { title: 'Takeout Food Containers', date: new Date('Sep 29, 2023') },
    { title: 'New Zero-Carbon Energy', date: new Date('Aug 15, 2022') },
    { title: 'Hydroponics', date: new Date('Jan 29, 2024') },

] as RawNewsletter[])
    .map(el=>{
        return {
            ...el,
            hyphenatedTitle: el.hyphenatedTitle || el.title.toLowerCase().replace(/ /g, '-')
        };
    })
    .sort((a: Newsletter, b: Newsletter)=>b.date.getTime()-a.date.getTime());


export type Newsletter={
    title: string;
    hyphenatedTitle: string;
    date: Date;
}
type RawNewsletter={
    title: string;
    hyphenatedTitle?: string;
    date: Date;
}

