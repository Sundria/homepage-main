import web3desktop from "../assets/images/image-web-3-desktop.jpg";
import web3mobile from "../assets/images/image-web-3-mobile.jpg";
export default function Main() {
  return (
    <main className="mt-15">
      <div className="container max-w-7xl mx-auto p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
          <div className="col-span-3 md:col-span-2 row-span-2">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={web3desktop}
                type="image/webp"
              />
              <img
                src={web3mobile}
                alt="image web 3"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="col-span-3 md:col-span-1 row-3 md:row-3 ">
            <h1 className="text-6xl text-very-dark-blue font-extrabold text-left">
              The Bright
              <br /> Future of
              <br /> Web 3.0?
            </h1>
          </div>
          <div className="col-span-3 md:col-span-1 md:row-3   flex flex-col gap-7">
            <p className=" text-dark-grayish-blue text-left leading-8 text-paragraph">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="w-fit bg-soft-red py-3 px-8 tracking-[4px] uppercase font-extrabold cursor-pointer hover:bg-very-dark-blue hover:text-off-white transition-all duration-200">
              Read More
            </button>
          </div>
          <div className="col-span-3 md:col-3 row-span-3 bg-very-dark-blue flex flex-col gap-8 md:justify-between p-8">
            <h1 className="text-soft-orange font-bold text-4xl">New</h1>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-off-white text-2xl font-bold hover:text-soft-orange"
              >
                Hydrogen VS Electric Cars
              </a>
              <p className="text-paragraph text-grayish-blue/70">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="border border-gray-400/50"></div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-off-white text-2xl font-bold hover:text-soft-orange"
              >
                The Downsides of AI Artistry
              </a>
              <p className="text-paragraph text-grayish-blue/70">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="border border-gray-400/50"></div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-off-white text-2xl font-bold hover:text-soft-orange"
              >
                Is VC Funding Drying Up?
              </a>
              <p className="text-paragraph text-grayish-blue/70">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
