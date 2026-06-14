import { useState } from "react";
import CollectionRow from "./CollectionRow";
import { collections } from "./collectionsData";

const CollectionsSection = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-[#f7f1e8] py-12">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="flex justify-between items-center mb-10">

          <p className="uppercase tracking-[0.3em] text-normal font-bold text-[#7D8668]">
            Collections
          </p>

          <button className="uppercase tracking-[0.2em] text-xs text-[#5A624A]">
            View All →
          </button>

        </div>

        <div className="border border-[#DDD4C7]">

          {collections.map((item) => (
            <CollectionRow
              key={item.id}
              item={item}
              isOpen={activeId === item.id}
              onClick={() =>
                setActiveId(
                  activeId === item.id
                    ? null
                    : item.id
                )
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default CollectionsSection;