import { CMSType } from "@/types";

export const BLOCKCHAIN_OPTIONS = [
  { value: 0, label: "EOS (recommended)" },
  { value: 1, label: "Telos" },
  { value: 2, label: "Ethereum" },
] as { value: number; label: string }[];

export const CMS_OPTIONS = [
  { value: 0, label: CMSType.WORDPRESS },
  { value: 1, label: CMSType.SHOPIFY },
  { value: 2, label: CMSType.LIGHTSPEED },
  { value: 3, label: CMSType.API },
] as { value: number; label: CMSType }[];
