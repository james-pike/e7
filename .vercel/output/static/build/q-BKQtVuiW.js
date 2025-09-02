import{M as e,H as l}from"./q-D42ibeys.js";import"./q-CF2Nn7YE.js";const n=[{id:"newsletter-1",slug:"newsletter-1",title:"First Newsletter",image:"/images/newsletter1.jpg",excerpt:"A brief summary of our first newsletter.",publishDate:new Date("2025-01-01"),tags:["newsletter","update"],content:`
# Welcome to Our First Newsletter

This is the **first** newsletter content. Here's what's included:

- Exciting updates about our project.
- Tips and tricks for getting started.
- A sneak peek at what's coming next.

[Learn more](#)!
    `,draft:!1,metadata:{description:"A brief summary of our first newsletter."}},{id:"newsletter-2",slug:"newsletter-2",title:"Second Newsletter",image:"/images/newsletter2.jpg",excerpt:"Highlights from our second newsletter.",publishDate:new Date("2025-02-01"),tags:["newsletter","news"],content:`
# Second Newsletter Highlights

We're back with more news!

- New features released this month.
- Community spotlight and contributions.
- Upcoming events to watch for.

Join us for the journey!
    `,draft:!1,metadata:{description:"Highlights from our second newsletter."}}],a=()=>e("section",null,{class:"px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl bg-white"},[e("header",null,null,e("h1",null,{class:"text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-8 md:mb-16 font-heading"},"Newsletter",3,null),3,null),e("ul",null,null,n.map(t=>e("li",null,{class:"mb-10 md:mb-16"},e("article",{class:`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${t.image?"md:grid-cols-2":""}`},null,[t.image&&e("a",{href:`/newsletter/${t.slug}`},{class:"relative block group"},e("div",null,{class:"relative h-0 pb-[56.25%] md:pb-[75%] md:h-80 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg"},e("img",{src:l(t,"image"),alt:l(t,"title")},{class:"absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700",sizes:"(max-width: 900px) 400px, 900px",width:900,height:400},null,3,null),1,null),1,"ul_0"),e("div",null,null,[e("header",null,null,e("h2",null,{class:"text-xl sm:text-2xl font-bold leading-snug mb-2 font-heading"},e("a",{href:`/newsletter/${t.slug}`},{class:"hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"},l(t,"title"),1,null),1,null),1,null),e("p",null,{class:"text-md sm:text-lg flex-grow"},l(t,"excerpt"),1,null),e("footer",null,{class:"mt-4"},[e("div",null,null,e("span",null,{class:"text-gray-500 dark:text-slate-400"},e("time",{dateTime:String(t.publishDate.getTime())},null,t.publishDate.toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}),1,null),1,null),1,null),e("div",null,{class:"mt-4"},null,3,null)],1,null)],1,null)],1,null),1,t.slug)),1,null)],1,"ul_1");export{a as s_qrrlH5yUPF0};
