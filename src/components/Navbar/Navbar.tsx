"use client";
import { Menubar } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowLeft, LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { MenuIcon } from "../ui/menu-icon";
import ToggleMode from "../ui/toggle-mode";
import { usePathname } from "next/navigation";
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full fixed top-0 no-print z-50 px-4">
      <nav className="pt-4">
        <Menubar
          className={cn(
            "container w-full md:w-5/6 mx-auto p-4 px-8 print:hidden h-[60px] backdrop-blur-sm rounded-2xl duration-100 border bg-background/60"
          )}
        >
          <div className="w-full flex justify-between items-center">
            {pathname === "/letter" ? (
              <Link href={"/"}>
                 <Button variant={"ghost"}>
                <ArrowLeft />
              </Button>
              </Link>
             
            ) : (
              <Link href={"/"}>
                <h1 className="text-2xl font-bold text-center">Templatz</h1>
              </Link>
            )}

            <div className="flex items-center space-x-4">
              <ToggleMode />
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <MenuIcon
                  isOpen={isMobileMenuOpen}
                  setOpen={setMobileMenuOpen}
                />
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-[60px] left-0 w-full bg-background/80 backdrop-blur-md rounded-2xl mt-4 border border-input shadow-lg md:hidden"
              >
                <div className="flex flex-col items-center p-4 space-y-4">
                  <Link href="/login">
                    <Button className="font-semibold px-8 py-5">Login</Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="outline"
                      className="font-semibold px-8 py-5"
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </Menubar>
      </nav>
    </div>
  );
}

export default Navbar;
