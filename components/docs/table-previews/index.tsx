"use client"

import { TableBadgesPreview } from "@/components/docs/table-previews/badges"
import { TableEmptyPreview } from "@/components/docs/table-previews/empty"
import { TableInCardPreview } from "@/components/docs/table-previews/in-card"
import { TableLoadingPreview } from "@/components/docs/table-previews/loading"
import { TableRowActionsPreview } from "@/components/docs/table-previews/row-actions"
import { TableSelectionPreview } from "@/components/docs/table-previews/selection"
import { TableStructurePreviews } from "@/components/docs/table-previews/structure"
import { TableWithPaginationPreview } from "@/components/docs/table-previews/with-pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 * Table docs examples — one category at a time so the page stays scannable.
 * Structure is the default; Patterns and Compositions stay one click away.
 */
const TablePreviews = () => {
  return (
    <Tabs defaultValue="structure">
      <div className="sticky top-14 z-30 -mx-1 bg-background/80 py-2 backdrop-blur-md">
        <TabsList>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="compositions">Compositions</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="structure" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Anatomy and the API surface — basic, caption, and footer.
        </p>
        <TableStructurePreviews />
      </TabsContent>

      <TabsContent value="patterns" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Row affordances — badges, selection, empty, loading, and row actions.
        </p>
        <TableBadgesPreview />
        <TableSelectionPreview />
        <TableEmptyPreview />
        <TableLoadingPreview />
        <TableRowActionsPreview />
      </TabsContent>

      <TabsContent value="compositions" className="space-y-10">
        <p className="text-sm text-muted-foreground">
          Product shells — Card chrome and Pagination footers.
        </p>
        <TableInCardPreview />
        <TableWithPaginationPreview />
      </TabsContent>
    </Tabs>
  )
}

export { TablePreviews }
