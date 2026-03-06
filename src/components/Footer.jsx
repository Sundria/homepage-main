import RetroPc from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
const Footer = () => {
  return (
    <footer className="my-20">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex gap-6">
          <img
            src={RetroPc}
            alt="image retro pc"
            className="w-32 h-40 object-cover shrink-0"
          />
          <div className="flex flex-col justify-between">
            <p className="text-4xl font-bold text-soft-red">01</p>
            <a
              href="#"
              className="text-xl text-very-dark-blue font-extrabold hover:text-soft-red"
            >
              Reviving Retro PCs
            </a>
            <p className=" text-dark-grayish-blue leading-7">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src={Laptops}
            alt="image retro pc"
            className="w-32 h-40 object-cover shrink-0"
          />
          <div className="flex flex-col justify-between">
            <p className="text-4xl font-bold text-soft-red">01</p>
            <a
              href="#"
              className="text-xl text-very-dark-blue font-extrabold hover:text-soft-red"
            >
              Reviving Retro PCs
            </a>
            <p className=" text-dark-grayish-blue leading-7">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src={Gaming}
            alt="image retro pc"
            className="w-32 h-40 object-cover "
          />
          <div className="flex flex-col justify-between">
            <p className="text-4xl font-bold text-soft-red">01</p>
            <a
              href="#"
              className="text-xl text-very-dark-blue font-extrabold hover:text-soft-red"
            >
              Reviving Retro PCs
            </a>
            <p className=" text-dark-grayish-blue leading-7">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </div>
      <div
        id="attribution"
        className="mt-30 text-very-dark-blue text-lg text-center font-bold"
      >
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-dark-grayish-blue hover:text-soft-red"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/Sundria"
          target="_blank"
          className="text-dark-grayish-blue hover:text-soft-red"
        >
          Sundria
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
