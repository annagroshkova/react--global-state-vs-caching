import { Link } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BirdhouseIcon } from "lucide-react";
import ReduxIcon from "@/assets/redux";
import ZustandIcon from "@/assets/zustand";
import TanstackQueryIcon from "@/assets/tanstack-query";

const sidebarSections = [
  {
    title: "Global state vs. caching",
    items: [
      {
        title: "Home",
        url: "/",
        icon: BirdhouseIcon,
        tooltip: "Tillbaka till startsidan",
      },
      {
        title: "Zustand",
        url: "/zustand",
        icon: ZustandIcon,
        tooltip: "Globalt state baserat på hooks",
      },
      {
        title: "React Query",
        url: "/react-query",
        icon: TanstackQueryIcon,
        tooltip: "API-anrop och caching",
      },
      {
        title: "Redux",
        url: "/redux",
        icon: ReduxIcon,
        tooltip:
          "Bonusuppgift: Global state-hantering som också stödjer asynkrona processer",
      },
    ],
  },
];

export default function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="font-semibold">ibchillin.io</SidebarHeader>
      <SidebarContent>
        {sidebarSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                {section.items.map((item) => (
                  <Tooltip key={item.title}>
                    <TooltipTrigger asChild>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.url}
                            onClick={() => setOpenMobile(false)}
                          >
                            <item.icon strokeWidth={1.5} />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="text-gray-400 text-xs">
        © 2026 Gus Davidson Group
      </SidebarFooter>
    </Sidebar>
  );
}
