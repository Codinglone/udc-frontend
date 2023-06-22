import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Partner 1',
      logo: 'https://rdb.rw/wp-content/uploads/2023/03/RDB_logo.png',
      website: 'https://www.partner1.com',
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: 'https://www.reg.rw/fileadmin/_processed_/6/1/csm_photo_history-57525__1__f0c53898aa.png',
      website: 'https://www.partner2.com',
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/a/a4/FA_Ruanda.svg/640px-FA_Ruanda.svg.png',
      website: 'https://www.partner2.com',
    },
    // Add more partners as needed
  ];

  const openWebsite = (website) => {
    window.open(website, '_blank');
  };

  return (
    <div className="shadow-lg p-8 mx-[10%] my-4 bg-slate-200" data-aos="fade-up"
    data-aos-duration={1500}>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Partners</h2>
      <p className="text-base mb-4 text-blue-900">
        We work with the best partners in the industry to deliver exceptional results.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="cursor-pointer"
            onClick={() => openWebsite(partner.website)}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-40 h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
