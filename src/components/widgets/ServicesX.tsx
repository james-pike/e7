import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";

import { Wrapper } from "./Wrapper";
import ServiceCarousel from "./ServiceCarousel";
 // Adjust the import path

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
  const { id,   highlight = "", classes = {}, isDark = false } = props;

  return (
    <Wrapper id={id} isDark={isDark} bgClass="bg-background" classes={{ container: " max-w-6xl" }}>
       {/* <Card.Root class="pt-6 mb-0.5"> */}
      <Headline  highlight={highlight} align="left" classes={classes?.headline} />
      {/* </Card.Root> */}
<ServiceCarousel/> 
   </Wrapper>
  );
});