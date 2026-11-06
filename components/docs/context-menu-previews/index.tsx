"use client"

import { ContextMenuBasicPreview } from "@/components/docs/context-menu-previews/basic"
import { ContextMenuCheckboxesPreview } from "@/components/docs/context-menu-previews/checkboxes"
import { ContextMenuComplexPreview } from "@/components/docs/context-menu-previews/complex"
import { ContextMenuControlledPreview } from "@/components/docs/context-menu-previews/controlled"
import { ContextMenuLinksInsetPreview } from "@/components/docs/context-menu-previews/links-inset"
import { ContextMenuNestedSubmenusPreview } from "@/components/docs/context-menu-previews/nested-submenus"
import { ContextMenuOnCardPreview } from "@/components/docs/context-menu-previews/on-card"
import { ContextMenuRadiosPreview } from "@/components/docs/context-menu-previews/radios"
import { ContextMenuShortcutsPreview } from "@/components/docs/context-menu-previews/shortcuts"
import { ContextMenuSubmenuPreview } from "@/components/docs/context-menu-previews/submenu"
import { ContextMenuWithDropdownPreview } from "@/components/docs/context-menu-previews/with-dropdown"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Context Menu docs examples — one category at a time so the page stays scannable.
 * Actions is the default; Selection, Nested, and Patterns stay one click away.
 */
const ContextMenuPreviews = () => {
  return (
    <Tabs defaultValue="actions">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="actions">Actions</TabsTrigger>
          <TabsTrigger value="selection">Selection</TabsTrigger>
          <TabsTrigger value="nested">Nested</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="actions" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Everyday right-click menus — basic rows, icons, shortcuts, and links.
        </p>
        <ContextMenuBasicPreview />
        <ContextMenuShortcutsPreview />
        <ContextMenuLinksInsetPreview />
      </TabsContent>

      <TabsContent value="selection" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Toggleable rows — checkboxes and radios.
        </p>
        <ContextMenuCheckboxesPreview />
        <ContextMenuRadiosPreview />
      </TabsContent>

      <TabsContent value="nested" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Nested surfaces — submenus, multi-level nesting, and dense compositions.
        </p>
        <ContextMenuSubmenuPreview />
        <ContextMenuNestedSubmenusPreview />
        <ContextMenuComplexPreview />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Product surfaces — controlled open, card media, and paired Dropdown Menu.
        </p>
        <ContextMenuControlledPreview />
        <ContextMenuOnCardPreview />
        <ContextMenuWithDropdownPreview />
      </TabsContent>
    </Tabs>
  )
}

export { ContextMenuPreviews }
