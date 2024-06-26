import type { Client } from "../client";
export declare function open_stream(this: Client): Promise<void>;
export declare function close_stream(stream_status: {
    open: boolean;
}, stream: EventSource | null): void;
export declare function apply_diff_stream(pending_diff_streams: Record<string, any[][]>, event_id: string, data: any): void;
export declare function apply_diff(obj: any, diff: [string, (number | string)[], any][]): any;
//# sourceMappingURL=stream.d.ts.map