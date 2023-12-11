import BiweeklyEmailContainer from '@/components/BiweeklyEmailContainer';

export default function Email() {
    return <BiweeklyEmailContainer date={'Sep 29, 2023'} title={'Sustainability Affecting Riverdalians'}>
        <p>Dear upper school students and faculty,</p>
        <p></p>
        <p>Today's weather was good timing (or perhaps bad timing) for the first sustainability club biweekly newsletter. The goal of this newsletter is to highlight different aspects of sustainability affecting us as Riverdalians. This time, we will focus on the main three effects of climate change on NYC:</p>
        <p>1.5x more extreme precipitation during rainstorms (source)</p>
        <p>8–30 inches of sea level rise by 2050 (source)</p>
        <p>Increased extreme heat and coastal storms (source)</p>
        <p>To adapt, NYC needs flood resiliency projects to prevent storms from turning into flooding. For the third problem, increasing the number of trees and using reflective materials in infrastructure will reduce urban heat. Besides combating climate change, adaptive solutions will be needed to deal with the current reality.</p>
        <p></p>
        <p>Best,</p>
        <p>The Sustainability Club</p>
   </BiweeklyEmailContainer>;
}
