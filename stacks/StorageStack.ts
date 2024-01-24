import { StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {


    const table = new Table(stack, "SheetMusic", {
        fields: {
            noteId: "string",
            musicSheetUniqueName: "string"
        },
        primaryIndex: { 
            partitionKey: "musicSheetUniqueName",
            sortKey: "noteId"
         }
    });

    return {
        table
    }

}