interface ICurrentConditionsCardProps {
  title: string;
  value: number;
  units?: string;
}

const CurrentConditionsCard = ({
  title,
  value,
  units,
}: ICurrentConditionsCardProps) => {
  return (
    <div className="flex flex-col justify-center items-start p-5 gap-2 bg-neutral-800 rounded-xl border-[1px] border-neutral-600 min-w-[165px] w-full h-[118px]">
      <div className="text-preset-6 text-neutral-200">{title}</div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-preset-3 text-neutral-0">
          {value} {units}
        </div>
        <div className="bg-white size-6 rounded-xl"></div>
      </div>
    </div>
  );
};

export default CurrentConditionsCard;
