export interface Duration {
    hours: number
    minutes: number
    seconds: number
}

export interface Distance {
    value: number
    unit: string
}

export interface Pace {
    duration: Duration
    unit: string
}

export interface PersonalRecord {
    type: string
    distance: Distance
    duration: Duration
    pace: Pace
    date: string
    athleteName: string
}