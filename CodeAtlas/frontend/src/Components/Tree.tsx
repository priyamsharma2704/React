import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import type {DirectoryNode} from "../../../types";

type TreeProps = {
    data :DirectoryNode | null;
}

function renderTreeItem(node:DirectoryNode)
{
    return(
        <TreeItem key={node.id} itemId={node.id} label={node.name}>
            {node.children
            ?.slice()
            .sort((a, b) => Number(b.type === 'directory') - Number(a.type === 'directory'))
            .map(renderTreeItem)}
        </TreeItem>
    )
}

export default function Tree({data}:TreeProps) {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        {data && renderTreeItem(data)}
      </SimpleTreeView>
    </Box>
  );
}