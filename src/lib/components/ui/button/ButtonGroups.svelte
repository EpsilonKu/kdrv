<script lang="ts">
  import { cn } from "../../../../lib/utils";
  import type { HTMLAttributes } from "svelte/elements";
  
  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    variant?: "filled" | "outlined" | "elevated";
    density?: "default" | "comfortable" | "compact";
    class?: string;
    segmented?: boolean;
    fullWidth?: boolean;
  }
  
  export let variant: "filled" | "outlined" | "elevated" = "filled";
  export let density: "default" | "comfortable" | "compact" = "default";
  export let segmented = false;
  export let fullWidth = false;
  
  const buttonGroupVariants = {
    base: "inline-flex rounded-md overflow-hidden",
    variants: {
      filled: "bg-primary shadow-sm",
      outlined: "border border-outline",
      elevated: "bg-surface-container-low shadow-md",
    },
    density: {
      default: "",
      comfortable: "scale-[0.95]",
      compact: "scale-[0.9]",
    }
  };
  
  let className = "";
  export { className as class };
</script>

<div
  class={cn(
    buttonGroupVariants.base,
    buttonGroupVariants.variants[variant],
    buttonGroupVariants.density[density],
    segmented ? "divide-x divide-outline" : "gap-1",
    fullWidth ? "w-full" : "",
    className
  )}
  role="group"
  {...$$restProps}
>
  <slot />
</div>

<style>
  /* Apply Material 3 styling to buttons inside the group */
  div :global(button) {
    border-radius: 0;
    height: 40px;
    transition: background-color 0.2s, box-shadow 0.2s;
  }
  
  /* Remove border radius from first and last buttons to create the group effect */
  div :global(button:first-child) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  
  div :global(button:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  
  /* Styling specific to filled variant */
  div.bg-primary :global(button) {
    background-color: var(--md-sys-color-primary, #6750A4);
    color: var(--md-sys-color-on-primary, #ffffff);
  }
  
  div.bg-primary :global(button:hover) {
    background-color: var(--md-sys-color-primary-container, #EADDFF);
    color: var(--md-sys-color-on-primary-container, #21005E);
  }
  
  /* Styling specific to outlined variant */
  div.border-outline :global(button) {
    background-color: transparent;
    color: var(--md-sys-color-primary, #6750A4);
  }
  
  div.border-outline :global(button:hover) {
    background-color: var(--md-sys-color-surface-variant, #E7E0EC);
  }
  
  /* Styling specific to elevated variant */
  div.bg-surface-container-low :global(button) {
    background-color: var(--md-sys-color-surface-container-low, #F7F2FA);
    color: var(--md-sys-color-primary, #6750A4);
  }
  
  div.bg-surface-container-low :global(button:hover) {
    background-color: var(--md-sys-color-surface-variant, #E7E0EC);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  /* Full width styling */
  div.w-full :global(button) {
    flex: 1;
  }
</style>
