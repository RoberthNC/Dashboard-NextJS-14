import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Page which can be used for counting carshop items",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}
