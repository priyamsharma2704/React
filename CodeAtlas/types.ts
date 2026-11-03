export type GitHubTreeEntry = {
  path: string;
  type: "blob" | "tree";
  sha: string;
  size?: number;
  url: string;
  mode: string;
};

export type DirectoryNode = {
  id: string;
  name: string;
  path: string;
  type: "directory" | "file";
  sha?: string;
  size?: number;
  children?: DirectoryNode[];
};