export default {
    "0": {
        id: 1,
        des: "You are looking program for ?",
        option: ["gas", "energy"],
        inputType: "dropDown",
        valueType: "string",
        skip: false,

    },
    "1": {
        id: 2,
        des: "You are looking program for organization or personal use ?",
        option: ["organization", "personal"],
        inputType: "dropDown",
        valueType: "string",
        skip: true,
    },
    "2": {
        id: 3,
        des: "Number of employees ?",
        option: ["0 - 50", "50 - 200", "200 - 1000", "> 1000"],
        inputType: "dropDown",
        valueType: "string",
        skip: false,
        stream: "energy"
    },
    "3": {
        id: 4,
        des: "Est. Annual Natural Gas Budget ?",
        option: ["<$50k", "$50k-$100k", "$100k-$250k", "$250k+"],
        inputType: "dropDown",
        valueType: "string",
        skip: false,
        stream: "gas"
    },
    "4": {
        id: 5,
        des: "Est. Annual Natural Electrcity Budget ?",
        option: ["<$50k", "$50k-$100k", "$100k-$250k", "$250k+"],
        inputType: "dropDown",
        valueType: "string",
        skip: false,
        stream: "energy"
    },
    "5": {
        id: 5,
        des: "Your Name ?",
        inputType: "email",
        valueType: "string",
        skip: false,
        stream: "energy"
    },
    "6": {
        id: 5,
        des: "Organization Name",
        inputType: "text",
        valueType: "string",
        skip: false,

    },
    "7": {
        id: 5,
        des: "Your company email id ?",
        inputType: "email",
        valueType: "string",
        skip: false,

    }
}