import React from 'react'
import Header from '../Components/Header'
import HeroSlider from '../Components/HeroSlider'
import MarqueeSlider from '../Components/MarqueeSlider'
import LatestBooks from '../Components/LatestBooks'
import Steps from '../Components/Steps'
import DeliveryZone from '../Components/DeliveryZone'
import Future from '../Components/Future'
import Testimonial from '../Components/Testimonial'
import ReadyToDiveIn from '../Components/ReadyToDriveIn'
import NewsletterSignup from '../Components/NewsletterSignup'
import BlogTips from '../Components/BlogTips'
import FAQSection from '../Components/FAQSection'
import { useAuth } from '../Context/AuthContext'
// import Footer from '../Components/Footer'

const HomePage = () => {
    const {user} = useAuth();
    if(user) console.log('home page user:', user.role);
return (
<div className="font-display bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-200 min-h-screen w-full overflow-x-hidden">
{/* <div className='fixed top-0 w-full bg-white/60 dark:bg-background-dark/60 backdrop-blur-sm z-50'>
{/* <Header /> 
</div> */}
<HeroSlider />
<MarqueeSlider />
<LatestBooks />
<Steps />
<DeliveryZone />
<Future />
<Testimonial />
<ReadyToDiveIn />
<NewsletterSignup />
<BlogTips />
<FAQSection />
{/* <Footer /> */}
</div>
);
}

export default HomePage
