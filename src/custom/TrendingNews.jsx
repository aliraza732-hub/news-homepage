import React from "react";

const newsItems = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const TrendingNews = () => {
  return (
    <aside
      style={{ backgroundColor: 'var(--very-dark-blue)' }}
      className="text-[--off-white] p-6 space-y-6 ">
      <h2 className="text-[ text-2xl font-bold"
      style={{color:'var(--soft-orange)'}}
      >New</h2>
      {newsItems.map((item, index) => (
        
        <div
          key={index}
          className="border-b pb-6 last:border-none"
          style={{ borderColor: 'var(--dark-grayish-blue)' }}
        >
          <h3 
          
          className="font-bold text-[#fffdfa] text-lg cursor-pointer hover:text-[#e9ab53]">
            {item.title}
          </h3>
          <p
          style={{ color: 'var(--grayish-blue)' }}
          className="text-[--grayish-blue] mt-2 text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </aside>
  );
};

export default TrendingNews;
