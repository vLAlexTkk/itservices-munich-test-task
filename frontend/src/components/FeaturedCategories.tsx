import { data } from "@/types/dataTypes";

interface FeaturedCategoriesProps {
  selectedFeature: number | null;
  setSelectedFeature: (feature: number | null) => void;
}

export function FeaturedCategories({ selectedFeature, setSelectedFeature }: FeaturedCategoriesProps) {
  const FeaturedCategory = ({ text, isActive, onClick }: { text: string; isActive: boolean; onClick: () => void }) => {
    return (
      <p
        onClick={onClick}
        className={`bg-white text-[14px] cursor-pointer transition-colors py-1 px-5 rounded-[20px] ${
          isActive ? "!bg-black text-white" : "hover:bg-blue-600 hover:text-white"
        }`}
      >
        {text}
      </p>
    );
  };

  return (
    <div>
      <div className="flex-row flex bg-black/5 w-full gap-2 flex-wrap rounded-[20px] p-2">
        <FeaturedCategory text="All" isActive={selectedFeature === null} onClick={() => setSelectedFeature(null)} />
        {data.features.map((feature) => (
          <div key={feature.id}>
            <FeaturedCategory
              text={feature.name}
              isActive={selectedFeature === feature.id}
              onClick={() => setSelectedFeature(feature.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
