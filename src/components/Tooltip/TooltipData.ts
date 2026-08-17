import { Settings, Info, Trash2, Search, Download, Heart, User, Bell,} from "lucide-react";
import type { PropData, TooltipIcon } from "./types";

export const tooltipIcons: TooltipIcon[] = [
  {
    name: "settings",
    content: "Account settings",
    icon: Settings,
    iconName: "Settings",
  },
  {
    name: "info",
    content: "More information",
    icon: Info,
    iconName: "Info",
  },
  {
    name: "delete",
    content: "Delete item",
    icon: Trash2,
    iconName: "Trash2",
  },
  {
    name: "search",
    content: "Search",
    icon: Search,
    iconName: "Search",
  },
  {
    name: "notifications",
    content: "View notifications",
    icon: Bell,
    iconName: "Bell",
  },
  {
    name: "profile",
    content: "View profile",
    icon: User,
    iconName: "User",
  },
  {
    name: "favorite",
    content: "Add to favorites",
    icon: Heart,
    iconName: "Heart",
  },
  {
    name: "download",
    content: "Download file",
    icon: Download,
    iconName: "Download",
  },
];

export const propsData : PropData[] = [
  {
    prop: "content",
    type: "React.ReactNode",
    default: "undefined",
    description: "Content displayed inside the tooltip.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: "undefined",
    description: "Element that triggers the tooltip.",
  },
  {
    prop: "position",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description: "Controls the position of the tooltip.",
  },
];
