export type Queues = Array<Queue>;

export type QueueList = string[];
export type Settings = {}

export type CoresnGpu = {}

export type Advanced = {}

export type Queue = {
    settings: Settings,
    coresngpu: CoresnGpu,
    advanced: Advanced
}