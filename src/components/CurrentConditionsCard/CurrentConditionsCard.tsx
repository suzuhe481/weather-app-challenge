import { WindArrow } from "../../assets/icons/weatherIcons";

interface ICurrentConditionsCardProps {
  title: string;
  value: number | null;
  units?: string;
  windDirection?: number | null;
}

const CurrentConditionsCard = ({
  title,
  value,
  units,
  windDirection,
}: ICurrentConditionsCardProps) => {
  function getCardIcon() {
    switch (title) {
      case "Wind": {
        let windValue = -45; // Arrow SVG is pointing north east by default. Sets the default direction to north.
        if (windDirection) {
          windValue = windDirection - 180 - 45;
        }

        const svgClass = "size-6 sm:size-12";
        const rotateStyle = { transform: `rotate(${windValue}deg)` };

        return (
          <div className="flex justify-center items-center h-full">
            <WindArrow
              animate={false}
              className={svgClass}
              style={rotateStyle}
            />
          </div>
        );
      }

      case "Humidity": {
        let humidityValue = 0;
        if (value) {
          humidityValue = value;
        }

        const heightPercentage =
          Math.max(0, Math.min(100, humidityValue)) + "%";

        return (
          <div className="relative w-[20px] h-full bg-yellow-50 rounded-xl">
            <div
              className="absolute bottom-0 left-0 w-full rounded-bl-xl rounded-br-xl"
              style={{
                height: heightPercentage,
                backgroundColor: "#4658d9",
              }}
            ></div>
          </div>
        );
      }
      default:
        return <></>;
    }
  }

  return (
    <div className="flex flex-row justify-between p-5 gap-2 bg-neutral-800 rounded-xl border-[1px] border-neutral-600 min-w-[165px] w-full h-[118px]">
      <div className="flex flex-col justify-center items-start gap-6">
        <div className="text-preset-6 text-neutral-200">{title}</div>
        <div className="text-preset-3 text-neutral-0">
          {value} {units}
        </div>
      </div>
      {getCardIcon()}
    </div>
  );
};

export default CurrentConditionsCard;
