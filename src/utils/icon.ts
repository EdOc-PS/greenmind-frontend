// src/utils/icon.ts
import * as HugeIcons from "@hugeicons/core-free-icons";

/**
 * Tipo exato dos ícones do HugeIcons
 * Isso habilita autocomplete (Ctrl + Space)
 */
export type HugeIconType =
  (typeof HugeIcons)[keyof typeof HugeIcons];
