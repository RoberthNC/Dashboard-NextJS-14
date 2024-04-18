"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCalculatorOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  const props = {
    title: count.toString(),
    subtitle: "Productos agregados",
    label: "Contador",
    icon: <IoCalculatorOutline size={70} className="text-blue-600" />,
    href: "/dashboard/counter",
  };

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget {...props} />
    </div>
  );
};
