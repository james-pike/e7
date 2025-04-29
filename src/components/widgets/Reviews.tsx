import { component$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline";
import ReviewGrid from "./ReviewGrid";
import ReviewsCarousel from "./ReviewsCarousel";
import { Link, useLocation } from "@builder.io/qwik-city";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

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
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark } = props;
  const loc = useLocation();  // Get current location
  const isIndexPage = loc.url.pathname === '/';  // Check if we're on root path


    const location = useLocation(); // Get the current location
    const isLandingPage = location.url.pathname === "/"; // Check if on landing page
  
  // Conditional padding classes

  return (
 <SectionWrapper id={id} isDark={isDark} classes={classes}   bgClass="inset-0 z-10 h-full w-full bg-background bg-[linear-gradient(to_right,hsl(var(--card))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--card))_1px,transparent_1px)] bg-[size:6rem_4rem]">
 
     
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        {/* <Card.Root class="bg-background"> */}
          <Card.Header class="p-4">
        <div class="block sm:hidden">
          {isIndexPage ? <ReviewsCarousel/> : <ReviewGrid/>}
        </div>
        <div class="hidden sm:block">
          {<ReviewGrid/>}
        </div>
        </Card.Header>
        {/* </Card.Root> */}

             {!isLandingPage && (
                <Card.Root class="bg-gradient-to-r z-10 from-primary to-primary/50 mx-auto mt-4 pt-8 max-w-5xl ">
                  <Card.Content>
                    <Headline title={"Any other questions about our services?"} subtitle={"Get in touch and we'll gladly answer them"} />
                    <Link href="/contact" class="w-full sm:w-auto">
                      <Button look="secondary" size="md" class="w-full">Get Started</Button>
                    </Link>
                  </Card.Content>
                </Card.Root>
              )}
     
      </SectionWrapper>
  );
});