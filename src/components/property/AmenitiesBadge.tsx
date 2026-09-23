type AmenityBadgeProps = {
  amenities: string[];
  selectedAmenities: string[];
  onChange: (amenities: string[]) => void;
};

const AmenityBadge = ({
  amenities,
  selectedAmenities,
  onChange,
}: AmenityBadgeProps) => {
  const handleSelect = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      onChange(
        selectedAmenities.filter((item) => item !== amenity),
      );
    } else {
      onChange([...selectedAmenities, amenity]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {amenities.map((amenity) => {
        const selected = selectedAmenities.includes(amenity);

        return (
          <button
            key={amenity}
            type="button"
            onClick={() => handleSelect(amenity)}
            className={`
              rounded-full
              border
              px-3
              py-2
              text-sm
              ${
                selected
                  ? "bg-[#c0c1ff] text-[#1000A9] border-[#c0c1ff]"
                  : "bg-[#171f33] text-[#dae2fd] border-[#464554]"
              }
            `}
          >
            {amenity}
          </button>
        );
      })}
    </div>
  );
};

export default AmenityBadge;