interface IDayCardProps {
  day: string;
  weatherCode: number;
  high: number;
  low: number;
}

const DayCard = ({ day, high, low }: IDayCardProps) => {
  // Adds time for timezone handling and date retrieval
  const dateObject = new Date(`${day}T00:00:00`);

  const date = dateObject.toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className="flex flex-col justify-between items-center py-4 px-[10px] bg-neutral-800 border-[1px] border-neutral-600 w-28 lg:w-full h-[165px] rounded-xl">
      <div className="text-preset-6 text-neutral-0">{date}</div>
      <div className="bg-white size-10 rounded-xl"></div>
      <div className="flex flex-row w-full justify-between">
        <div className="text-preset-7 text-neutral-0">{Math.round(high)}</div>
        <div className="text-preset-7 text-neutral-200">{Math.round(low)}</div>
      </div>
    </div>
  );
};

export default DayCard;
