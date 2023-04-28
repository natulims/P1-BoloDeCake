import React from "react";
import { Tab } from "@headlessui/react";
import BirthdayCake from "../../pages/products/BirthdayCakes";
import VeganCake from "../../pages/products/VeganCake";
import WeddingCakes from "../../pages/products/WeddingCakes";
import Cakes from "../../pages/products/Cakes";

function ToggleCake() {
  return (
    <>
      <section className="grid w-full grid-cols-1 gap-10">
        {" "}
        <Tab.Group>
          <div className="flex flex-row justify-center  gap-10">
            {" "}
            <Tab.List>
              <Tab className="ui-selected:bg-blue-500 mr-5 py-2 px-4 mt-5 rounded bg-fawn text-whitesmoke hover:bg-bittersweet border-2 border-black ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
                Tab 1
              </Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
              <Tab>Tab 4</Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <BirthdayCake />
            </Tab.Panel>
            <Tab.Panel>
              <VeganCake />
            </Tab.Panel>
            <Tab.Panel>
              <WeddingCakes />
            </Tab.Panel>
            <Tab.Panel>
              <Cakes />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  );
}

export default ToggleCake;
