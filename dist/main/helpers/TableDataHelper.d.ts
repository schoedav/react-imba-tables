import {ReactElement} from "react";

declare const filterData: (data: any[], searchText: string) => any[];
declare const sortData: (data: any[], cols: ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[], sortColId: number, sortAsc: boolean) => any[];
export { filterData, sortData };
