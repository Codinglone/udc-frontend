import * as Tabs from "@radix-ui/react-tabs";
import { cx } from "@vechaiui/react";
import { VechaiProvider } from "@vechaiui/react";
import { FaBuilding, FaHome, FaRoad } from "react-icons/fa"
import { BsFillLightningFill } from "react-icons/bs"
import { Icon, Badge } from "@vechaiui/react"


function ServicesTab() {
    const tabs = [
      {
        value: "tab1",
        name: "Town and Spacial Planning",
        content: "Town and Spacial Planning tab content",
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
        <div className="flex justify-center w-full my-8">
        <VechaiProvider>
      <div className="flex flex-wrap w-[50%] shadow-lg  justify-center w-full p-8 space-x-4">
        <Tabs.Root className="flex flex-col" defaultValue="tab1">
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