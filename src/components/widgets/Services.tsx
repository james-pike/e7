import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import { SectionWrapper } from "./SectionWrapper";
import ServiceTabs from "./ServiceTabs";
import { VisibleWrapper } from "./VisibleWrapper";
 // Adjust the import paths

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;

  return (
    <SectionWrapper id={id} isDark={isDark} classes={{ container: "pb-4 max-w-6xl" }}>
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      <VisibleWrapper id={`${id}-service-tabs`}>
        <ServiceTabs isDark={isDark} />
      </VisibleWrapper>
    </SectionWrapper>
  );
});