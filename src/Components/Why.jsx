import React from 'react';

export default function Why({ img, title, desc, descr = "" }) {
  return (
    <div id='why' className="w-[500px] p-3  text-white rounded-lg flex items-center hover:bg-hover cursor-pointer hover:text-black transition-colors duration-300">
      <img src={img} alt="" className="w-24" />
      <div className="ml-5">
        <h4 className="font-semibold" id='textt'>{title}</h4>
        <p className="text-sm opacity-70">{desc}</p>
        {descr && <p className="text-sm opacity-70">{descr}</p>}
      </div>
    </div>
  );
}
