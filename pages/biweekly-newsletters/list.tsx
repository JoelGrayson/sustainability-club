export { default } from '.'; //same as index.tsx

// List (modeled after the perspective)
export type biweeklyEmailT={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    
}

export const list: biweeklyEmailT[]=[
// shell files insert new biweeklyEmail here
    { title: 'Sustainability Affecting Riverdalians', hyphenatedTitle: 'sustainability-affecting-riverdalians', date: new Date('Sep 29, 2023') },
].sort((a, b)=>b.date.getTime()-a.date.getTime());

