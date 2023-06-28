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
        name: "Architectural & Interior Design",
        content: `Welcome to the Architectural and Interior Design section of UDC Ltd!

        At UDC Ltd, we understand the critical importance of efficient and effective town and spatial planning in creating thriving communities. Our expert team specializes in providing comprehensive planning solutions that maximize land use, promote sustainable development, and enhance quality of life.
        
        With extensive experience in urban planning, we work closely with government agencies, developers, and community stakeholders to design master plans that integrate infrastructure, transportation, housing, and public spaces. Our approach combines creativity, strategic thinking, and a deep understanding of local context to deliver tailored planning solutions that meet the unique needs of each project.
        
        From small-scale neighborhood developments to large-scale urban regeneration projects, we strive to create vibrant, inclusive, and environmentally conscious spaces. Our planning services encompass site analysis, zoning and land use studies, feasibility assessments, and public engagement processes. We are committed to ensuring that our plans are both visionary and practical, laying the foundation for sustainable growth and development.
        
        At UDC Ltd, we believe that effective town and spatial planning is key to creating communities that thrive for generations to come. Explore our website to learn more about our planning expertise and how we can assist you in shaping a better future. Contact us today to discuss your town and spatial planning needs and let us help you turn your vision into reality.`,
        icon: FaBuilding,
        label: "Building icon",
      },
      {
        value: "tab2",
        name: "Civil Engineering",
        content: `Welcome to the Civil Engineering Services section of UDC Ltd!

        At UDC Ltd, we are committed to providing exceptional building services tailored to meet your unique needs. With our expert team of professionals, we offer a comprehensive range of construction solutions for both residential and commercial projects.
        
        From concept to completion, we ensure meticulous attention to detail, utilizing the latest industry techniques and materials. Our services include renovations, expansions, and new construction projects, all delivered with the highest level of craftsmanship and quality.
        
        We prioritize open communication, transparency, and timely project management to ensure a seamless construction experience. Our goal is to exceed your expectations, and we achieve this by collaborating closely with you, understanding your requirements and goals.
        
        With a strong emphasis on sustainability, we incorporate eco-friendly practices and materials whenever possible. We believe in creating spaces that are not only visually stunning but also energy-efficient, minimizing the environmental impact.
        
        At UDC Ltd, we take great pride in our reputation for excellence. Our portfolio showcases our expertise in delivering visually appealing, functional, and adaptable spaces. Explore our website to learn more about our services and view our project gallery. Contact us today to discuss your building service needs and experience the difference of exceptional craftsmanship and customer-centric construction services.`,
        icon: FaHome,
        label: "Home icon",
      },
      {
        value: "tab3",
        name: "Cost Estimation & Quality Surveying",
        content: `Welcome to the Cost Estimation & Quality Surveying Services section of UDC Ltd!

        At UDC Ltd, we specialize in providing comprehensive Cost Estimation & Quality Surveying services to meet the transportation needs of communities and businesses. With our experienced team and cutting-edge technologies, we offer a wide range of solutions for road construction, maintenance, and rehabilitation.
        
        From the initial planning and design stages to the final implementation, we ensure the highest level of expertise and attention to detail. Our services encompass road construction, asphalt paving, road markings, traffic management, and maintenance activities. We are committed to delivering projects on time and within budget while prioritizing safety and quality.
        
        Our team works closely with government agencies, municipalities, and private clients to develop innovative road solutions that enhance connectivity, optimize traffic flow, and improve road safety. We understand the importance of sustainable road infrastructure and integrate eco-friendly practices whenever possible.
        
        At UDC Ltd, we take pride in our track record of successfully completed road projects. Our portfolio showcases our expertise in creating roads that are durable, efficient, and built to withstand the demands of everyday use. Explore our website to learn more about our road sector services and how we can assist you. Contact us today to discuss your road infrastructure needs and experience the difference of exceptional road sector solutions.`,
        icon: FaRoad,
        label: "Road icon",
      },
      {
        value: "tab4",
        name: "Landing Surveying",
        content: `Welcome to the Landing Surveying Services section of UDC Ltd!

        At UDC Ltd, we specialize in providing comprehensive landing surveying services to meet the diverse needs of our clients. With our experienced team of electrical professionals, we offer a wide range of solutions for residential, commercial, and industrial electrical projects.
        
        From electrical system design and installation to maintenance and repairs, we ensure reliable and efficient power solutions. Our services encompass electrical wiring, lighting installations, power distribution, energy audits, and electrical safety assessments. We prioritize safety, compliance with regulations, and the use of high-quality materials and equipment.
        
        Our team collaborates closely with clients to understand their specific requirements and deliver customized electrical solutions. We strive to enhance energy efficiency, reduce environmental impact, and maximize the reliability of electrical systems.
        
        At UDC Ltd, we take great pride in our expertise and commitment to excellence in landing Surveying sector. Our portfolio showcases successful projects across a wide range of industries, demonstrating our ability to handle projects of varying complexity.
        
        Explore our website to learn more about our landing surveying services and how we can assist you. Contact us today to discuss your electrical needs and experience the difference of exceptional craftsmanship and customer-centric electricity solutions.`,
        icon: BsFillLightningFill,
        label: "Lightning icon",
      },
    ];
  
    return (
        <div className="flex justify-center w-full" data-aos="fade-up"
        data-aos-duration={1500}>
        <VechaiProvider>
      <div className="flex flex-wrap w-[50%] max-w-[50%] justify-center">
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
                  "px-4 py-2 h-10 -mb-px text-lg text-center whitespace-nowrap cursor-base focus:outline-none",
                  "flex-shrink-0 inline-block",
                  "text-blue-700 bg-transparent border border-transparent",
                  "hover:text-blue-800",
                  "selected:bg-base selected:text-[gold] selected:rounded-tl-md selected:rounded-tr-md",
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
              className="p-4 flex-grow-1 text-neutral-900 text-justify"
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