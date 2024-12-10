type DailyTemperature = {
    morning: string;
    noon: string;
    evening: string;
};

type TemperatureArray = Array<{
    [day: string]: DailyTemperature;
}>;

type TemperatureRecord = {
    morning: number;
    day: number;
    evening: number;
};

type TemperatureArray2 = TemperatureRecord[];

type TemperatureArray3 = number[][];

const temperatureArray: TemperatureArray = [
    {
        monday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },
    {
        tuesday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },
    {
        wednesday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },
    {
        thursday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },
    {
        friday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },
    {
        saturday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },
    {
        sunday: {
            morning: "10",
            noon: "10",
            evening: "2"
        }
    },

];
const temperatureArray2: TemperatureArray2 = [
    {"morning": 15, "day": 20, "evening": 17},
    {"morning": 14, "day": 19, "evening": 16},
    {"morning": 13, "day": 18, "evening": 15},
    {"morning": 12, "day": 17, "evening": 14},
    {"morning": 11, "day": 16, "evening": 13},
    {"morning": 10, "day": 15, "evening": 12},
    {"morning": 9, "day": 14, "evening": 11}
]
const temperatureArray3: TemperatureArray3 = [
    [10, 20, 2],
    [10, 20, 6],
    [10, 20, 5],
    [10, 20, 2],
    [10, 20, 6],
    [10, 20, 5],
    [10, 20, 5]
]
console.log(temperatureArray, temperatureArray2, temperatureArray3);