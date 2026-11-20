import Hero from "@/components/hero/Hero";
import Marquee from "@/components/hero/Marquee";
import LibraryGlance from "@/components/hero/LibraryGlance";
import Workflow from "@/components/hero/Workflow";
import FeaturedTemplates from "@/components/hero/FeaturedTemplates";
import CollectionsPreview from "@/components/hero/CollectionsPreview";
import {
  templates,
  components,
  shaders,
  sections,
  uiScreens,
  collections,
} from "@/lib/data";

export default function Home() {
  const featured = templates.filter((template) => template.featured);
  return (
    <main>
      <Hero />
      <Marquee items={templates} />
      <LibraryGlance
        counts={{
          templates: templates.length,
          components: components.length,
          shaders: shaders.length,
          sections: sections.length,
          ui: uiScreens.length,
        }}
      />
      <Workflow />
      <FeaturedTemplates items={featured} />
      <CollectionsPreview items={collections} />
    </main>
  );
}
