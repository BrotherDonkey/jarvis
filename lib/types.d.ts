import { CommanderStatic } from "commander";
import { DotenvConfigOutput } from "dotenv/types";
export interface IProgram extends CommanderStatic {
    xtremely: boolean;
    withFlags: string;
}
export interface IDotConfig extends DotenvConfigOutput {
    DEFAULT_AZURE_DEVOPS_REPO: string;
    DEFAULT_AZURE_DEVOPS_ORGANIZATION: string;
    DEFAULT_AZURE_DEVOPS_PROJECT: string;
    DEFAULT_AZURE_DEVOPS_TARGET: string;
    COMMENT: string;
    AZURE_DEVOPS_ENGINEERING_PROJECT_ID: string;
    AZURE_DEVOPS_WIKI: string;
    AZURE_DEVOPS_WIKI_TEAM_PAGE: string;
    CURRENT_FISCAL_QUARTER: string;
}
export interface IWikiePageResponse {
    eTag: string;
    page: Page;
}
export interface Page {
    content: string;
    gitItemPath: string;
    id: number;
    isNonConformant: null;
    isParentPage: boolean;
    order: number;
    path: string;
    remoteUrl: string;
    subPages: any[];
    url: string;
}
export declare type TTopLevelCommand = 'wiki' | 'pull-request';
export declare type TWikiSubCommand = 'list' | 'show-last' | 'next-week';
export declare type TPRSubCommand = 'create' | 'list';
export declare type ListWikiPagesResponse = WikiPageInfo[];
export interface WikiPageInfo {
    id: string;
    mappedPath: string;
    name: string;
    projectId: string;
    properties: null;
    remoteUrl: string;
    repositoryId: string;
    type: string;
    url: string;
    versions: Version[];
}
export interface Version {
    version: string;
    versionOptions: null;
    versionType: null;
}
