import type {PersonalRecord} from "~/components/model";

export default function (): PersonalRecord[] {
    return [
        {
            type: "Course la plus rapide",
            distance: {
                value: 3.8,
                unit: "km"
            },
            duration: {
                hours: 0,
                minutes: 17,
                seconds: 34
            },
            pace: {
                duration: {
                    hours: 0,
                    minutes: 4,
                    seconds: 36
                },
                unit: "km"
            },
            date: "06/07/2022",
            athleteName: "Alan"
        },
        {
            type: "Course la plus rapide",
            distance: {
                value: 5,
                unit: "km"
            },
            duration: {
                hours: 0,
                minutes: 23,
                seconds: 9
            },
            pace: {
                duration: {
                    hours: 0,
                    minutes: 4,
                    seconds: 38
                },
                unit: "km"
            },
            date: "06/07/2022",
            athleteName: "Alan"
        },
        {
            type: "Course la plus rapide",
            distance: {
                value: 10,
                unit: "km"
            },
            duration: {
                hours: 0,
                minutes: 41,
                seconds: 50
            },
            pace: {
                duration: {
                    hours: 0,
                    minutes: 4,
                    seconds: 11
                },
                unit: "km"
            },
            date: "01/12/2024",
            athleteName: "Alex"
        },
        {
            type: "Course la plus rapide",
            distance: {
                value: 21.1,
                unit: "km"
            },
            duration: {
                hours: 1,
                minutes: 38,
                seconds: 32
            },
            pace: {
                duration: {
                    hours: 0,
                    minutes: 4,
                    seconds: 40
                },
                unit: "km"
            },
            date: "05/09/2024",
            athleteName: "Alex"
        },
        {
            type: "Course la plus longue",
            distance: {
                value: 22,
                unit: "km"
            },
            duration: {
                hours: 2,
                minutes: 11,
                seconds: 0
            },
            pace: {
                duration: {
                    hours: 0,
                    minutes: 5,
                    seconds: 56
                },
                unit: "km"
            },
            date: "21/06/2024",
            athleteName: "Alex"
        },
    ]
}