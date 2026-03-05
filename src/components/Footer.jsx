import RetroPc from "../assets/images/image-retro-pcs.jpg";
const Footer = () => {
  return (
    <footer className="my-20">
      <div className="container mx-auto flex wrap-normal">
        <div className="flex gap-6 md:w-1/3 sm:w-full h-30">
          <img src={RetroPc} alt="" />
          <div>
            <p className="text-3xl font-bold text-soft-red">01</p>
            <h3 className="text-lg text-very-dark-blue font-bold">
              Reviving Retro PCs
            </h3>
            <p className="text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-1/3 h-30">
          <img src={RetroPc} alt="" />
          <div>
            <p className="text-3xl font-bold text-soft-red">01</p>
            <h3 className="text-lg text-very-dark-blue font-bold">
              Reviving Retro PCs
            </h3>
            <p className="text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-1/3 h-30">
          <img src={RetroPc} alt="" />
          <div>
            <p className="text-3xl font-bold text-soft-red">01</p>
            <h3 className="text-lg text-very-dark-blue font-bold">
              Reviving Retro PCs
            </h3>
            <p className="text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
