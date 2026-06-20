import JournalEntry from "./JournalEntry";
import { journalEntries } from "./journalData";

const JournalIndex = ({
  activeEntry,
  setActiveEntry,
}) => {
  return (
    <section className="pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {journalEntries.map((entry, index) => (
          <JournalEntry
            key={entry.id}
            entry={entry}
            reverse={index % 2 === 0}
            activeEntry={activeEntry}
            setActiveEntry={setActiveEntry}
          />
        ))}
      </div>
    </section>
  );
};

export default JournalIndex;