import web3desktop from "../assets/images/image-web-3-desktop.jpg";
export default function Main() {
  return (
    <main className="mt-20">
      <div className="container mx-auto">
        <div className="flex gap-6">
          <div className="flex flex-col gap-6 w-2/3">
            <div className="">
              <img src={web3desktop} alt="" className=" w-full " />
            </div>
            <section className="flex gap-6">
              <article className="w-1/2">
                <h1 className="text-6xl text-very-dark-blue font-bold text-left">
                  The Bright
                  <br /> Future of
                  <br /> Web 3.0?
                </h1>
              </article>
              <article className="flex flex-col w-1/2 justify-between h-full">
                <p className="text-paragraph text-dark-grayish-blue text-left">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="w-fit bg-soft-red py-2 px-7 tracking-widest uppercase font-bold cursor-pointer hover:bg-soft-red/80">
                  Read More
                </button>
              </article>
            </section>
          </div>
          <div className="flex flex-col space-y-10 p-5 w-full max-w-1/3 bg-very-dark-blue">
            <h1 className="text-soft-orange font-bold text-4xl">New</h1>
            <div className="flex flex-col gap-3">
              <h2 className="text-off-white text-2xl font-bold">
                Hydrogen VS Electric Cars
              </h2>
              <p className="text-paragraph text-grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="border border-gray-400"></div>
            <div className="flex flex-col gap-3">
              <h2 className="text-off-white text-2xl font-bold">
                The Downsides of AI Artistry
              </h2>
              <p className="text-paragraph text-grayish-blue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="border border-gray-400"></div>
            <div className="flex flex-col gap-3">
              <h2 className="text-off-white text-2xl font-bold">
                Is VC Funding Drying Up?
              </h2>
              <p className="text-paragraph text-grayish-blue">
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
