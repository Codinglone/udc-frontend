import carousel3 from "../assets/carousel-3.jpg";

const Description = () => {
  return (
    <div className="my-8 mx-4 w-full flex ">
      <div className="w-1/2">
        <img src={carousel3} alt="Photo" />
      </div>
      <div className="w-[44%] ml-8" id="about">
        <h3 className="text-blue-900 font-bold text-xl mb-2">Welcome to UDC</h3>
        <h1 className="text-5xl font-bold text-blue-700">
          20 Years Of Experience
        </h1>
        <p className="my-2 font-bold text-blue-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          asperiores perspiciatis ex. Consequatur quam dolor beatae numquam
          similique est obcaecati ipsam earum perferendis distinctio. Quae
          itaque quas sint quo voluptas, molestias voluptatibus adipisci quia
          doloribus cupiditate harum quaerat alias perspiciatis provident ab
          excepturi quidem impedit, quisquam iure natus ullam illum sit culpa
          sunt. Consectetur fuga culpa obcaecati, totam velit reprehenderit
          blanditiis sed laborum eum laudantium tempore, cum quisquam quibusdam!
          Magnam beatae aut consequatur dolores reprehenderit, ratione
          asperiores aspernatur consectetur, autem quo, a cupiditate saepe ipsum
          doloremque odio voluptatem quisquam error aliquid molestias facere
        </p>
      </div>
    </div>
  );
};

export default Description;
