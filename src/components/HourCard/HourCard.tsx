interface IHourCardProps {
  hour: string;
  temperature: string;
  weather: string;
}

export const HourCard = ({ hour, temperature }: IHourCardProps) => {
  return (
    <div className="flex flex-row items-center justify-between bg-neutral-700 rounded-lg h-15 py-[18px] pl-3 pr-4">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-white size-4 rounded-xl"></div>
        <div className="text-preset-5-medium text-neutral-0">{hour}</div>
      </div>
      <div className="text-preset-7 text-neutral-0">{temperature}</div>
    </div>
  );
};

export default HourCard;
