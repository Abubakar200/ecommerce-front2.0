"use client"
import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter()
  useEffect(() => {
    setMounted(true);
  }, []);

  const cart = useCart()
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag onClick={() => router.push('/cart')} size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
