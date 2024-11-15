import React from 'react';

const Header = () => {
  return (
    
    
     <div className="bg-[#A29875] h-auto w-full text-[#FFFFFF] flex flex-col md:flex-row justify-between items-center px-4 md:px-9 py-4 space-y-4 md:space-y-0">

{/* Tailwind info Header:
bg-[#A29875]: Background color with a custom hex value (#A29875).
h-auto: Height is auto (this will adjust based on content).
w-full: Width is 100% of the parent container.
text-[#FFFFFF]: Text color is white.
flex: Display is flexbox.
flex-col: Flexbox direction is column (by default).
md:flex-row: On medium screens and above (md), change flex direction to row.
justify-between: Justify content with space between items.
items-center: Align items to the center vertically.
px-4: Padding of 1rem (16px) on the left and right for small screens.
md:px-9: Padding of 2.25rem (36px) on the left and right for medium screens and above.
py-4: Padding of 1rem (16px) on the top and bottom.
space-y-4: Space of 1rem (16px) between child elements vertically (for small screens). */}
{/* md:space-y-0: No vertical space between child elements on medium screens and above. */}
        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[60px] pt-2 md:pt-0">
        MANZZARI
      </h1>
      {/* Font Size:
The text-3xl class corresponds to a font size of 3rem, which is used for the default (small screen).
The md:text-5xl class is converted to font-size: 5rem for medium screens (from 768px wide).
The lg:text-[60px] class is converted to font-size: 60px for large screens (from 1024px wide).
Padding:
The pt-2 class corresponds to padding-top: 0.5rem, which applies to the smallest screen sizes.
The md:pt-0 class removes the padding on medium screens and above.
Font Weight and Color:
font-bold corresponds to font-weight: bold.
text-white corresponds to color: white. */}
      </div>
      
    
  );
}

export default Header; 
