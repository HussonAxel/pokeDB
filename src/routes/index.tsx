import { createFileRoute } from "@tanstack/react-router";
import OpenedHeaderSection from "@components/OpenedHeaderSections/OpenedHeaderSection";
import { OpenedHeaderSectionsData } from "@components/OpenedHeaderSections/OpenedHeaderSectionData";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <OpenedHeaderSection sections={OpenedHeaderSectionsData} />
    </>
  );
}

export default App;
