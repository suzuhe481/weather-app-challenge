import {
  DecorativeStar,
  DecorativeSmallCloud,
  DecorativeBigCloud,
} from "../../assets/icons/pageIcons";

const MainWeather = () => {
  return (
    <div className="relative flex flex-col gap-4 md:gap-0 md:flex-row justify-center md:justify-between items-center px-6 bg-gradient-to-tr from-blue-500 to-blue-700 w-full xl:w-[800px] h-[286px] rounded-[20px] overflow-hidden">
      <DecorativeStar className="absolute top-[14px] md:top-[34px] right-[50px] md:left-[356px] text-orange z-10" />
      <DecorativeStar
        className="absolute bottom-[26px] md:bottom-[46px] left-[32px] md:left-[310px] text-orange"
        z-10
      />
      <DecorativeStar className="absolute top-[29px] md:top-[41px] left-[-10px] md:left-[48px] text-neutral-0 opacity-20 z-10" />
      <DecorativeStar className="absolute bottom-[27px] md:bottom-[37px] right-[27px] md:right-[106px] xl:right-[186px] text-neutral-0 opacity-20 z-10" />
      <DecorativeSmallCloud className="absolute left-[-225px] bottom-[-150px] z-10" />
      <DecorativeBigCloud className="absolute right-[-300px] bottom-[-200px] z-5" />

      <div className="flex flex-col gap-3 z-100">
        <span className="text-preset-4 text-neutral-0">Berlin, Germany</span>
        <span className="text-preset-6 text-neutral-0">
          Tuesday, August 5, 2025
        </span>
      </div>
      <div className="flex flex-row items-center gap-5 z-100">
        <div className="bg-white size-30 rounded-xl"></div>
        <span className="text-preset-1 text-neutral-0">20°</span>
      </div>
    </div>
  );
};

export default MainWeather;
