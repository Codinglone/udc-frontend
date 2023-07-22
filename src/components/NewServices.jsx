import React from "react";
import project7 from "../assets/project7.jpg"

const NewServices = () => {
  return (
    <section className="px-12 py-24">
      <div className="flex justify-between">
        <div className="w-[45%]">
          <img src={project7} alt="" />
        </div>
        <div className="flex flex-col w-[45%]">
          <h1 className="text-4xl">CIVIL ENGINEERING</h1>
          <p className="text-gray-900 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi labore accusamus accusantium nesciunt, officiis illum
            facere hic excepturi voluptatibus necessitatibus id quam earum saepe
            error. Velit, itaque asperiores nisi repellat maxime, ducimus error
            vel, veniam non reiciendis dicta perferendis. Architecto at error,
            corrupti id accusamus nulla alias veritatis eligendi beatae ullam
            voluptatibus similique facere ut, harum incidunt libero aperiam
            debitis voluptas nam perspiciatis. Provident perspiciatis unde est
            quis laborum, earum numquam labore facilis ab nulla placeat,
            inventore, corporis consequuntur. Velit alias nihil quae nobis?
            Sequi quidem, cum ducimus excepturi dolorum aperiam eos quia veniam
            odit, doloribus esse, quis suscipit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewServices;
