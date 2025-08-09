import { $, component$, useComputed$ } from '@builder.io/qwik';
import { Button } from '../ui/Button';
import { useTheme } from '~/lib/provider';
import { ThemeBaseColors, ThemeConfig, ThemePrimaryColors } from '@qwik-ui/utils';
import { cn } from '@qwik-ui/utils';

export const ColorPicker = component$(() => {
  const { themeSig } = useTheme();

  const themeComputedObjectSig = useComputed$((): ThemeConfig => {
    if (!themeSig.value || themeSig.value === 'light') {
      return {
        font: 'sans',
        mode: 'light',
        style: 'simple',
        baseColor: 'base-slate',
        primaryColor: 'primary-green-600',
        borderRadius: 'border-radius-0',
      };
    }

    const themeArray = Array.isArray(themeSig.value)
      ? themeSig.value
      : themeSig.value.split(' ');
    return {
      font: themeArray[0],
      mode: themeArray[1],
      style: themeArray[2],
      baseColor: themeArray[3],
      primaryColor: themeArray[4],
      borderRadius: themeArray[5],
    };
  });

  const themeStoreToThemeClasses$ = $((): string => {
    const { baseColor, primaryColor } = themeComputedObjectSig.value;
    return [baseColor, primaryColor].join(' ');
  });

  return (
    <div class="flex space-x-4">
      <div>
        <label class="block font-medium">Base Color</label>
        <div class="flex">
          {Object.values(ThemeBaseColors).map((baseColor: string) => {
            const isActive = themeComputedObjectSig.value.baseColor === baseColor;

            return (
              <Button
                key={baseColor}
                look="ghost"
                size="icon"
                onClick$={async () => {
                  themeComputedObjectSig.value.baseColor = baseColor;
                  themeSig.value = await themeStoreToThemeClasses$();
                }}
                class={cn(
                  'flex h-3 w-3 items-center justify-center rounded-none',
                  isActive && 'border-2 border-ring',
                )}
              >
                <span
                  class={cn(
                    'flex h-[10px] w-[10px] shrink-0 rounded-none',
                    baseColor === 'base-slate' && 'bg-slate-500',
                    baseColor === 'base-gray' && 'bg-gray-500',
                    baseColor === 'base-neutral' && 'bg-neutral-500',
                  )}
                />
              </Button>
            );
          })}
        </div>
      </div>

      <div>
        <label class="block font-medium">Primary Color</label>
        <div class="flex justify-end">
          <div class="grid grid-cols-[repeat(22,0fr)]">
            {Object.values(ThemePrimaryColors).map((primaryColor: string) => {
              const isActive = themeComputedObjectSig.value.primaryColor === primaryColor;

              return (
                <Button
                  key={primaryColor}
                  look="ghost"
                  size="icon"
                  onClick$={async () => {
                    themeComputedObjectSig.value.primaryColor = primaryColor;
                    themeSig.value = await themeStoreToThemeClasses$();
                  }}
                  class={cn(
                    'h-3 w-3 rounded-none',
                    isActive && 'border-[1px] border-ring',
                  )}
                >
                  <span
                    class={cn(
                      'flex h-[10px] w-[10px] shrink-0 rounded-none',
                      primaryColor === 'primary-slate-800' && 'bg-slate-200',
                      primaryColor === 'primary-gray-800' && 'bg-gray-200',
                    )}
                  />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
