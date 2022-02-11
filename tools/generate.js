const { generateTemplateFilesCommandLine } = require("generate-template-files");

generateTemplateFilesCommandLine([
    {
        option: "src",
        entry: {
            folderPath: "./tools/templates/src.js",
        },
        stringReplacers: ["__n__"],
        output: {
            path: "./src/day__n__.js",
        },
    },
]);
generateTemplateFilesCommandLine([
    {
        option: "test",
        entry: {
            folderPath: "./tools/templates/test.js",
        },
        stringReplacers: ["__n__"],
        output: {
            path: "./test/day__n__.test.js",
        },
    },
]);
generateTemplateFilesCommandLine([
    {
        option: "data",
        entry: {
            folderPath: "./tools/templates/data.txt",
        },
        stringReplacers: ["__n__"],
        output: {
            path: "./data/day__n___test_input.txt",
        },
    },
]);
