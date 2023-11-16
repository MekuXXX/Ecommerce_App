import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PersonIcon,
  ImageIcon,
  RocketIcon,
  BarChartIcon,
  BackpackIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { getServerSession } from "next-auth";

const MenuItems = [
  {
    page: "personal",
    Icon: PersonIcon,
    name: "Personal information",
  },
  {
    page: "security",
    Icon: BackpackIcon,
    name: "Login and security",
  },
  {
    page: "payment",
    Icon: BackpackIcon,
    name: "My payments",
  },
  {
    page: "voucher",
    Icon: ImageIcon,
    name: "My vouchers",
  },
  {
    page: "point",
    Icon: BarChartIcon,
    name: "My points",
  },
  {
    page: "Order",
    Icon: RocketIcon,
    name: "My orders",
  },
];
export default function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <PersonIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 py-4 px-2">
        <DropdownMenuItem className={"text-2xl text-[#23262F]"}>
          <h1>Username</h1>
        </DropdownMenuItem>
        {MenuItems.map(({ page, name, Icon }) => (
          <div key={name}>
            <DropdownMenuItem className={"text-[0.875rem]"} key={name}>
              <Link
                href={page}
                className={"text-[#777E90] flex items-center gap-2"}
              >
                <span>
                  <Icon />
                </span>
                <span>{name}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </div>
        ))}
        <DropdownMenuItem
          className={
            "text-[#777E90] text-[0.875rem]  flex items-center gap-2 cursor-pointer"
          }
        >
          <span>
            <ExitIcon />
          </span>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
