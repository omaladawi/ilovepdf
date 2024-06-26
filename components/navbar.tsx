"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const { isSignedIn, isLoaded, userId } = useAuth();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div
      className={
        "flex border-b px-6 sm:px-10 h-14 items-center justify-between shadow-lg"
      }
    >
      <div className={"flex items-center gap-x-3 sm:gap-x-6"}>
        <Link
          href={"/"}
          className={
            "flex items-center gap-x-2 font-bold uppercase text-teal-500"
          }
        >
          <Image src={"logo.svg"} width={120} alt="logo" height={100} />
        </Link>
        <div className={"flex space-x-6"}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                  })}
                  href={"/"}
                >
                  MERGE PDF
                </Link>
              </NavigationMenuItem>
              <Separator orientation="vertical" className={"h-5 mx-3"} />
              <NavigationMenuItem>
                <Link
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                  })}
                  href={"/image-to-doc"}
                >
                  Image to Doc
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {!isLoaded ? (
        <Skeleton className="h-12 w-12 rounded-full" />
      ) : isSignedIn ? (
        <div className={"flex space-x-4"}>
          <Link
            href={"/my-files"}
            className={buttonVariants({ variant: "link", size: "sm" })}
          >
            My Files
          </Link>
          <UserButton afterSignOutUrl={"/"} />
        </div>
      ) : (
        <div className={"flex space-x-4"}>
          <Link
            href={"/sign-in"}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Login
          </Link>
          <Link
            href={"/sign-up"}
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
