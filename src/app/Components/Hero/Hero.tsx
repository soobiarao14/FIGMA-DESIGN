import Image from 'next/image';
import React from 'react';
import imageee from "../../imageee.jpg";

const Hero = () => {
  return (
      <div className="h-screen mt-32 flex flex-col lg:flex-row items-center lg:items-start">
    {/* Left site */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-20">
      <div className="font-bold text-3xl md:text-4xl mt-10 lg:mt-20 text-center lg:text-left">
        <h1>IMPECCABLE</h1>
      <h1> CRAFTSMANSHIP AND</h1>
       <h1>FINESSE</h1>
       </div>
      
      <p className="mt-4 text-center lg:text-left font-semibold text-sm text-[#A29875] w-full lg:w-[550px]">
{/* 
      mt-4: This adds a margin-top of 1rem (or 16px).
text-center: This centers the text horizontally within the element.
lg:text-left: For large screens (lg breakpoint, typically starting at 1024px), this changes the text alignment to left.
font-semibold: This applies a semi-bold font weight to the text.
text-sm: This sets the font size to small (typically 0.875rem or 14px).
text-[#A29875]: This sets the text color to a custom hex color (#A29875), which is a muted, light brown/olive color.
w-full: This sets the element's width to 100% of its parent container.
lg:w-[550px]: For large screens (lg breakpoint), this changes the width of the element to 550px. */}
      An example of intricate workmanship and detail, elegant necklaces and 
      long and short chains form a part of our desirable collection.
      </p>
   <button className="mt-8 lg:mt-10 text-white  bg-[#A29875] weight-[200px] md:w-[250px] lg:w-[288px] h-[50px] rounded-lg hover:bg-[#b8aa75]">
        Explore Now 
       </button>
{/* 
       Let's break down the classes you're using in this button:

mt-8: Adds a margin-top of 2rem (or 32px) on small screens.
lg:mt-10: On large screens (lg breakpoint, typically starting at 1024px), this increases the margin-top to 2.5rem (or 40px).
text-white: This sets the text color of the button to white.
bg-[#A29875]: This sets the background color to a custom olive-brown shade (#A29875).
weight-[200px]: This seems to be an invalid or incorrect class. It likely should be w-[200px] for setting the button's width. If the intent is to set the width, replace weight with w.
md:w-[250px]: On medium screens (md breakpoint, starting at 768px), the button width changes to 250px.
lg:w-[288px]: On large screens (lg breakpoint), the button width changes to 288px.
h-[50px]: This sets the button height to 50px.
rounded-lg: This applies large rounded corners to the button.
hover:bg-[#b8aa75]: This changes the button's background color to a slightly lighter shade (#b8aa75) when the user hovers over it. */}




      </div>
      {/* right site */}
{/* image code */}
      <div className="w-[380.1px]md:w-[400px]lg:w-[462px] h-auto mt-10 lg:mt-0 lg:ml-16">

 {/* Tailwind CSS class for styling an element. */}
{/* 
w-[380.1px]: This sets the width of the element to 380.1px.
md:w-[400px]: For medium screen sizes (md breakpoint, typically starting at 768px), the width changes to 400px.
lg:w-[462px]: For large screen sizes (lg breakpoint, typically starting at 1024px), the width changes to 462px.
h-auto: This sets the height of the element to auto, meaning it adjusts based on the content.
mt-10: This adds a margin-top of 2.5rem (or 40px).
lg:mt-0: For large screens (lg breakpoint), the margin-top is set to 0 (removes the margin).
lg:ml-16: For large screens, this adds a margin-left of 4rem (or 64px). */}
      <Image 
        src="/imageee.jpg"
        alt="Image description"
        width={380}  
        height={400} 
      />
      </div>
      </div>
  
  );
}
export default Hero;

