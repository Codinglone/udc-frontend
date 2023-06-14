import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "@vechaiui/react";
import { VechaiProvider } from "@vechaiui/react";
import { FaBuilding, FaHome, FaRoad } from "react-icons/fa"
import { BsFillLightningFill } from "react-icons/bs"
import { Icon, Badge } from "@vechaiui/react"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function ServicesTab() {
    const tabs = [
      {
        value: "tab1",
        name: "Town and Spacial Planning",
        content: `Welcome to the Town and Spatial Planning section of UDC Ltd!

        At UDC Ltd, we understand the critical importance of efficient and effective town and spatial planning in creating thriving communities. Our expert team specializes in providing comprehensive planning solutions that maximize land use, promote sustainable development, and enhance quality of life.
        
        With extensive experience in urban planning, we work closely with government agencies, developers, and community stakeholders to design master plans that integrate infrastructure, transportation, housing, and public spaces. Our approach combines creativity, strategic thinking, and a deep understanding of local context to deliver tailored planning solutions that meet the unique needs of each project.
        
        From small-scale neighborhood developments to large-scale urban regeneration projects, we strive to create vibrant, inclusive, and environmentally conscious spaces. Our planning services encompass site analysis, zoning and land use studies, feasibility assessments, and public engagement processes. We are committed to ensuring that our plans are both visionary and practical, laying the foundation for sustainable growth and development.
        
        At UDC Ltd, we believe that effective town and spatial planning is key to creating communities that thrive for generations to come. Explore our website to learn more about our planning expertise and how we can assist you in shaping a better future. Contact us today to discuss your town and spatial planning needs and let us help you turn your vision into reality.`,
        icon: FaBuilding,
        label: "Building icon",
      },
      {
        value: "tab2",
        name: "Building",
        content: "Building tab content",
        icon: FaHome,
        label: "Home icon",
      },
      {
        value: "tab3",
        name: "Road Sector",
        content: "Road Sector Tab Content",
        icon: FaRoad,
        label: "Road icon",
      },
      {
        value: "tab4",
        name: "Electricity",
        content: "Electricity tab content",
        icon: BsFillLightningFill,
        label: "Lightning icon",
      },
    ];
  
    return (
        <div className="flex justify-center w-full my-8" data-aos="fade-up"
        data-aos-duration={1500}>
        <VechaiProvider>
      <div className="flex flex-wrap w-[50%] max-w-[50%] justify-center w-full p-8 space-x-4">
        <Tabs.Root className="flex flex-col shadow-lg " defaultValue="tab1">
          <Tabs.List
            aria-label="tabs example"
            className={cx(
              "flex flex-row justify-start",
              "border-b border-blue-300 dark:border-neutral-700"
            )}
          >
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className={cx(
                  "px-4 py-2 h-10 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                  "flex-shrink-0 inline-block",
                  "text-blue-700 bg-transparent border border-transparent",
                  "hover:text-blue-900",
                  "selected:bg-base selected:text-blue-900 selected:rounded-tl-md selected:rounded-tr-md",
                  "selected:border-inherit selected:border-b-transparent",
                  // dark
                  "dark:text-neutral-400 dark:bg-transparent",
                  "dark:hover:text-neutral-100",
                  "dark:selected:bg-base dark:selected:text-neutral-100",
                )}
              >
                <div className="flex">
                <Icon as={tab.icon} label={tab.label} className="w-4 h-4 mr-2" />
                <span>{tab.name}</span>
                {/* {tab.value === "tab2" && (
                  <Badge className="ml-2">18</Badge>
                )} */}
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Content
              key={tab.value}
              value={tab.value}
              className="p-4 flex-grow-1 text-blue-900 font-semibold"
            >
              {tab.content}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
      </VechaiProvider>
      </div>

    );
  }

  export default ServicesTab;