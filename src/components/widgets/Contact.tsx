import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import ContactForm from "./ContactForm";
import { Wrapper } from "./Wrapper";
import { Card } from "../ui/Card";


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
    <Wrapper id={id} isDark={isDark} classes={{ container: "max-w-3xl" }} bgClass="inset-0 max-w-7xl h-full  bg-background bg-[linear-gradient(to_right,hsl(var(--card))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--card)),transparent_1px)] bg-[size:14px_24px]">
      {/* <Card.Root class="mb-0.5"> */}
      <div class="flex w-full">
        <div class="w-2/3 bg-background pl-4 pt-6">
          <div class="hidden sm:block">
            <Headline
              align="left"
              title={title}
              subtitle={subtitle}
              highlight={highlight}
              classes={classes?.headline}
            />
          </div>
          <div class="block sm:hidden">
            <Headline
              align="left"
              title={title}
              highlight={highlight}
              classes={classes?.headline}
            />
          </div>
        </div>
        <div class="w-1/3">
          <img
            src="/images/contact.jpg"
            alt="Descriptive alt text"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* </Card.Root> */}

      <ContactForm isDark={isDark} />

    </Wrapper>
  );
});


