interface IDayDropdownItemProps {
  dayText: string;
  dayValue: number;
  selectedDay: number;
  action: (day: number) => void;
}

const DayDropdownItem = ({
  dayText,
  dayValue,
  selectedDay,
  action,
}: IDayDropdownItemProps) => {
  return (
    <div
      onClick={() => action(dayValue)}
      className={`${
        selectedDay === dayValue && "bg-neutral-700"
      } text-preset-7 text-neutral-0 py-2.5 px-2 hover:bg-neutral-700 rounded-lg cursor-pointer`}
    >
      {dayText}
    </div>
  );
};

export default DayDropdownItem;
