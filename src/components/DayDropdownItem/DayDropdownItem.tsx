interface IDayDropdownItemProps {
  day: string;
  selectedDay: string;
  action: (day: string) => void;
}

const DayDropdownItem = ({
  day,
  selectedDay,
  action,
}: IDayDropdownItemProps) => {
  return (
    <div
      onClick={() => action(day)}
      className={`${
        selectedDay === day && "bg-neutral-700"
      } text-preset-7 text-neutral-0 py-2.5 px-2 hover:bg-neutral-700 rounded-lg cursor-pointer`}
    >
      {day}
    </div>
  );
};

export default DayDropdownItem;
