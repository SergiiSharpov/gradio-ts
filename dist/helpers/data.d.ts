import type { ApiData, BlobRef, Config, EndpointInfo, JsApiData, DataType } from "../types";
export declare function update_object(object: {
    [x: string]: any;
}, newValue: any, stack: (string | number)[]): void;
export declare function walk_and_store_blobs(data: DataType, type?: string | undefined, path?: string[], root?: boolean, endpoint_info?: EndpointInfo<ApiData | JsApiData> | undefined): Promise<BlobRef[]>;
export declare function skip_queue(id: number, config: Config): boolean;
export declare function post_message<Res = any>(message: any, origin: string): Promise<Res>;
//# sourceMappingURL=data.d.ts.map